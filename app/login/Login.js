export default function Login({ action }) {
  return (
    <form action={action} className="max-w-sm mx-auto mt-10">
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="px-2 py-1 bg-black text-white hover:bg-gray-800"
      >
        login
      </button>
    </form>
  );
}
