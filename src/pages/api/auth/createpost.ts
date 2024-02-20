import type { APIRoute } from "astro";
import { XataClient } from "../../../xata";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const titlePost = formData.get("title")?.toString();
  const xata = new XataClient({
    apiKey: import.meta.env.XATA_API_KEY,
    branch: import.meta.env.XATA_BRANCH,
  });

  const record = await xata.db.Posts.create({
    title: titlePost,
    description: "teste",
  });

  console.log(record)

  return redirect("/dashboard");
};
