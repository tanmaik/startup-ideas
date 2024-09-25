import { submitIdea } from "@/app/actions";

export default function Submit() {
  return (
    <div className="p-4 max-w-lg">
      <form action={submitIdea} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-2 py-1 border"
          />
        </div>

        <div>
          <label htmlFor="link" className="block mb-1">
            social link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            className="w-full px-2 py-1 border"
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-1">
            your startup idea
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="w-full px-2 py-1 border"
            rows="4"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-2 py-1 bg-black text-white hover:bg-gray-800"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
