<template>
    <nav id="fullscreen-menu">
        <ul>
            <li v-for="menuItem in cleanMenuItems" :key="menuItem.url">
                <nuxt-link :to="menuItem.url">{{ menuItem.title }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import siteConfig from "../siteConfig";

const siteUrl = siteConfig.siteURL;

export default {

    // Get data
    // @https://github.com/nuxt/nuxt.js/issues/1693
    // middleware({ store, redirect }) {
    //     console.log(store);
    //     return store.dispatch("getMenuItems");
    // },
    // async asyncdata({ app, store, params }) {
    //     await store.dispatch("getMenuItems");
    // },

    // Get needed data
    created() {
        // Get "menuItems" data
        this.$store.dispatch("getMenuItems");
    },

    // props: {
    //     menuItems: Array,
    // },

    // Prepare & format data
    computed: {
        menuItems() {
            return this.$store.state.menuItems;
        },
        cleanMenuItems() {
            return this.menuItems.map((menuItem) => {
                return {
                    url: menuItem.url.replace(siteUrl, ""),
                    title: menuItem.title,
                };
            });

            return this.menuItems;
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}
</style>
