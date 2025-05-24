import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getEmpleados = async (req, res) => {
  try {
    const response = await fetch(
      `${process.env.DBLINK}/empleados`
    );

    if (!response.ok) {
      throw new Error("Error al recuperar datos");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postEmpleados = async (req, res) => {
  try {
    const { nombre, apellido, id_rol, contra } = req.body;

    // Hasheamos la contraseña
    const salt = await bcrypt.genSalt(10);
    const contrasenia = await bcrypt.hash(contra, salt);

    const response = await fetch(
      `${process.env.DBLINK}/empleados/`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          id_rol,
          contrasenia,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const putCliente = async (req, res) => {
  try {
    const { id } = req.params;
     const { nombre, apellido, id_rol, contra } = req.body;

    // Hasheamos la contraseña
    const salt = await bcrypt.genSalt(10);
    const contrasenia = await bcrypt.hash(contra, salt);

    const response = await fetch(
      `${process.env.DBLINK}/empleados/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          id_rol,
          contrasenia,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }

    const data = await response.json();
    res
      .status(200)
      .json({ message: "Empleados actualizado exitosamente", data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `${process.env.DBLINK}/empleados/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Empleado eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { nombre, contrasenia } = req.body;

  try {
    const response = await fetch(
      `${process.env.DBLINK}/empleados/`
    );
    if (!response.ok) throw new Error("No se pudieron obtener los empleados");

    const data = await response.json();
    const empleados = data.items;

    const empleado = empleados.find((e) => e.nombre === nombre);
    if (!empleado)
      return res.status(401).json({ message: "Empleado no encontrado" });

    const isMatch = await bcrypt.compare(contrasenia, empleado.contrasenia);
    if (!isMatch)
      return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: empleado.id, nombre: empleado.nombre, rol: empleado.id_rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      token,
      empleado: {
        id: empleado.id,
        nombre: empleado.nombre,
        rol: empleado.id_rol,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
