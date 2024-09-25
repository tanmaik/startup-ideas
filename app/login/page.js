import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Login from "./Login";

async function loginAction(formData) {
  "use server";
  console.log("loginAction", formData);

  const password = formData.get("password");
  if (password === "peepee") {
    cookies().set("isLoggedIn", "true", { maxAge: 60 * 60 * 24 * 7 }); // 7 days
    redirect("/");
  }
  return { error: "Incorrect password" };
}

export default async function LoginPage() {
  return <Login action={loginAction} />;
}
