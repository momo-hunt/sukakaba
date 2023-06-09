import jwt from "jsonwebtoken";
import { SECRET_KEY } from "$env/static/private";

class JWT {
  constructor() {}

  sign(auth) {
    return jwt.sign(auth, SECRET_KEY, {
      expiresIn: "1h",
    });
  }

  verify(sessionid) {
    return jwt.verify(sessionid, SECRET_KEY);
  }
}

export default new JWT();
