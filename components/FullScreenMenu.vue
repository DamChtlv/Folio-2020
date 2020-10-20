<template>
    <nav id="fullscreen-menu">
        <div id="fullscreen-menu-bg"></div>
        <!-- <svg id="fullscreen-menu-bg" width="25" height="25" viewBox="0 0 25 25">
            <circle cx="12.5" cy="12.5" r="6.25"/>
        </svg> -->
        <ul>
            <li v-for="menuItem in cleanMenuItems" :key="menuItem.url">
                <nuxt-link :to="menuItem.url" :data-text="menuItem.title">{{ menuItem.title }}</nuxt-link>
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

    mounted() {
        const comp = this;
        const winH = window.innerHeight;
        const winL = window.innerWidth;
        const menuEl = document.getElementById('fullscreen-menu');
        const bgEl = document.getElementById('fullscreen-menu-bg');
        const logoEl = document.getElementById('logo');

        window.addEventListener('mousemove', function(ev) {
            const x = ev.clientX;
            const y = ev.clientY;

            const menuIsActive = menuEl.classList.contains('active');
            if (menuIsActive) {
                return;
            }

            if (x < winH / 10 && y < winL / 10) {
                bgEl.style.setProperty('--circle-size', '66vh');
            } else if (x < winH / 4 && y < winL / 4) {
                bgEl.style.setProperty('--circle-size', '33vh');
            } else {
                bgEl.style.setProperty('--circle-size', '0vh');
            }

        });

        logoEl.addEventListener('click', function(ev) {
            if (menuEl.classList.contains('active')) {
                bgEl.style.setProperty('--circle-size', '66vh');
            } else {
                bgEl.style.setProperty('--circle-size', '500vh');
            }
            menuEl.classList.toggle('active');
        });
    }
}
</script>

<style lang="scss" scoped>
#fullscreen-menu-bg {
    --circle-size: 0vh;

    position: fixed;
    top: calc(-.5 * var(--circle-size));
    left: calc(-.5 * var(--circle-size));
    width: var(--circle-size);
    height: var(--circle-size);
    opacity: 1;
    border-radius: 100%;
    background: var(--grey200);
    transition: all 0.3s ease 0s;
    pointer-events: none;
}

ul {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    height: 100vh;
    width: 100vw;
    color: var(--grey700);
    font-size: 6.5vw;
    font-family: var(--font-primary);
    display: flex;
    // align-items: center;
    // justify-content: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 16.5vw;
    background: var(--grey200);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease 0s;

    .active & {
        opacity: 1;
        pointer-events: auto;
    }
}

li {
    line-height: 1;
    text-transform: capitalize;
    font-weight: 700;
}

a {
    color: var(--grey700);
    opacity: 1;

    &:hover {
        &::after {
            content: attr(data-text);
            position: absolute;
            transform: translate3d(-100%, 5%, 0);
            -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: var(--grey700);
        }
    }
}
</style>
