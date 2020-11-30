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

  async function getUsers() {
    try {
      const response = await axios.get(`${apiPrefix}/users`);

      return response.data;
    } catch (error) {
      alert(`Error! Error while fetching posts. ${error}`);

      return null;
    }
  }

  return {
    getPosts,
    getUsers,
  };
}());

export default JSONPlaceHolder;
