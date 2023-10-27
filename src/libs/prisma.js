/// con este codigo prism ase conecta a nuestra base de datos

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();