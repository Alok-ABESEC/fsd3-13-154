import { writeFile } from "fs/promises";

await writeFile("stud.txt", "Name: Alok Yadav");
console.log("File written");
