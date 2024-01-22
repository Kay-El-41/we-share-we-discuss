import Link from "next/link";
import { database } from "@/src/database/database";
import { Chip } from "@nextui-org/react";
import paths from "@/src/paths";

export default async function TopicLists() {
  const topics = await database.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-wrap gap-2">{renderedTopics}</div>;
}
