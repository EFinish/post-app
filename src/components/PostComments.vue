<template>
    <b-row>
        <b-col>
            <b-spinner v-if="comments.length === 0" />
            <span v-if="comments.length > 0">
                <b-row
                    v-for="comment in comments"
                    :key="comment.id"
                    class="post-comment">
                    <b-col>
                        <b-row>
                            <b-col>
                                <i>{{ comment.email }}</i>
                            </b-col>
                            <b-col
                                class="text-right">
                                <b-button
                                v-if="!isCommentDeleted(comment.id)"
                                variant="secondary"
                                v-on:click="deleteComment(comment.id); addButtonClick();">
                                    Delete
                                </b-button>
                                <b-button
                                v-if="isCommentDeleted(comment.id)"
                                variant="secondary"
                                disabled>
                                    Deleted!
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                {{comment.name}}
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                {{comment.body}}
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </span>
        </b-col>
    </b-row>
</template>

<script>
import PostsService from '../services/PostsService';

export default {
  name: 'PostComments',
  props: ['postId'],
  data: () => ({
    comments: [],
    deletedComments: [],
  }),
  async mounted() {
    this.comments = await PostsService.getComments(this.postId);
  },
  methods: {
    async deleteComment(commentId) {
      const success = await PostsService.deleteComment(commentId);

      if (success) {
        this.deletedComments.push(commentId);
      }
    },
    isCommentDeleted(commentId) {
      return this.deletedComments.indexOf(commentId) > -1;
    },
    addButtonClick() {
      this.$store.dispatch('addButtonClick');
    },
  },
};
</script>

<style scoped>
.post-comment:hover {
    box-shadow: 0 0 6px black;
    transition: all .2s ease;
}
.post-comment {
    background-color: white;
    border: 1px #dedede solid;
    border-radius: 12px;
    margin: 10px 0px;
    padding: 10px;
}
</style>
