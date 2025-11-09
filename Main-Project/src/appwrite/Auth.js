import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

//creating account
export class AuthService{
    client = new Client();
    account;

    constructor() {
      this.client
              .setEndpoint(conf.appwrite)
              .setProject(conf.appwriteProjectID)
              this.account = new Account(this.client)
    }

    //signUp
    async createAccount({email , password , name}) {
      try {
        const user = await this.account.create(ID.unique() , email, password , name);
              if (user) {
                //call another method --> the another method is redrict use to the login page ;
                    return this.login({email , password})
              } else {
                return user
              }
      } catch (error) {
        throw error;
      }
    }

    //login 
    async login({email , password}) {
      try {
        const userinfo = await this.account.createEmailPasswordSession({email , password})
        return userinfo;
      } catch (error) {
        throw error
      }
    }

    //get account
    async getCurrentUser() {
      try {
        return await this.account.get()
      } catch (error) {
        throw error;
      }
    }

    //logout
    async logout() {
      try {
        await this.account.deleteSessions();//we can also use deletesession but we have to put 'current '
      } catch (error) {
        throw error;
      }
      return null;
    }
}

//for Object
const authservice = new AuthService();

export default AuthService;






//this code came from the appwrite site 
// const client = new Client()
//     .setProject('<PROJECT_ID>')
//     .setEndpoint('https://<REGION>.cloud.appwrite.io/v1');

// const account = new Account(client);

// try {
//     const user = await account.create({
//         userId: '[USER_ID]',
//         email: 'email@example.com',
//         password: '<Password>'
//     });
//     console.log(user)
// } catch (e){
//     console.error(e)
// }

