import { NextRequest } from "next/server";
import mailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json();

  if (!email || !name || !message) {
    return Response.json({
      message: "Please provide all the required fields. (name, email, message)",
    });
  }

  const transporter = mailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAILER_USERNAME,
      pass: process.env.NEXT_PUBLIC_MAILER_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <zeeshanasif@deversiti.com>`,
    to: ["zeeshanasif0007@gmail.com"],
    subject: "Zeeshan Asif - Contact Form",
    text: "",
    html: getHTML(name, email, message),
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    return Response.json({
      message: "Error sending email",
      error: String(error),
    });
  }
}

const getHTML = (name: string, email: string, message: string) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <!-- CSS STYLE FOR EMAIL MESSAGE -->
        <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }

        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }

        p {
            margin-bottom: 20px;
        }

        strong {
            font-weight: bold;
        }
        </style>
    </head>
    <body>
        <!-- HTML CONTENT FOR EMAIL. -->
        <!-- IT WILL CONTAIN USER NAME, EMAIL, AND MESSAGE -->
        <div>
        <h1>Hi, Zeeshan!</h1>
        <p>
            You have received a new message from <strong>${name}</strong> with
            email <strong>${email}</strong>
        </p>
        <p><strong>Message:</strong> ${message}</p>
        </div>
    </body>
    </html>
  `;
};
