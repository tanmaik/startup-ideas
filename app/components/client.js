import { getIdeas } from "@/app/actions";

export default async function IdeaList() {
  const ideas = await getIdeas();

  return (
    <ul>
      {ideas.map((idea) => (
        <li key={idea.id} className="flex items-center mb-3">
          <div className="flex-grow p-2 border rounded">
            {idea.description} by {idea.email}
          </div>
        </li>
      ))}
    </ul>
  );
}
