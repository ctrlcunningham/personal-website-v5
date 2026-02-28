import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "../db/schema"; // The file we just made
import { cache } from "react";

export const getDb = cache(async () => {
  const context = await getCloudflareContext({ async: true }); 
  
  // Drizzle connects natively to the D1 binding
  return drizzle(context.env.DB, { schema });
});