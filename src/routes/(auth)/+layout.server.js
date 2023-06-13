import { redirect } from "@sveltejs/kit";

export const load = ({ locals, url }) => {
  throw redirect(307, "/v1");

  if (!locals.user) {
    const redirectTo = url.pathname + url.search;

    throw redirect(307, `/login?redirectTo=${redirectTo}`);
  }

  return { user: locals.user };
};
