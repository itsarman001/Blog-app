import conf from "../conf/conf";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  services;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // Create Post
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: create post :: error", error);
    }
  }

  // Update Post
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite Service :: update post :: error", error);
    }
  }

  // Delete Post
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: delete post :: error", error);
      return false;
    }
  }

  // Get a post
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: get post :: error", error);
      return false;
    }
  }

  // Get all posts
  async getAllPosts(quarries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        quarries
      );
    } catch (error) {
      console.log("Appwrite Service :: getting all post :: error", error);
    }
  }

  // Files upload service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: upload file :: error", error);
    }
  }

  // Files delete service
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service :: Delete File :: error", error);
      return false;
    }
  }

  getFilePrevies(fileId) {
    try {
      return this.bucket.appwriteBucketId(comf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service :: Get File Preview :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
