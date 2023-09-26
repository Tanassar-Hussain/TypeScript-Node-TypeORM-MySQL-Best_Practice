#! /usr/bin/env node

const yargs = require("yargs");
const { execSync } = require("child_process");

const {
  _: [name],
  path,
} = yargs.argv;

try {

  const migrationPath = `src/database/migrations/${name}`;
  execSync(`typeorm migration:create ${migrationPath}`, { stdio: "inherit" });

} catch (error) {

  console.error("Error creating migration:", error.message);
  
}
