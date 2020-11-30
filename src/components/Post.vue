<template>
    <transition name="slide-right">
        <b-row class="post">
            <b-col>
                <b-row>
                    <b-col md="3">
                        <strong>{{user.name}}</strong> @<i>{{ user.username }}</i>
                    </b-col>
                    <b-col md="9">
                        <h4>{{ post.title }}</h4>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <p>{{ post.body }}</p>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-button
                            variant="primary"
                            v-on:click="switchShowComments">
                            Comments
                        </b-button>
                    </b-col>
                </b-row>
                <PostComments v-if="showComments" :postId="post.id" />
            </b-col>
        </b-row>
    </transition>
</template>

<script>
import PostComments from './PostComments.vue';

export default {
  name: 'Post',
  components: {
    PostComments,
  },
  data: () => ({
    showComments: false,
  }),
  props: ['post', 'user'],
  methods: {
    switchShowComments() {
      this.showComments = !this.showComments;
    },
  },
};
</script>

<style scoped>
.post:hover {
    background-color: lightcyan;
    box-shadow: 0 0 6px black;
    transition: all .2s ease;
}
.post {
    border: 1px #dedede solid;
    border-radius: 12px;
    margin: 10px 0px;
    padding: 10px;
}
.slide-right-enter {
   transform: translateX(5vw);
    opacity: 0;
 }
 .slide-right-enter-active {
   transition: all .3s ease;
 }
</style>
