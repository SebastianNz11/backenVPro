export const getRoles = async (req, res) => {
    try {
      const response = await fetch(
        "https://apex.oracle.com/pls/apex/vetpro/roles/"
      );
      if (!response.ok) {
        throw new Error("Error al realizar la operación");
      }
      const data = await response.json();
      res.status(200).json(data.items);
    } catch (error) {
      console.error(error.message);
    }
  };