import { PrismaClient } from "@prisma/client";

const dbUrl = process.env.DATABASE_URL_DEV;

const prismaClientSingleton = (): PrismaClient => new PrismaClient({ datasources: { db: { url: dbUrl } }, log: ["warn", "error"] });

declare global {
    const prisma: undefined | PrismaClient;
}

const prisma = ((global as any)?.prisma) ?? prismaClientSingleton();

export default prisma;
