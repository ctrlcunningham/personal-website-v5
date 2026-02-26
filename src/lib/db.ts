import { getCloudflareContext } from "@opennextjs/cloudflare";
import { PrismaClient } from "../generated/prisma";
import { PrismaD1 } from "@prisma/adapter-d1";
import { cache } from "react";

export const getDb = cache(async () => {
  const context = await getCloudflareContext({ async: true }); 
  const env = context.env;
  
  const adapter = new PrismaD1(env.DB);
  return new PrismaClient({ adapter });
});