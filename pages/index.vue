<template>
    <PostSingle :post="page" />
</template>

<script>
// import PostArchive from "~/components/PostArchive.vue"
import PostSingle from "~/components/PostSingle.vue"

export default {

  // Get data
  fetch ({ app, store, params }) {
    return store.dispatch('getFrontPage');
  },

  // Declare components used
  components: {
    PostSingle,
  },

  // Local data
  data() {
    return {};
  },

  // Prepare & format data
  computed: {
    page() {
      return this.$store.state.page;
    },
  },

  // Meta
  head() {
      return {
        title: this.page.yoast_title,
        meta: this.page.yoast_meta,
      }
    }

};
</script>

<style lang="scss" scoped>
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
