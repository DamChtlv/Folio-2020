import axios from "axios"
import siteConfig from "./siteConfig"

const siteAPI   = siteConfig.api.site;
const postTypes = siteConfig.api.postTypes;

let dynamicRoutes = () => {

    let routes = [];
    postTypes.map(postType => {

        const postTypePrefix    = postType.prefix;
        const postTypeAPI       = postType.api;
        const postTypeRoutes    = axios
            .get(`${siteAPI}${postTypeAPI}`)
            .then(res => {
                return res.data.map(post => `${postTypePrefix}${post.slug}`)
            })

        routes.push(postTypeRoutes);
    })

    // console.log(routes)
    return routes
}

export default {

    // Rendering mode
    mode: "universal",

    // Headers of the page
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
            }
        ]
    },

    // Customize the progress-bar color
    loading: { color: "#fff" },

    // Global CSS
    // css: ["~/assets/mixins.scss"],

    // Plugins to load before mounting the App
    plugins: [
        "~/plugins/posts.server.js",
        "~/plugins/pages.server.js",
        "~/plugins/experiments.server.js",
        "~/plugins/marquees.server.js",
        "~/plugins/projects.server.js",
        "~/plugins/menuItems.server.js",
        // "~/plugins/tags.server.js",
        "~/plugins/dateformat.js"
    ],

    generate: {
        routes: dynamicRoutes
    },

    // Nuxt.js dev-modules
    buildModules: [],

    // Build configuration
    build: {

        // You can extend webpack config here
        extend(config, ctx) { }
    }
}
