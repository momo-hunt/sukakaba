import { PUBLIC_DB_URL } from "$env/static/public";

class DB {
  constructor(token) {
    this.req = { token };
    this.time = new Date().getTime().toString();
  }

  async fetchData() {
    const url = new URL(PUBLIC_DB_URL);
    url.searchParams.set("req", JSON.stringify(this.req));
    url.searchParams.set("time", this.time);
    console.log("req->", this.req);
    try {
      const res = await fetch(url);
      const response = await res.json();
      console.log("res->", response);
      return response;
    } catch (err) {
      console.log("err->", err.message);
      return;
    }
  }

  collection(collection) {
    this.req = { ...this.req, collection };
  }

  async login(username, option, callback) {
    this.req = {
      ...this.req,
      method: "login",
      collection: "user",
      username,
      ...option,
    };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async logout(id, option, callback) {
    this.req = {
      ...this.req,
      method: "logout",
      collection: "token",
      id,
      ...option,
    };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async read(option, callback) {
    this.req = { ...this.req, method: "read", ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async readOne(id, option, callback) {
    this.req = { ...this.req, method: "readOne", id, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async createOne(body, option, callback) {
    this.req = { ...this.req, method: "createOne", body, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async updateOne(id, body, option, callback) {
    this.req = { ...this.req, method: "updateOne", id, body, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }

  async deleteOne(id, option, callback) {
    this.req = { ...this.req, method: "deleteOne", id, ...option };
    const response = await this.fetchData();
    return callback ? callback(response) : response;
  }
}
export default DB;
