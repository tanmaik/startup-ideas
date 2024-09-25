import Link from 'next/link';

export default function Login({ action }) {
  return (
    <form action={action} className="max-w-sm mx-auto mt-10">
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex space-x-2">
        <button
          type="submit"
          className="px-2 py-1 bg-black text-white hover:bg-gray-800"
        >
          login
        </button>
        <Link
          href="/submit"
          className="px-2 py-1 bg-black text-white hover:bg-gray-800 inline-block"
        >
          submit
        </Link>
      </div>
    </form>
  );
}
