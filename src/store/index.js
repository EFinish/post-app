import Vue from 'vue';
import Vuex from 'vuex';

import PostsService from '../services/PostsService';
import UsersService from '../services/UsersService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async initPosts(context) {
      const posts = await PostsService.getPosts();

      context.commit('setPosts', posts);
    },
    async initUsers(context) {
      const users = await UsersService.getUsers();

      context.commit('setUsers', users);
    },
  },
  modules: {
  },
});
