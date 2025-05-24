import "dotenv/config";

export const getClientes = async (req, res) => {
  try {
    const response = await fetch(`${process.env.DBLINK}/clientes`);
    if (!response.ok) {
      throw new Error("Error al recuperar datos");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postClientes = async (req, res) => {
  try {
    const { nombre, apellido, dpi, telefono, correo, direccion } = req.body;
    const response = await fetch(`${process.env.DBLINK}/clientes/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        dpi,
        telefono,
        correo,
        direccion,
      }),
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operacion");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${process.env.DBLINK}/clientes/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, dpi, telefono, correo, direccion } = req.body;

    const response = await fetch(`${process.env.DBLINK}/clientes/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        dpi,
        telefono,
        correo,
        direccion,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }

    const data = await response.json();
    res.status(200).json({ message: "Cliente actualizado exitosamente", data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
