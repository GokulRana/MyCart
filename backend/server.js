const app = require("./app");

const dotenv=require("dotenv");
const connectDatabase = require("./config/database")

// ye error generally console me kch bhi likhne pe ayega, Handling Uncaught Exception(in such type of errors we purposely shut down the server)
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


// config

dotenv.config({path: "backend/config/config.env"});

// Connecting to database
connectDatabase()

const server = app.listen(process.env.PORT,() => {
console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection(promise resolved hoga ya toh nhi hoga ye error tb ayega jb promise resolved nhi hoga)
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });