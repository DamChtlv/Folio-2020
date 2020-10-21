<template>
  <PostSingle :post="project" />
</template>

<script>
import PostSingle from "~/components/PostSingle.vue";

export default {

  // Get data
  fetch({ app, store, params }) {
    return store.dispatch('getProject', params.slug);
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
    project() {
        const project = this.$store.state.project[0];
      return project;
    },
  },

  // Meta
  head() {
      return {
        title: this.project.yoast_title,
        meta: this.project.yoast_meta,
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
