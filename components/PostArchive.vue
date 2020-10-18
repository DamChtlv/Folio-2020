<template>
  <div class="posts">
    <article class="post" v-for="post in posts" :key="post.id">
      <h3>
        <nuxt-link :to="`blog/${post.slug}`">{{ post.title.rendered }}</nuxt-link>
      </h3>
      <small>{{ post.date | dateformat }}</small>
      <div v-html="post.excerpt.rendered"></div>
      <nuxt-link class="readmore" :to="`blog/${post.slug}`">
        Read more ⟶
      </nuxt-link>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
        type: Array,
        default: [],
    }
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 2em;
}

.readmore {
}
</style>
