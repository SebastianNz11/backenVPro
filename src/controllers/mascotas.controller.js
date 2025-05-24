import "dotenv/config";

export const getMascotas = async (req, res) => {
  try {
    const response = await fetch(`${process.env.DBLINK}/mascotas/`);
    if (!response.ok) {
      throw new Error("Error al obtener las mascotas");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error(error.message);
  }
};

export const postMascotas = async (req, res) => {
  try {
    const { nombre, especie, raza, edad, id_cliente } = req.body;
    const response = await fetch(`${process.env.DBLINK}/mascotas/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ nombre, especie, raza, edad, id_cliente }),
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, especie, raza, edad, id_cliente } = req.body;
    const response = await fetch(`${process.env.DBLINK}/mascotas/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ nombre, especie, raza, edad, id_cliente }),
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json({ message: "Mascota actualizada exitosamente", data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMascota = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${process.env.DBLINK}/mascotas/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Mascota eliminada exitosamente" });
  } catch (error) {
    console.log(error.message);
  }
};
