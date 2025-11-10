import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from '@/lib/prisma'
import { emailOTP } from 'better-auth/plugins'
import { Resend } from 'resend'
import { redirect } from 'next/navigation'

const resend = new Resend(process.env.RESEND_API_KEY)

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    emailOTP({
      overrideDefaultEmailVerification: true,
      otpLength: 8,
      expiresIn: 600,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          const { data, error } = await resend.emails.send({
            from: "no-reply@resend.dev",
            to: email,
            subject: "Seu código de login",
            text: `Use este código para login: ${otp}`,
          });
          if (error) {
            return console.log("Algo deu errado com o envio do código")
          }
          console.log("Código   enviado")

        } else if (type === "email-verification") {

        } else {

        }
      }
    })
  ]
})
