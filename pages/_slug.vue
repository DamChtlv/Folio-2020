<template>
  <PostSingle :post="post" />
</template>

<script>
import PostSingle from "~/components/PostSingle.vue";

export default {
  // Get data
  // @https://github.com/nuxt/nuxt.js/issues/1693
  fetch({ app, store, params }) {
    return store.dispatch("getPages");
  },

  components: {
    PostSingle,
  },

  // Store local data
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },

  // Prepare & format data
  computed: {
    posts() {
      return this.$store.state.pages;
    },
    post() {
      let post = this.posts.find((el) => el.slug === this.slug);

      // TODO: Need to dig how to get ACFE archive page option
      console.log(this.posts);
      console.log(this.slug);
      return post;
    },
  },
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
