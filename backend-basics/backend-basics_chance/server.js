import { createServer } from "node:http";
import Chance from "chance";
const chance = new Chance();
const name1 = chance.name();
const age = chance.age();
const profession = chance.profession();
console.log(name1, age, profession);
export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name1} and I am ${age} years old. I am a ${profession}.`
  );
});
