require("dotenv").config();

const mysql = require("mysql2");
const XLSX = require("xlsx");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const workbook = XLSX.readFile(
  "../Inventaire du stock/INVENTAIRE DU STOCK DE LA BOUTIQUE.xlsx"
);

const sheet = workbook.Sheets["Feuil1"];

const rows = XLSX.utils.sheet_to_json(sheet);

let currentProduct = "";

rows.forEach((row) => {

  if (row["Noms du produits"]) {
    currentProduct = row["Noms du produits"];
  }

  // Ignore rows that don't contain a product yet
  if (!currentProduct) return;

  // Ignore title/header rows
  if (!row["Type"]) return;

  db.query(
    `
    INSERT INTO products
    (name,type,stock,price,stock_value)
    VALUES(?,?,?,?,?)
    `,
    [
      currentProduct,
      row["Type"],
      row["Quatitee"] || row["Quatite"] || row["Quantite"] || 0,
      row["PV"] || 0,
      row["total stock"] || 0
    ],
    (err) => {
      if (err) console.log(err);
    }
  );

});

console.log("✅ Products imported successfully.");

db.end();n

function getCategory(productName) {

  const name = productName.toLowerCase();

  if (name.includes("controller"))
    return "Charge Controllers";

  if (name.includes("inverter"))
    return "Inverters";

  if (name.includes("panel"))
    return "Solar Panels";

  if (name.includes("battery"))
    return "Batteries";

  if (
    name.includes("light") ||
    name.includes("lamp")
  )
    return "Solar Lights";

  if (name.includes("pump"))
    return "Solar Pumps";

  if (
    name.includes("cable") ||
    name.includes("wire")
  )
    return "Cables";

  return "Electrical Accessories";
}