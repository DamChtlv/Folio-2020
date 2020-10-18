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

<style lang="scss">
// Document
:root {
  --white: #fff;
  --black: #000;
  --grey: #8b919a;
  --grey200: #f5f5f5;
  --grey300: #dcdfe4;
  --grey400: #8b919a;
  --grey500: #606875;
  --grey600: #303844;
  --grey700: #0f121d;
  --primary: #ff473e;
  --font-system: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  --font-base: "Inter-var-x";
  --font-primary: "fc";
  --text-xl: 3vh;
  --text-2xl: 4.5vh;
  --text-3xl: 6vh;
  --text-4xl: 7.5vh;
}

// Fonts
@font-face {
  font-family: 'Inter-var-x';
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  font-display: swap;
  src: url('~assets/fonts/Inter.var.woff2') format('woff2 supports variations'),
       url('~assets/fonts/Inter.var.woff2') format('woff2-variations');
}
@font-face {
	font-family: 'fc';
	font-weight: 100;
    font-style: normal;
    font-display: swap;
	src: url('~assets/fonts/FC-Ultralight.woff2') format('woff2');
}
@font-face {
	font-family: 'fc';
	font-weight: 300;
    font-style: normal;
    font-display: swap;
	src: url('~assets/fonts/FC-Light.woff2') format('woff2');
}
@font-face {
	font-family: 'fc';
	font-weight: 400;
    font-style: normal;
    font-display: swap;
	src: url('~assets/fonts/FC-Regular.woff2') format('woff2');
}
@font-face {
	font-family: 'fc';
	font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('~assets/fonts/FC-Bold.woff2') format('woff2');
}
@font-face {
	font-family: 'fc';
	font-weight: 900;
    font-style: normal;
    font-display: swap;
	src: url('~assets/fonts/FC-Black.woff2') format('woff2');
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  color: var(--grey200, #000);
  font-size: 18px;
  word-spacing: 1px;
  font-family: var(
    --font-base,
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
  background-color: var(--grey700, #fff);
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
  color: var(--primary);
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: var(--grey200);
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

a {
    color: var(--grey200);
    text-decoration: none;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
