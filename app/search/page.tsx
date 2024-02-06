import { redirect } from "next/navigation";

type SearchPageProps = {
  searchParams: {
    term: String;
  };
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return <div>{term}</div>;
};

export default SearchPage;
