import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const {
  DB_HOST,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE_TEST,
  NODE_ENV,
} = process.env;

let options;

if (NODE_ENV === "test") {
  options = {
    host: DB_HOST,
    database: DB_DATABASE_TEST,
    user: DB_USER,
    password: DB_PASSWORD,
  };
}
if (NODE_ENV === "dev") {
  options = {
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
  };
}

const client = new Pool(options);

export default client;