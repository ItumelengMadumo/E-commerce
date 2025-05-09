import { PrismaClient } from "@prisma/client"



export const prisma =
  PrismaClient.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })

if (process.env.NODE_ENV !== "production") PrismaClient.prisma = prisma
