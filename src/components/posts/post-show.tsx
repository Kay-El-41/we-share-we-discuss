import { database } from "@/src/database/database";
import { Post } from "@prisma/client";
import { notFound } from "next/navigation";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  await new Promise((resolve) => setTimeout(resolve, 3500));

  const post = await database.post.findFirst({ where: { id: postId } });

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <h1 className="my-2 text-2xl font-bold">{post.title}</h1>
      <p className="rounded border p-4">{post.content}</p>
    </div>
  );
}
