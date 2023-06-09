import { fail } from "@sveltejs/kit";
import bcrypt from "bcrypt";

export const actions = {
  login: async ({ request, locals, cookies }) => {
    try {
      let { username, password: inputPassword } = Object.fromEntries(
        await request.formData()
      );

      username = username.toString().toLowerCase().trim();

      const { password, role: uRole, id } = await locals.db.login(username);

      const checkPassword = await bcrypt.compare(inputPassword, password);
      if (!checkPassword) return fail(400, "Gagal login!");

      const token = await locals.db.getToken(id);
      const { nama: name } = await locals.db
        .collection("profil")
        .readOne(id, { token });

      const role = uRole ? uRole.split(",").map((d) => Number(d)) : null;
      const tokenAccess = locals.jwt.sign({ id, name, role, token });

      cookies.set("sessionid", tokenAccess, {
        path: "/",
        maxAge: 1000 * 60 * 60,
      });
      return name;
    } catch (err) {
      return fail(err.status || 404, { message: err.message, ...err.body });
    }

    // await new Promise((res) => setTimeout(res, 3000));
  },
};
