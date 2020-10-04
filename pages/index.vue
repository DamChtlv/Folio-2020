<template>
  <main>
    <PostArchive :posts="posts" />
  </main>
</template>

<script>
import PostArchive from "~/components/PostArchive.vue"

export default {

  // Get data
  // @https://github.com/nuxt/nuxt.js/issues/1693
  fetch ({ app, store, params }) {
    return store.dispatch("getPosts");
  },

  // Declare components used
  components: {
    PostArchive,
  },

  // Prepare & format data
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },

  // Local data
  data() {
    return {
      activeClass: "active",
    };
  },
};
</script>

<style lang="scss">
main {
    display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 6vw;
  margin: 5em auto;
  max-width: 80vw;
  grid-area: 1 / 1 / 2 / 2;
}
aside {
  grid-area: 1 / 2 / 2 / 3;
}
</style>
