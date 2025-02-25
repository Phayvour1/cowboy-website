import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Set this in .env.local
        pass: process.env.EMAIL_PASS, // Set this in .env.local
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Free eBook - Cowboy Love & Mystery",
      html: `
        <h2>Thank you for signing up, ${name}!</h2>
        <p>Here is your complimentary eBook: <a href="http://yourbookdownloadlink.com" target="_blank">Download Now</a></p>
        <p>We hope you enjoy the book! Stay tuned for more exclusive offers.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
