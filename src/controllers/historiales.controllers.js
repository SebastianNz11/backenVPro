import "dotenv/config";

export const getHistoriales = async (req, res) => {
  try {
    const response = await fetch(`${process.env.DBLINK}/historiales_medicos`);
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error(error.message);
  }
};

export const postHistoriales = async (req, res) => {
  try {
    const {
      id_mascota,
      descripcion,
      tratamiento,
      observaciones,
      fechaH,
      id_cita,
    } = req.body;
    const fecha = new Date(`${fechaH}T00:00:00`);
    const response = await fetch(`${process.env.DBLINK}/historiales_medicos/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id_mascota,
        descripcion,
        tratamiento,
        observaciones,
        fecha,
        id_cita,
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

export const putHistoriales = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      id_mascota,
      descripcion,
      tratamiento,
      observaciones,
      fechaH,
      id_cita,
    } = req.body;
    const fecha = new Date(`${fechaH}T00:00:00`);
    const response = await fetch(
      `${process.env.DBLINK}/historiales_medicos/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id_mascota,
          descripcion,
          tratamiento,
          observaciones,
          fecha,
          id_cita,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }

    const data = await response.json();
    res
      .status(200)
      .json({ message: "Historial actualizado exitosamente", data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteHistoriales = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(
      `${process.env.DBLINK}/historiales_medicos/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Historial eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
