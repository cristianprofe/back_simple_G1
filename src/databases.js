//este archivo nos permitira conectarnos con la base de datos

import { config } from "./config";
import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  port: config.port,
  queueLimit: 0,
  connectionLimit: 10,
});
