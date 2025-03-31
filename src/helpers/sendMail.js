import nodemailer from "nodemailer";
import "dotenv/config";

export const sendEmail = async (nombre, apellido, telefono, correo, asunto) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.CORREO,
      pass: process.env.CLAVEGOOGLE,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let info = await transporter.sendMail({
    from: `"Formulario de contacto" <${correo}>`,
    replyTo: correo,
    to: process.env.CORREO,
    subject: "Datos de contacto",
    text: `Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono} \nCorreo: ${correo} \nAsunto: ${asunto}`,
  });
};
