<template>
  <nav>
    <site-logo></site-logo>
    <ul>
      <li v-for="menuItem in cleanMenuItems" :key="menuItem.url">
        <nuxt-link :to="menuItem.url">{{ menuItem.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import SiteLogo from "@/components/SiteLogo.vue";
import siteConfig from "../siteConfig";

const siteUrl = siteConfig.siteURL;

export default {
  components: {
    SiteLogo,
  },

  // Prepare & format data
  computed: {
    menuItems() {
        return this.$store.state.menuItems;
    },
    cleanMenuItems() {
        return this.menuItems.map(menuItem => {
            return {
                url: menuItem.url.replace(siteUrl, ''),
                title: menuItem.title
            };
        });
        return this.menuItems;
    }
  },

  // Get needed data
  created() {

    // Get "menuItems" data
    this.$store.dispatch("getMenuItems");

    // console.log(this.$store.state.menuItems);
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
