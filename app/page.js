import NotionList from "./components/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default function Home() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">ideas</h1>

      <NotionList />
      <form
        action={async () => {
          "use server";
          cookies().set("isLoggedIn", "false");
          redirect("/");
        }}
      >
        <button
          type="submit"
          className="px-2 py-1 bg-black text-white hover:bg-gray-800"
        >
          sign out
        </button>{" "}
      </form>
    </div>
  );
}
