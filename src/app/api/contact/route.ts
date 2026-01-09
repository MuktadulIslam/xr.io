import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

const EMAIL_USER = "muktadul.iitdu@gmail.com"
// Use an App Password (not your regular Gmail password)
// Generate one at: https://myaccount.google.com/apppasswords
const EMAIL_PASSWORD = "dqhf jstv mpyy siir"

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASSWORD,
	},
});

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { firstName, lastName, email, phone, message } = body;
		console.log(firstName, lastName, email, phone, message)

		// Validate required fields
		if (!firstName || !lastName || !email || !message) {
			return NextResponse.json(
				{ error: 'Missing required fields' },
				{ status: 400 }
			);
		}

		// Configure email options
		const mailOptions = {
			from: EMAIL_USER,
			to: 'contact@craftxr.io',
			replyTo: email, // User's email for easy replies
			subject: `Contact Inquiry - ${firstName} ${lastName}`,
			html: `
				<!DOCTYPE html>
				<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
				</head>
				<body style="margin: 0; padding: 0; background-color: #f0fdfa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
					<table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f0fdfa; padding: 40px 20px;">
						<tr>
							<td align="center">
								<table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
									<!-- Header -->
									<tr>
										<td style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%); padding: 40px 30px; text-align: center;">
											<h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
												New Contact Inquiry
											</h1>
											<p style="color: #ccfbf1; margin: 10px 0 0 0; font-size: 14px; font-weight: 400;">
												Received on ${new Date().toLocaleDateString('en-US', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}
											</p>
										</td>
									</tr>

									<!-- Contact Information Section -->
									<tr>
										<td style="padding: 35px 30px 20px 30px;">
											<h2 style="color: #0f766e; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #99f6e4; padding-bottom: 10px;">
												Contact Details
											</h2>
											<table role="presentation" style="width: 100%; border-collapse: collapse;">
												<tr>
													<td style="padding: 12px 0; border-bottom: 1px solid #e0f2f1;">
														<span style="color: #115e59; font-weight: 600; font-size: 14px; display: inline-block; width: 100px;">Full Name:</span>
														<span style="color: #134e4a; font-size: 14px;">${firstName} ${lastName}</span>
													</td>
												</tr>
												<tr>
													<td style="padding: 12px 0; border-bottom: 1px solid #e0f2f1;">
														<span style="color: #115e59; font-weight: 600; font-size: 14px; display: inline-block; width: 100px;">Email:</span>
														<a href="mailto:${email}" style="color: #0d9488; font-size: 14px; text-decoration: none;">${email}</a>
													</td>
												</tr>
												<tr>
													<td style="padding: 12px 0;">
														<span style="color: #115e59; font-weight: 600; font-size: 14px; display: inline-block; width: 100px;">Phone:</span>
														<span style="color: #134e4a; font-size: 14px;">${phone || 'Not provided'}</span>
													</td>
												</tr>
											</table>
										</td>
									</tr>

									<!-- Message Section -->
									<tr>
										<td style="padding: 20px 30px 35px 30px;">
											<h2 style="color: #0f766e; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #99f6e4; padding-bottom: 10px;">
												Message Content
											</h2>
											<div style="background-color: #f0fdfa; border-left: 4px solid #14b8a6; padding: 20px; border-radius: 4px;">
												<p style="color: #134e4a; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
											</div>
										</td>
									</tr>

									<!-- Footer -->
									<tr>
										<td style="background-color: #f0fdfa; padding: 25px 30px; text-align: center; border-top: 3px solid #14b8a6;">
											<p style="color: #0f766e; font-size: 12px; margin: 0; line-height: 1.5;">
												This message was submitted through the contact form on <strong>craftxr.io</strong>
											</p>
											<p style="color: #5eead4; font-size: 11px; margin: 8px 0 0 0;">
												Please respond to the inquiry at your earliest convenience.
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
				</body>
				</html>
			`,
			text: `
				NEW CONTACT INQUIRY
				${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

				================================================================================
				CONTACT DETAILS
				================================================================================

				Full Name:    ${firstName} ${lastName}
				Email:        ${email}
				Phone:        ${phone || 'Not provided'}

				================================================================================
				MESSAGE CONTENT
				================================================================================

				${message}

				--------------------------------------------------------------------------------
				This message was submitted through the contact form on craftxr.io
				Please respond to the inquiry at your earliest convenience.
			`,
		};

		// Send email using Nodemailer
		const info = await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ success: true, message: 'Email sent successfully', messageId: info.messageId },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Server error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
