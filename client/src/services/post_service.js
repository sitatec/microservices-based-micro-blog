import { POST_ENDPOINT } from "../constants/urls";
import ApiClient from "./api_client";

export default class PostService {
  
  constructor(apiClient = new ApiClient()){
    this.apiClient = apiClient;
  }

  getPosts = () => {
    return this.apiClient.get(POST_ENDPOINT);
  };

  createPost = (postData) => {
    return this.apiClient.post(POST_ENDPOINT, postData);
  }
}