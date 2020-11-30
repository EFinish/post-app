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
            </b-col>
        </b-row>
    </transition>
</template>

<script>

export default {
  name: 'Post',
  props: ['post', 'user'],
};
</script>

<style scoped>
.post:hover {
    background-color: lightcyan;
    box-shadow: 0 0 6px black;
    cursor: default;
    transition: all .2s ease;
}
.post {
    border: 1px #dedede solid;
    border-radius: 25px;
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
