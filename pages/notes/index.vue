<template>
    <PostArchive :posts="notes" />
</template>

<script>
import PostArchive from "~/components/PostArchive.vue"

export default {

  // Get data
  fetch ({ app, store, params }) {
    return store.dispatch('getNotes');
  },

  // Declare components used
  components: {
    PostArchive,
  },

  // Local data
  data() {
    return {};
  },

  // Prepare & format data
  computed: {
    notes() {
      return this.$store.state.notes;
    },
    page() {
      return this.$store.state.pages.filter((page) => page.slug == this.$route.params.slug);
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
