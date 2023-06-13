import db from "$lib/server/db";
import jwt from "$lib/server/jwt";
import { SECRET_ROLE_ADMIN } from "$env/static/private";

export const handle = async ({ event, resolve }) => {
  event.locals.jwt = jwt;

  const sessionid = event.cookies.get("sessionid");
  if (sessionid) {
    try {
      event.locals.user = event.locals.jwt.verify(sessionid);
    } catch (err) {
      console.log("jwt token expired");
      event.cookies.delete("sessionid");
    }
  }

  console.log("user", event.locals.user);

  const token = event.locals?.user?.token;
  event.locals.db = db;
  event.locals.db.setToken(token);

  const response = await resolve(event);
  return response;
};
