import { createConnection } from "typeorm";

createConnection().then(() =>
  console.log("Sucessfully connected with database")
);
// vai pegar as configs do ormconfig
