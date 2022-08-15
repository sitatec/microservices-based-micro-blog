import { POST_ENDPOINT } from "../constants/urls";
import ApiClient from "./api_client";

export default class PostService {
  
  constructor(apiClient = new ApiClient()){
    this.apiClient = apiClient;
  }

  getPosts = () => {
    return this.apiClient.get(POST_ENDPOINT);
  };

  getPostsWithComments = () => {
    return this.apiClient.get("http://localhost:4002/posts");
  };

  createPost = (postData) => {
    return this.apiClient.post(POST_ENDPOINT, postData);
  }
}