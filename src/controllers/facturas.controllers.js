import "dotenv/config";

export const getFacturas = async (req, res) => {
  try {
    const response = await fetch(`${process.env.DBLINK}/facturas`);
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error(error.message);
  }
};

export const postFactura = async (req, res) => {
  try {
    const { id_cita, id_insumo, id_metodo, fechaF, precio } = req.body;
    const fecha = new Date(`${fechaF}T00:00:00`);
    const response = await fetch(`${process.env.DBLINK}/facturas/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id_cita,
        id_insumo,
        id_metodo,
        fecha,
        precio,
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

export const putFactura = async (req, res) => {
  try {
    const { id } = req.params;
    const { id_cita, id_insumo, id_metodo, fechaF, precio } = req.body;
    const fecha = new Date(`${fechaF}T00:00:00`);

    const response = await fetch(`${process.env.DBLINK}/facturas/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id_cita,
        id_insumo,
        id_metodo,
        fecha,
        precio,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }

    const data = await response.json();
    res.status(200).json({ message: "Factura actualizada exitosamente", data });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteFactura = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${process.env.DBLINK}/facturas/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Factura eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
