import "dotenv/config";

export const getCitas = async (req, res) => {
  try {
    const response = await fetch(`${process.env.DBLINK}/citas`);
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error(error.message);
  }
};

export const postCitas = async (req, res) => {
  try {
    const { id_cliente, id_mascota, id_servicio, descripcion, fechaC } =
      req.body;
    const fecha = new Date(`${fechaC}T00:00:00`);
    const response = await fetch(`${process.env.DBLINK}/citas/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id_cliente,
        id_mascota,
        id_servicio,
        descripcion,
        fecha,
      }),
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
  }
};

export const putCitas = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cliente, id_mascota, id_servicio, descripcion, fechaC } =
      req.body;

    const fecha = new Date(`${fechaC}T00:00:00`);

    const response = await fetch(`${process.env.DBLINK}/citas/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id_cliente,
        id_mascota,
        id_servicio,
        descripcion,
        fecha,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCitas = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${process.env.DBLINK}/citas/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Cita eliminada exitosamente" });
  } catch (error) {
    console.error(error.message);
  }
};
