"use server"

import { Resend } from "resend"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honeypot: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const resend = new Resend(process.env.RESEND_API_KEY)
const recipientEmail = "benbrasso@gmail.com"

export async function sendContactEmail(data: FormData): Promise<{ success: boolean; message?: string }> {
  if (data.honeypot) {
    console.log("Honeypot field filled.")
    return { success: true, message: "Your message has been received." }
  }

  const validatedFields = formSchema.safeParse(data)

  if (!validatedFields.success) {
    console.error("Server-side validation failed:", validatedFields.error.flatten().fieldErrors)
    return { success: false, message: "Invalid form data." }
  }

  const { name, email, message } = validatedFields.data

  try {
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [recipientEmail],
      subject: "New Contact Form Submission",
      reply_to: email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (emailError) {
      console.error("Resend API Error:", emailError)
      return { success: false, message: "Failed to send email." }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, message: "An unexpected error occurred." }
  }
}
