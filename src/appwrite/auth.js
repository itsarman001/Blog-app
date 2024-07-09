import conf from "../conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  Constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // calling login method to directly login user once account is created
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite serive :: create account :: error", error);
    }
  }

  // Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite serive :: login :: error", error);
    }
  }

  // verify is user loged in
  async getCurrentUser () {
    try {
        return await this.account.get()
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
  }

  // logout
  async logout () {
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
