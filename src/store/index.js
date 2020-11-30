import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import PostsService from '../services/PostsService';
import UsersService from '../services/UsersService';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    posts: [],
    users: [],
    buttonClickCount: 0,
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setUsers(state, payload) {
      state.users = payload;
    },
    addToButtonClickCount(state) {
      state.buttonClickCount += 1;
      console.log('click2');
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
    addButtonClick(context) {
      context.commit('addToButtonClickCount');
      console.log('click');
    },
  },
  modules: {
  },
});
