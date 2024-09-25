"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
async function submitIdea(formData) {
  const description = formData.get("description");
  const email = formData.get("email");
  const link = formData.get("link");

  await prisma.idea.create({
    data: { description, email, link },
  });

  redirect("/");
}

export { submitIdea };
