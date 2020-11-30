<template>
    <b-container>
        <b-row v-if="posts.length === 0">
            <b-col>
                <b-spinner />
            </b-col>
        </b-row>
        <span v-if="posts.length > 0" >
            <Post
                v-for="post in posts"
                :key="post.id"
                :post="post"
                :user="getUserById(post.userId)"/>
        </span>
    </b-container>
</template>

<script>
import { mapState } from 'vuex';
import Post from './Post.vue';

export default {
  name: 'PostFeed',
  computed: {
    ...mapState({
      posts: 'posts',
      users: 'users',
    }),
  },
  components: {
    Post,
  },
  mounted() {
    this.$store.dispatch('initPosts');
    this.$store.dispatch('initUsers');
  },
  methods: {
    getUserById(userId) {
      return this.users.find((user) => user.id === userId);
    },
  },
};
</script>
