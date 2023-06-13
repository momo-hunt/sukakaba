import { json } from "@sveltejs/kit";

export const GET = async ({ params, locals, url }) => {
  const option = Object.fromEntries(url.searchParams);

  const data = await locals.db.collection(params.collection).read(option);

  return json(data);
};
