import { ContactFormType } from "@/components/HomePage/Contact";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.NEXT_PUBLIC_MAILER_EMAIL,
		pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
	},
});

export async function POST(request: NextRequest) {
	try {
		const payload = (await request.json()) as ContactFormType;

		console.log("payload: ", payload);

		await transporter.sendMail({
			to: "barbacenasammy16@gmail.com",
			from: {
				name: payload.company,
				address: payload.email,
			},
			subject: `Portfolio Inquiry from ${payload.company} - Position: ${payload.position}`,
			html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #0073e6;">New Hiring Inquiry</h2>
            <p>You have received a new message from your portfolio:</p>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Company</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${payload.company}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Email</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${payload.email}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Position</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${payload.position}</td>
                </tr>
                <tr>
                    <td style="padding: 8px; font-weight: bold; border: 1px solid #ddd;">Message</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${payload.message}</td>
                </tr>
            </table>
            <p style="margin-top: 20px; color: #666;">Best of luck with your application!</p>
        </div>
    `,
		});

		return NextResponse.json({
			message: "successful",
		});
	} catch (error) {
		return NextResponse.json({
			error: (error as Error).message,
		});
	}
}
