// const dotenv=require("dotenv");
// const Pool = require("pg").Pool;
// dotenv.config();

// const pool = new Pool({
//   user: process.env.user,
//   password: process.env.password,
//   host: process.env.host,
//   port: process.env.port,
//   database: process.env.db
// });

// pool.on("error", (error, client) => {
//   console.log(error);
// });

// module.exports = {
//   pool
// };


const dotenv = require("dotenv");
const { Pool } = require("pg");
dotenv.config();

// Use the DATABASE_URL environment variable if it is set
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on("error", (error, client) => {
  console.log("Unexpected error on idle client", error);
});

module.exports = {
  pool
};
