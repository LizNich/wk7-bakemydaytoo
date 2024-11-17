// Set up Nodes
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// Set up Server
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// Set up DB connection - link in the .env.
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// ROOT ROUTES
app.get("/", function (request, response) {
  response.json("no diggity no route route");
});

// Link to db
//app.get("/cakes", function (request, response) {
//  response.json("Cakes!");
//});

// get
app.get("/cakes", async function (request, response) {
  const result = await db.query(`
    SELECT 
      types.type_name,
      members.username,
      cakes.description,
      cakes.image
    FROM cakes
    JOIN members ON cakes.member_id = members.member_id
    JOIN types ON cakes.type_id = types.type_id
  `);
  const cakes = result.rows;
  response.json(cakes);
});

// post
app.post("/cakes", async function (request, response) {
  const { type_name, username, description, image } = request.body;
  const result = await db.query(
    "INSERT INTO cakes (type_name, username, description, image) VALUES ($1, $2,$3,$4)",
    [type_name, username, description, image]
  );
  response.json(result);
});

app.listen(8080, () => console.log("App is running on port 8080"));
