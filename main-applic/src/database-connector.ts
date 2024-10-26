import { PrismaClient } from "@prisma/client";

const dbUrl = "file:./../prisma/mydatabase.db  "; //  process.env.DATABASE_URL_DEV;

const prismaClientSingleton = (): PrismaClient => new PrismaClient({
    datasources: { db: { url: dbUrl } },
    log: ["warn", "error"] },
    // log: ["query", "info"] },
);

declare global {
    const prisma: undefined | PrismaClient;
}

const prisma = ((global as any)?.prisma) ?? prismaClientSingleton();

export default prisma;
