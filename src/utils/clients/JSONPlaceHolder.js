const axios = require('axios');

const JSONPlaceHolder = (function () {
  const apiPrefix = 'https://jsonplaceholder.typicode.com';

  async function getPosts() {
    try {
      const response = await axios.get(`${apiPrefix}/posts`);

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching posts. ${error}`);

      return null;
    }
  }

  async function getCommentsByPostId(postId) {
    try {
      const response = await axios.get(`${apiPrefix}/posts/${postId}/comments`);

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching post comments. ${error}`);

      return null;
    }
  }

  async function deleteComment(commentId) {
    try {
      await axios.delete(`${apiPrefix}/comments/${commentId}`);

      return true;
    } catch (error) {
      alert(`Error! Error while deleting comment. ${error}`);

      return null;
    }
  }

  async function getUsers() {
    try {
      const response = await axios.get(`${apiPrefix}/users`);

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching users. ${error}`);

      return null;
    }
  }

  return {
    getPosts,
    getCommentsByPostId,
    deleteComment,
    getUsers,
  };
}());

export default JSONPlaceHolder;
