import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const posts = sqliteTable('Post', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull().unique(),
  content: text('content').notNull(),
  createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
});