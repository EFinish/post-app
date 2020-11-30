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
                            <b-col md="3">
                                <i>{{ comment.email }}</i>
                            </b-col>
                            <b-col md="9">
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
  }),
  async mounted() {
    this.comments = await PostsService.getComments(this.postId);
  },
};
</script>

<style scoped>
.post-comment:hover {
    box-shadow: 0 0 6px black;
    cursor: default;
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
