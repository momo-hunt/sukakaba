import jwt from "jsonwebtoken";
import DB from "$lib/server/db";
import { PUBLIC_SECRET_KEY } from "$env/static/public";

export const handle = async ({ event, resolve }) => {
  const sessionid = event.cookies.get("sessionid");
  if (sessionid) {
    const user = jwt.verify(sessionid, PUBLIC_SECRET_KEY);
    event.locals.user = user || undefined;
  }

  // console.log("user", event.locals.user);
  const token = event.locals?.user?.token;
  event.locals.db = new DB(token);

  const response = await resolve(event);
  return response;
};
