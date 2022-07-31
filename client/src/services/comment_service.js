import { COMMENT_ENDPOINT_PREFIX } from "../constants/urls";
import ApiClient from "./api_client";

export default class CommentService {
  constructor(apiClient = new ApiClient()) {
    this.apiClient = apiClient;
  }

  getComments = (postId) => {
    return this.apiClient.get(this._buildEndpoint(postId));
  };

  createComment = (commentData, postId) => {
    return this.apiClient.post(this._buildEndpoint(postId), commentData);
  };

  _buildEndpoint = (postId) => `${COMMENT_ENDPOINT_PREFIX}/${postId}/comments`;
}
