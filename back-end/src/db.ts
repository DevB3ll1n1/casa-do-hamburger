import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;
console.log(process.env.DATABASE_URL);

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };

export async function connection() {
  try {
    await prisma.$connect();
    console.log("Conectado com o BD.");
  } catch (error) {
    console.log(error);
  }
}
