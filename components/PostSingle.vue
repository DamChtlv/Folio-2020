<template>
  <article class="post single">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date | dateformat }}</small>
    <section v-html="post.content.rendered"></section>
  </article>
</template>

<script>
export default {
    props: {
        post: Object,
    },
    mounted() {
        // console.log(post);
    }
}
</script>

<style lang="scss" scoped>

</style>
