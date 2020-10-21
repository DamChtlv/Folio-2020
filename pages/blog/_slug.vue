<template>
  <PostSingle :post="post" />
</template>

<script>
import PostSingle from "~/components/PostSingle.vue";

export default {

  // Get data
  // @https://github.com/nuxt/nuxt.js/issues/1693
  fetch ({ app, store, params }) {
    return store.dispatch('getPost', params.slug);
  },

  components: {
    PostSingle,
  },

  // Store local data
  data() {
    return {};
  },

  // Prepare & format data
  computed: {
    post() {
      return this.$store.state.post[0];
    },
  },

  // Meta
  head() {
      return {
        title: this.post.yoast_title,
        meta: this.post.yoast_meta,
      }
    }
};
</script>

<style lang="scss" scoped>
.post {
  margin: 60px auto 50px;
  max-width: 800px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>
