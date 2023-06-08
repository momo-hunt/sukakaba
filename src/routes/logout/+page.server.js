import { redirect } from "@sveltejs/kit";

export const load = ({ url, cookies, locals }) => {
  cookies.delete("sessionid");

  setTimeout(async () => {
    await new Promise((res) => setTimeout(res, 3000));
    console.log("logout ok", locals.user.id);
  }, 1000);

  const redirectTo = url.searchParams.get("redirectTo") || "/";
  throw redirect(303, `/login?redirectTo=${redirectTo}`);
};
