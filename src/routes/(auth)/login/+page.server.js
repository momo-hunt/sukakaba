import { fail } from "@sveltejs/kit";
import bcrypt from "bcrypt";

export const actions = {
  login: async ({ request, locals, cookies }) => {
    try {
      let { username, password: inputPassword } = Object.fromEntries(
        await request.formData()
      );

      username = username.toString().toLowerCase().trim();

      const { password, ...user } = await locals.db.login(username);

      const checkPassword = await bcrypt.compare(inputPassword, password);
      if (!checkPassword) return fail(400, "Gagal login!");
      //

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
        maxAge: 1000 * 60 * 60,
      });
      return auth?.name || null;
    } catch (err) {
      return fail(err.status || 404, { message: err.message, ...err.body });
    }

    // await new Promise((res) => setTimeout(res, 3000));
  },
};
