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
//? When using the second type, you do not need to add the return type, instead you have define the type in the actual usage.

export function fetchTopPosts() {
  return database.post.findMany({
    orderBy: [
      {
        comments: {
          _count: "desc",
        },
      },
    ],
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    take: 5,
  });
}

export function fetchPostsBySearch(term: string) {
  return database.post.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true, image: true } },
      _count: { select: { comments: true } },
    },
    where: {
      OR: [
        {
          title: { contains: term },
        },
        {
          content: { contains: term },
        },
      ],
    },
  });
}
