<template>
  <article class="experiment single">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date | dateformat }}</small>
    <section v-html="post.content.rendered"></section>
  </article>
</template>

<script>
export default {
  // Prepare & format data
  computed: {
    experiments() {
      return this.$store.state.experiments;
    },
    experiment() {
      let post = this.experiments.find((el) => el.slug === this.slug);
      return post;
    },
  },

  // Store local data
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },

  // Get needed data
  created() {
    // Get "Experiments" data
    this.$store.dispatch("getExperiments");
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
