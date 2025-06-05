"use client"

import type React from "react"
import { useState, useTransition } from "react"
import { useForm, type UseFormReturn, type FieldErrors } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { sendContactEmail } from "./actions"

const formSchema = z.object({
  name: z.string().min(2, { message: '"Name must be at least 2 characters."' }),
  email: z.string().email({ message: '"Please enter a valid email address."' }),
  message: z.string().min(10, { message: '"Message must be at least 10 characters."' }),
  honeypot: z.string().optional(),
})

export type ContactFormData = z.infer<typeof formSchema>

export interface UseContactFormReturn {
  formMethods: UseFormReturn<ContactFormData>
  handleSubmitForm: (e?: React.BaseSyntheticEvent) => Promise<void>
  isPending: boolean
  formMessage: { type: "success" | "error"; text: string } | null
  errors: FieldErrors<ContactFormData>
}

export function useContactForm(): UseContactFormReturn {
  const [isPending, startTransition] = useTransition()
  const [formMessage, setFormMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const formMethods = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  })

  const {
    reset,
    formState: { errors },
  } = formMethods

  const onSubmit = async (data: ContactFormData) => {
    setFormMessage(null)

    startTransition(async () => {
      const result = await sendContactEmail(data)
      if (result.success) {
        setFormMessage({ type: "success", text: result.message || '"Your message has been sent successfully!"' })
        reset()
      } else {
        setFormMessage({ type: "error", text: result.message || '"An error occurred. Please try again."' })
      }
    })
  }

  return {
    formMethods,
    handleSubmitForm: formMethods.handleSubmit(onSubmit),
    isPending,
    formMessage,
    errors,
  }
}
