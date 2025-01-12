import nodemailer from "nodemailer";
import dotenv from "dotenv"
import { WELCOME_EMAIL_TEMPLATE } from "./emailTemplate.js";
import AppError from "../error/AppError.js";

dotenv.config();
export const sendWelcomeEmail = async (email, name) => {
    const organizationName = process.env.ORGANIZATION_NAME || "BloodLine";
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: `"${organizationName}" <${process.env.EMAIL}>`,
        to: email,
        subject: "Welcome to BloodLine!",
        html: WELCOME_EMAIL_TEMPLATE.replace("[User's Name]", name)
    } 

    transporter.sendMail(mailOptions, (error,info) => {
        if(error) {
            console.error("Error sending Welcome email", error);
            throw new AppError(`Error sending Welcome email ${error}`)
        } else {
            console.log("Email sent successfully", info.response);
        }
    })
}
