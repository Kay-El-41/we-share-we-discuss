import PostCreateForm from "@/src/components/posts/post-create-form";
import React from "react";

type TopicShowPageType = {
  params: {
    slug?: string;
    searchParams?: {};
  };
};

const TopicShowPage = (params: TopicShowPageType) => {
  const slug = decodeURI(params.params.slug || "");

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="mb-2 text-2xl font-bold">{slug}</h1>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;
