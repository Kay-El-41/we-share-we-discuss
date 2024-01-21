import TopicCreateForm from "@/src/components/topics/topic-create-form";

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h2 className="m-2 text-xl">Top Posts</h2>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </main>
  );
}
