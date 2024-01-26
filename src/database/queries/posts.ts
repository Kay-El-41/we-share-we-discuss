import type { Post } from "@prisma/client";
import { database } from "@/src/database/database";

// export type EnrichedPostDetailForList = Post & {
//   topic: { slug: string };
//   user: { name: string | null };
//   _count: { comments: number };
// };

export type EnrichedPostDetailForList = Awaited<
  ReturnType<typeof fetchPostsByTopicSlug>
>[number];

export function fetchPostsByTopicSlug(
  slug: string
  // ): Promise<EnrichedPostDetailForList[]> {
) {
  return database.post.findMany({
    where: {
      topic: { slug },
    },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}

//? We could use both of the type defining.
//? The first method was custom and you will have to write every single time you made another query like this.
//? The second method is more likely for TypeScript junkies, where you can take the return of the function and convert it into a type.
