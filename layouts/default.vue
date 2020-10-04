<template>
  <div id="app">
    <!-- <Loader />
    <Intro /> -->
    <SiteNav />
    <Nuxt />
  </div>
</template>

<script>
import Loader from "~/components/Loader.vue";
import Intro from "~/components/Intro.vue";
import SiteNav from "~/components/SiteNav.vue";

export default {
  components: {
    Loader,
    Intro,
    SiteNav,
  },
};
</script>

<style>
:root {
  --white: #fff;
  --black: #000;
  --red: #ff473e;
  --dark: #8b919a;
  --dark200: #f5f5f5;
  --dark300: #dcdfe4;
  --dark400: #8b919a;
  --dark500: #606875;
  --dark600: #303844;
  --dark700: #0f121d;
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --font-primary: "Formula Condensed";
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  color: var(--dark700, #000);
  font-size: 18px;
  word-spacing: 1px;
  font-family: var(
    --font-primary,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol"
  );
  box-sizing: border-box;
  background-color: var(--white, #fff);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
}

body {
    height: 100%;
    margin: 0;
}

#app {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

h1,
h2,
h3 {
  font-weight: normal;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}
</style>
