import { fail } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { PUBLIC_SECRET_KEY } from "$env/static/public";

export const actions = {
  login: async ({ request, locals, cookies }) => {
    const { username, password } = Object.fromEntries(await request.formData());
    await new Promise((res) => setTimeout(res, 3000));

    if (username != "har") return fail(400, "Gagal login!");

    const user = {
      name: "Hari",
      token: "abc",
      id: "dasd21daas",
      role: [1834, 5234, 1274, 1934],
    };

    const tokenAccess = jwt.sign(user, PUBLIC_SECRET_KEY, { expiresIn: "1h" });
    if (tokenAccess)
      cookies.set("sessionid", tokenAccess, {
        path: "/",
        maxAge: 1000 * 60 * 60,
      });

    return username;
  },
};
