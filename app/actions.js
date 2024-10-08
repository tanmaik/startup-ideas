"use server";

import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
async function submitIdea(formData) {
  console.log("submitIdea", formData);
  const description = formData.get("description");
  const email = formData.get("email");
  const link = formData.get("link");

  await prisma.idea.create({
    data: { description, email, link, approved: true },
  });

  redirect("/");
}

async function getIdeas() {
  return await prisma.idea.findMany({
    where: { approved: true },
    select: { description: true, email: true, link: true },
  });
}

export { submitIdea, getIdeas };
