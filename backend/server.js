const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
require("dotenv").config({ path: path.resolve(process.cwd(), "database.env") });
const pgp = require("pg-promise")();

const connection = {
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};
const db = pgp(connection);

async function select_db(query) {
  try {
    const source_rows = await db.any(query);
    return source_rows;
  } catch (e) {
    console.error(e);
  }
}

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/sources", (req, res) => {
  select_db(`SELECT * FROM learn_climate_data_sources`).then((rows) => {
    console.log(rows);
    res.json({ rows: rows });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
