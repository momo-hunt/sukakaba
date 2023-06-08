import jwt from "jsonwebtoken";
import DB from "$lib/server/db";
import { PUBLIC_SECRET_KEY } from "$env/static/public";

export const handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get("sessionId");
  if (sessionId) {
    const user = jwt.verify(sessionId, PUBLIC_SECRET_KEY);
    event.locals.user = user || undefined;
  }

  const token = event.locals?.user?.token;
  event.locals.db = new DB(token);

  const response = await resolve(event);
  return response;
};
