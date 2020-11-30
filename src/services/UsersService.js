import JSONPlaceHolder from '../utils/clients/JSONPlaceHolder';

const UsersService = (function () {
  async function getUsers() {
    const responseData = await JSONPlaceHolder.getUsers();

    responseData.sort((a, b) => a.id - b.id);

    return responseData;
  }

  return {
    getUsers,
  };
}());

export default UsersService;
