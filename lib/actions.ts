'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from './utils';
import ContactFormEmail from '@/emails/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
	const email = formData.get('email');
	const message = formData.get('message');

	if (!validateString(email, 500)) {
		return {
			error: 'Invalid email',
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: 'Invalid message',
		};
	}

	let data;
	try {
		data = await resend.emails.send({
			from: 'Portfolio Contact Form <onboarding@resend.dev>',
			to: 'glenw.2022@smu.edu.sg',
			subject: 'Message from contact form',
			reply_to: email as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				email: email as string,
			}),
		});
	} catch (error) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
}
