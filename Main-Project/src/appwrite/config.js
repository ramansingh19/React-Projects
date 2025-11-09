import conf from "../conf/conf";
import { Client, Storage, Databases, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket;

  constructor() {
    this.client
    .setEndpoint(conf.appwrite)
    .setProject(conf.appwriteProjectID)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)

  }

  //this craetePost
  async createpost({title , slug , content , featuredimage, status, userID}){
    try {
      return await this.databases.createDocument(
        conf.appwritedatabseID,
        conf.appwritecollectionID,
        slug, //as a DocumentID
        {
          title,
          status,
          userID,
          content,
          featuredimage
        }
      )
    } catch (error) {
      throw error;
    }
  }

  //this updateDocument
  async updatepost(slug , {title  , content , featuredimage, status, userID}) {
    try {
      return await this.databases.updateDocument(
        conf.appwritedatabseID,
        conf.appwritecollectionID,
        slug, //as a DocumentID
        {
          title,
          status,
          content,
          featuredimage,
          userID
        }
      )
    } catch (error) {
      throw error;
    }

  }

  //delete Document
  async deletepost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwritedatabseID,
        conf.appwritecollectionID,
        slug
        
      )
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletepost :: error" , error);
      return false
      
    }
  }

  //get Document
  async getpost(slug){
    try {
      return await this.databases.getDocument(
        conf.appwritedatabseID,
        conf.appwritecollectionID,
        slug,
      )
    } catch (error) {
      console.log("Appwrite serive :: getpost :: error" , error );
      return false;
      
    }
  }

  //list Document 
  async getposts(queries = [Query.equal("status" , "active")]){
    try {
      return await this.databases.listDocuments(
        conf.appwritedatabseID,
        conf.appwritecollectionID,
        queries,
        //or v hai you can check on appwrite website
      )
    } catch (error) {
      console.log("Appwrite serive :: getposts :: error" , error );
      return false;
    }
  }

  //  file upload service
  async uploadfile(file){
    try {
      return await this.bucket.createFile(
        conf.appwritebucketID,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log("Appwrite serive :: createfiles :: error" , error );
      return false;
    }
  }

  //delete upload file 
  async deletefile(fileID){
    try {
      await this.bucket.deleteFile(
        conf.appwritebucketID,
        fileID
      )
    } catch (error) {
      console.log("Appwrite serive :: deletefile :: error" , error );
      return false;
    }
  }
}


const service = new Service();
export default service;