<template>
  <div class="posts">
    <article class="post" v-for="post in posts" :key="post.id">
      <h3>
        <a :href="`blog/${post.slug}`">{{ post.title.rendered }}</a>
      </h3>
      <small>{{ post.date | dateformat }}</small>
      <div v-html="post.excerpt.rendered"></div>
      <nuxt-link class="readmore slide" :to="`blog/${post.slug}`"
        >Read more ⟶</nuxt-link
      >
    </article>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 2em;
}
a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}
a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: "Open Sans", serif;
  border: 1px solid #ccc;
  background: #fff;
}
.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;
  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}
.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}
.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;
  &:hover {
    color: #fff;
  }
  &:hover:before {
    right: -1px;
  }
}
.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
</style>
