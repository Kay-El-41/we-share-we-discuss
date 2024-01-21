import React from "react";

type TopicShowPageType = {
  params: {
    slug?: string;
    searchParams?: {};
  };
};

const TopicShowPage = (params: TopicShowPageType) => {
  console.log(params.params.slug);
  return <div>{params.params.slug}</div>;
};

export default TopicShowPage;
