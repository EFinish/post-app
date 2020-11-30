import JSONPlaceHolder from '../utils/clients/JSONPlaceHolder';

const PostsService = (function () {
  async function getPosts() {
    const responseData = await JSONPlaceHolder.getPosts();

    responseData.sort((a, b) => a.id - b.id);

    return responseData;
  }

  async function getComments(postId) {
    const responseData = await JSONPlaceHolder.getCommentsByPostId(postId);

    return responseData;
  }

  return {
    getPosts,
    getComments,
  };
}());

export default PostsService;
