"use server"

import * as React from 'react';


import { z } from "zod"
import { formSchema } from "./form-schema"
import { EmailTemplate } from "@/components/email-template"
import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (
    emailFormData: z.infer<typeof formSchema>) => {
    try {
        const { error } = await resend.emails.send({
            from: `Henry <${process.env.RESEND_FROM_EMAIL}>`,
            to: [emailFormData.email],
            subject: "Welcome",
            react: EmailTemplate({
                firstName: emailFormData.name,
                message: emailFormData.message,
            }),
        });

        if (error) {
            throw (error)
        }
    } catch (error) {
        throw (error)
    }
}