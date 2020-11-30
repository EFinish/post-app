<template>
    <b-row>
        <b-col>
            <b-row>
                <b-col>
                    <h4>{{ post.title }}</h4>
                </b-col>
                <b-col>
                    user shit
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <p>{{ post.body }}</p>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>

<script>

export default {
  name: 'Post',
  props: ['post', 'user'],
};
</script>
