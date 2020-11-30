<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="text-center">
          <h4>Total button clicks: {{ buttonClickCount }}</h4>
        </b-col>
      </b-row>
    </b-container>
    <PostFeed />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostFeed from '../components/PostFeed.vue';

export default {
  name: 'Home',
  components: {
    PostFeed,
  },
  computed: {
    ...mapState({
      buttonClickCount: 'buttonClickCount',
    }),
  },
};
</script>
