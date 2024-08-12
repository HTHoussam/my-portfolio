'use server';

import contactMeSchema, { ContactMeSchemaType } from '@/lib/validationSchema';
import nodemailer from 'nodemailer';

export async function emailme(formData: ContactMeSchemaType): Promise<void> {
	return new Promise(async (resolve, reject) => {
		const result = contactMeSchema.safeParse(formData);
		const { data, success } = result;

		if (success && data) {
			const { email, name, message, subject } = data;

			const transporter = nodemailer.createTransport({
				host: 'mail.infomaniak.com',
				port: 465,
				secure: true, // true for 465, false for other ports
				auth: {
					user: process.env.EMAIL_USERNAME,
					pass: process.env.EMAIL_PASSWORD,
				},
			});

			// Define the email options
			const mailOptions = {
				from: {
					name: name,
					address: process.env.EMAIL_USERNAME ?? '',
				},
				replyTo: email,
				to: process.env.EMAIL_USERNAME ?? '',
				subject: `${subject}`,
				text: `Name: ${formData.name}\nEmail: ${email}\nMessage: ${formData.message}`,
			};

			try {
				// Send the email
				await transporter.sendMail(mailOptions);
				console.log('Email sent successfully');
				resolve(); // Resolve the promise on success
			} catch (error: any) {
				console.error('Error sending email:', error);
				reject(new Error(`Error sending email: ${error.message}`)); // Reject the promise on error
			}
		} else {
			reject(new Error('Validation failed')); // Reject if validation fails
		}
	});
}
