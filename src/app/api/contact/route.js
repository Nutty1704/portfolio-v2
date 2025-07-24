import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USER,
    pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD
  }
});

export async function POST(request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();
    
    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' }, 
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' }, 
        { status: 400 }
      );
    }

    // Send email to yourself
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: process.env.NEXT_PUBLIC_GMAIL_USER,
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Portfolio Contact Message
          </h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4f46e5;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
      replyTo: email // This allows you to reply directly to the sender
    });

    return NextResponse.json({ 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Handle specific Gmail errors
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please try again later.' }, 
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact me directly.' }, 
      { status: 500 }
    );
  }
}