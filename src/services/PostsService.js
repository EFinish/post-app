import JSONPlaceHolder from '../utils/clients/JSONPlaceHolder';

const PostsService = (function () {
  async function getPosts() {
    const responseData = await JSONPlaceHolder.getPosts();

    responseData.sort((a, b) => a.id - b.id);

    return responseData;
  }

  return {
    getPosts,
  };
}());

export default PostsService;
