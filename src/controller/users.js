import { pool } from "../databases";
import { hashPassword } from "../security/verify";

//crear usuarios
export const createUsers = async (req, res) => {
  //desenpaquetar lo del frontend
  const { nombre, mail, password, apellido, is_profe, dni } = req.body;

  try {
    const hashedPassword = hashPassword(password);
    //tarea uno validad lo que viene del frontend
    //agregar despues la validacion de email
    const query =
      "INSERT INTO usuarios (nombre, apellido, mail, contrasena, is_profe, dni) VALUES (?,?,?,?,?,?)";
    const valores = [nombre, apellido, mail, hashedPassword, is_profe, dni];

    //en la consulta de query viene dos valos
    const [row] = await pool.query(query, valores);

    if (row.affectedRows === 1)
      return res
        .status(201)
        .json({ success: true, message: "usuario creado con exito" });

    return res
      .status(400)
      .json({ success: false, message: "no se creo el usuario" });
  } catch (error) {
    console.log("error al crear usuario", error);
    return res.status(400).json({ error: error });
  }
};

//funcion la el login !!
//envar el token hacie el front
