import nodemailer from "nodemailer";

const senderEmail = async (to, subject, html) => {
  try {
    console.log("started sending email");
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
