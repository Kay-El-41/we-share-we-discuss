"use server";
import paths from "../paths";
import { z } from "zod";
import { auth } from "@/src/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { database } from "@/src/database/database";
import type { Post } from "@prisma/client";

interface CreatePostProps {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export async function createPost(
  slug: string,
  formState: CreatePostProps,
  formData: FormData
): Promise<CreatePostProps> {
  const validationResult = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to create a post"],
      },
    };
  }

  const topic = await database.topic.findFirst({ where: { slug } });

  if (!topic) {
    return {
      errors: {
        _form: [
          "Cannot create a post under this topic. Topic no longer existed.",
        ],
      },
    };
  }

  let post: Post;

  try {
    post = await database.post.create({
      data: {
        title: validationResult.data.title,
        content: validationResult.data.content,
        //@ts-ignore: next-auth-type-error, we fixed that problem in the auth.ts
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong. Please try again later."],
        },
      };
    }
  }

  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
}
