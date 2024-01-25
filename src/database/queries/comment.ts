import type { Comment } from "@prisma/client";
import { database } from "@/src/database/database";

export type CommentWithAuthor = Comment & {
  user: { name: string | null; image: string | null };
};

export function fetchCommentByPostId(
  postId: string
): Promise<CommentWithAuthor[]> {
  return database.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
