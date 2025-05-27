import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { config } from '@/lib/config';

export async function POST(request: Request) {
  try {
    // Validate environment variables
    config.validateConfig();
    
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }    // Email sending configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: config.email.user,
        pass: config.email.pass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'pavankumar22119@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP Connection Error:', error);
      throw new Error('Failed to connect to email server. Please check your credentials.');
    }

    // Send email
    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Email Send Error:', error);
      throw new Error('Failed to send email. Please try again later.');
    }

    // Format WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `New Message from Portfolio:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${config.whatsapp.number}&text=${whatsappMessage}`;

    return NextResponse.json({
      message: 'Message sent successfully!',
      whatsappUrl: whatsappUrl
    });
  } catch (error) {
    console.error('Error sending message:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send message';
    let statusCode = 500;    if (error instanceof Error) {
      if (error.message.includes('Missing required environment')) {
        errorMessage = 'Server configuration error. Please check environment variables.';
        statusCode = 500;
      } else if (error.message.includes('Invalid login') || error.message.includes('credentials')) {
        errorMessage = 'Email service authentication failed. Please check email credentials.';
        statusCode = 500;
      } else if (error.message.includes('connect to email server')) {
        errorMessage = 'Unable to connect to email server. Please try again later.';
        statusCode = 503;
      } else {
        errorMessage = error.message;
        statusCode = 500;
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}
