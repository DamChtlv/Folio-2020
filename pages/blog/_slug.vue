<template>
  <main class="post individual">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date | dateformat }}</small>
    <section v-html="post.content.rendered"></section>
  </main>
</template>

<script>
export default {

  // Prepare & format data
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },

  // Store local data
  data() {
    return {
      slug: this.$route.params.slug
    };
  },

  // Get needed data
  created() {

    // Get "posts" data
    this.$store.dispatch("getPosts");
  }
};
</script>

<style lang="scss" scoped>
main.post {
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
