import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
    error: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Nombre, Email, Mensaje } = req.body;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "jpcezzane@gmail.com",
            pass: "fznhwisgmjcpdbbs"
        }
    });
    try {
        await transporter.sendMail({
            from: Email,
            to: "jpcezzane@gmail.com",
            subject: "Highway Car Rental | Website Contact",
            html: ` 
            <p><strong>Name:</strong>${Nombre}</p></br>
            <p><strong>From:</strong>${Email}</p></br>
            <p><strong>Message: </strong> ${Mensaje}</p></br>
            `
        });
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
    return res.status(200).json({ error: "" });
}