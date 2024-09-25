import NotionList from "./components/client";

export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ideas</h1>
      <NotionList />
    </div>
  );
}
