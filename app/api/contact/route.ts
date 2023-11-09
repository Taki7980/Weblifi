
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request,) {
  if (req.method === 'POST') {

    const { first_name, last_name, email, phone_number, info } = await req.json();


    try {
      const transporter = nodemailer.createTransport( {
 
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth : {
            user: 'nirjharsarkar8@gmail.com',
            pass: process.env.GOOGLE_PASS
        }
    } );
    




      const mailOptions = {
        from: email, 
        to: 'nirjharsarkar8@gmail.com',
        subject: 'Contact Form Submission',
        html: `
        <h2>Contact Form Submission</h2>
        <p><strong>First Name:</strong> ${first_name}</p>
        <p><strong>Last Name:</strong> ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone_number}</p>
        <p><strong>Info:</strong> ${info}</p>

      `,
    };





      // Send the email
      await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email has been sent' });
  
    } catch (error) {
      console.error(error);

        return NextResponse.json({message: 'Error sending email'});

    }
  } else {
    
    return NextResponse.json({message: 'Method not allowed'});


  }
}







