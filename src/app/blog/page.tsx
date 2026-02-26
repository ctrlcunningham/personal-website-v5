import { getDb } from "@/lib/db";
import { playwrite_gb, noto_sans } from "../layout";
import Link from "next/link";

export default async function Blog_PostList() {
  const prisma = await getDb();
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <>
      <h1 className={`text-4xl ${playwrite_gb.className} m-4`}>posts</h1>
      {/* <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li> */}
      <div className={`m-4 list-disc text-xl flex flex-col ${noto_sans.className}`}>
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="w-fill bg-ctp-mantle m-4 p-4 rounded-lg flex justify-between">
            <div>
              <h2 className={`text-3xl ${playwrite_gb.className}`}>{post.title}</h2>
              <p className="text-xs">{post.content.substring(0,100)}...</p>
            </div>
            <p className="text-ctp-surface0 hidden lg:inline">{post.createdAt.toISOString()}</p>
          </Link>
        ))}
      </div>
    </>
  );
}