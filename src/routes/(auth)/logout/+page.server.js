import { redirect } from "@sveltejs/kit";

export const load = ({ url, cookies, locals }) => {
  setTimeout(async () => {
    // await new Promise((res) => setTimeout(res, 3000));
    const id = url.searchParams.get("id");
    if (!id) return;
    await locals.db.logout(id);
    console.log("logout");
  }, 1000);

  cookies.delete("sessionid");
  locals.user = undefined;

  const redirectTo = url.searchParams.get("redirectTo") || "/";
  throw redirect(303, `/login?redirectTo=${redirectTo}`);
};
