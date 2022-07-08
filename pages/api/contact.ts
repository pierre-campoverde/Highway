import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
    error: string
}
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { Nombre, Email, Mensaje } = req.body;
    const transporter = nodemailer.createTransport({})
}