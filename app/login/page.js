"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password == "peepee") {
      Cookies.set("isLoggedIn", "true", { expires: 7 });
      
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full p-2 mb-4 border rounded"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Login
      </button>
    </form>
  );
}
