import { redirect } from "@sveltejs/kit";

export const load = ({ locals, url }) => {
  // if (!locals.user)
  //   throw redirect(307, `/login?redirectTo=${url.search || "/"}`);

  return { user: locals.user };
};
