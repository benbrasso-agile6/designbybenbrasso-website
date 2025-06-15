"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, AlertTriangle } from "lucide-react"
import { useContactForm } from "./use-contact-form"

export default function ContactForm() {
  const { formMethods, handleSubmitForm, isPending, formMessage, errors } = useContactForm()

  const { register } = formMethods

  return (
    <div className="bg-white dark:bg-neutral-900 p-8 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg">
      <form onSubmit={handleSubmitForm} className="space-y-6">
        <div className="text-left">
          <Label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Full Name
          </Label>
          <Input
            id="name"
            {...register("name")}
            className="mt-1 block w-full border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name.message}</p>}
        </div>

        <div className="text-left">
          <Label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email.message}</p>}
        </div>

        <div className="text-left">
          <Label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Message
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            rows={5}
            className="mt-1 block w-full border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-white"
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message.message}</p>}
        </div>

        <div className="absolute w-0 h-0 overflow-hidden">
          <Label htmlFor="honeypot_field">Do not fill this if you are human:</Label>
          <Input id="honeypot_field" type="text" {...register("honeypot")} autoComplete="off" tabIndex={-1} />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-sky-800 hover:bg-sky-900 text-white dark:bg-sky-700 dark:hover:bg-sky-800 text-base py-3"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        {formMessage && (
          <div
            className={`mt-4 flex items-center p-3 rounded-md text-sm ${
              formMessage.type === "success"
                ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
            }`}
          >
            {formMessage.type === "success" ? (
              <CheckCircle className="mr-2 h-5 w-5" />
            ) : (
              <AlertTriangle className="mr-2 h-5 w-5" />
            )}
            {formMessage.text}
          </div>
        )}
      </form>
    </div>
  )
}
