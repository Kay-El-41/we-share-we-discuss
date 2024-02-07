import { redirect } from "next/navigation";
import PostList from "@/src/components/posts/post-list";
import { fetchPostsBySearch } from "@/src/database/queries/posts";

type SearchPageProps = {
  searchParams: {
    term: string;
  };
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearch(term)} />
    </div>
  );
};

export default SearchPage;
