import "dotenv/config";

export const getInsumos = async (req, res) => {
  try {
    const response = await fetch(`${process.env.DBLINK}/insumos`);
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    const data = await response.json();
    res.status(200).json(data.items);
  } catch (error) {
    console.error(error.message);
  }
};

export const postInsumos = async (req, res) => {
  try {
    const { nombre, cantidad, fecha_ingresoI, fecha_vencimientoI, proveedor } =
      req.body;
    const fecha_ingreso = new Date(`${fecha_ingresoI}T00:00:00`);
    const fecha_vencimiento = new Date(`${fecha_vencimientoI}T00:00:00`);
    const response = await fetch(`${process.env.DBLINK}/insumos/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        cantidad,
        fecha_ingreso,
        fecha_vencimiento,
        proveedor,
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

export const putInsumos = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, cantidad, fecha_ingreso, fecha_vencimiento, proveedor } =
      req.body;
    const response = await fetch(`${process.env.DBLINK}/insumos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        cantidad,
        fecha_ingreso,
        fecha_vencimiento,
        proveedor,
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

export const deleteInsumos = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await fetch(`${process.env.DBLINK}/insumos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al realizar la operación");
    }
    res.status(200).json({ message: "Insumo eliminado exitosamente" });
  } catch (error) {
    console.error(error.message);
  }
};
