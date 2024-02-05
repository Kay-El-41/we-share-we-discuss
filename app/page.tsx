import TopicCreateForm from "@/src/components/topics/topic-create-form";
import TopicLists from "@/src/components/topics/topic-list";
import { Divider } from "@nextui-org/react";
import { fetchTopPosts } from "@/src/database/queries/posts";
import PostList from "@/src/components/posts/post-list";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h2 className="m-2 text-xl">Top Posts</h2>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div>
        <TopicCreateForm />
        <Divider className="my-2" />
        <div>
          <h3 className="text-lg font-semibold">Topics</h3>
          <TopicLists />
        </div>
      </div>
    </main>
  );
}
