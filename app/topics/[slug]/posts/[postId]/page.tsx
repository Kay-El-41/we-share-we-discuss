import Link from "next/link";
import PostShow from "@/src/components/posts/post-show";
import CommentList from "@/src/components/comments/comment-list";
import CommentCreateForm from "@/src/components/comments/comment-create-form";
import paths from "@/src/paths";
import { fetchCommentByPostId } from "@/src/database/queries/comment";
import { Suspense } from "react";
import PostShowLoading from "@/src/components/posts/post-show-loading";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {"< "}Back to {decodeURI(slug)}
      </Link>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList fetchData={() => fetchCommentByPostId(postId)} />
    </div>
  );
}
