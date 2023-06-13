import { fail } from "@sveltejs/kit";

export const load = ({ url }) => {
  let redirectTo = url.searchParams.get("redirectTo");
  redirectTo = redirectTo || "/v1";
  return { redirectTo };
};

export const actions = {
  login: async ({ request, locals, cookies }) => {
    let { username, password: inputPassword } = Object.fromEntries(
      await request.formData()
    );

    username = username.toLowerCase().trim();

    const { password, ...user } = await locals.db.login(username);

    const checkPassword = await bcrypt.compare(inputPassword, password);
    if (!checkPassword) return fail(400, "Gagal login!");

    const auth = {
      id: user.id,
      name: user?.profil?.nama || user.username,
      role: user.role ? user.role.split(",").map((d) => Number(d)) : null,
      token: user.token,
    };
    //
    const tokenAccess = locals.jwt.sign(auth);

    cookies.set("sessionid", tokenAccess, {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
    });
    return auth?.name || null;
  },
};
