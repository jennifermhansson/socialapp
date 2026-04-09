import { SQL } from "bun";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) throw new Error("Provide DATABASE_URL env!");

export const db = new SQL(databaseUrl, {});

/*
Code-first

I vår kod bestämmer vi hur databasschemat ser ut. 

*/

/* Database-first

Vi skapar strukturen och tabellerna i databasen direkt, och sedan kör vi queries mot databasen
från vår kod. Det är vår SQL-kod som är ansvarig över att bevara och hålla koll på databasschema.
Vår kod använder bara den befintliga strukturen.

*/
