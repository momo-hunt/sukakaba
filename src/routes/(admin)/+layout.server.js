import { error } from "@sveltejs/kit";

import { redirect } from "@sveltejs/kit";
import { SECRET_ROLE_ADMIN } from "$env/static/private";

export const load = ({ locals, url }) => {
  if (!locals.user) {
    const redirectTo = url.pathname + url.search;

    throw redirect(307, `/login?redirectTo=${redirectTo}`);
  }

  if (!locals.user.role.includes(Number(SECRET_ROLE_ADMIN))) {
    throw error(403, {
      code: "FORBIDDEEN",
      message: "Akses hanya untuk admin!",
    });
  }

  return { user: locals.user };
};
