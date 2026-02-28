export const dynamic = "force-dynamic";

import { eq } from "drizzle-orm"; 
import { posts } from "@/db/schema";
import { getDb } from "@/lib/db";
import Link from "next/link";
import { playwrite_gb, noto_sans, noto_sans_light } from "../../layout"
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export default async function Blog_ViewPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const slug_num = Number(slug);

  if (isNaN(slug_num)) {
    return 400;
  }

  const db = await getDb();
  const allPosts = (await db.select().from(posts).where(eq(posts.id, slug_num)));
  const post = allPosts[0];
  if (post === null) {
    return 404;
  }

  const cleanHtml = sanitizeHtml(await marked.parse(post.content));

  return (
    <>
      <Link className={`text-2xl m-4 text-ctp-sky ${noto_sans_light.className}`} href="/blog">return to post list</Link>
        <div className="bg-ctp-mantle p-4 rounded-xl m-6 w-fit">
          <h2 className={`text-6xl ${playwrite_gb.className} m-4 mb-6`}>{post.title}</h2>
          <div className={`
            m-4
            prose lg:prose-lg
            dark:prose-invert

            prose-headings:font-playwrite prose-headings:font-bold
            prose-h1:text-5xl prose-h2:text-4xl
            prose-h3:text-3xl prose-h4:text-2xl
          `} dangerouslySetInnerHTML={{ __html: cleanHtml }} />
        </div>
    </>
  )
}