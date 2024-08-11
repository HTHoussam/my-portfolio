"use server";

import contactMeSchema, { ContactMeSchemaType } from "@/lib/validationSchema";
import nodemailer from "nodemailer";

export async function emailme(formData: ContactMeSchemaType) {
  const result = contactMeSchema.safeParse(formData);
  const { data, success } = result;
  if (success && data) {
    const { email, name, message, subject } = data;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USERNAME,
      subject: `${subject}`,
      text: `Name: ${formData.name}\nEmail: ${email}\nMessage: ${formData.message}`,
    };
    try {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });
    } catch (error: any) {
      throw Error("Error sending email:", error);
    }
    // Send the email
  }
}
