import { redirect } from "@sveltejs/kit";

export const load = ({ locals, url }) => {
  if (!locals.user) {
    const redirectTo = url.pathname + url.search;

    throw redirect(307, `/login?redirectTo=${redirectTo}`);
  }

  return { user: locals.user };
};
