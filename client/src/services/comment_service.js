import { COMMENT_ENDPOINT } from "../constants/urls";
import ApiClient from "./api_client";

export default class CommentService {
  
  constructor(apiClient = new ApiClient()){
    this.apiClient = apiClient;
  }

  getComments = () => {
    return this.apiClient.get(COMMENT_ENDPOINT);
  };

  createComment = (commentData) => {
    return this.apiClient.post(COMMENT_ENDPOINT, commentData);
  }
}