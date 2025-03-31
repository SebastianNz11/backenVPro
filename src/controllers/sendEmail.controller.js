import { sendEmail } from "../helpers/sendMail.js";

export const enviarCorreo = async (req, res) => {
  try {
    const { nombre, apellido, telefono, correo, asunto } = req.body;
    await sendEmail(nombre, apellido, telefono, correo, asunto);
    res.status(200).json({ message: "Correo electrónico enviado con éxito." });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: "Hubo un error al enviar el correo electrónico." });
  }
};
