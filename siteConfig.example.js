export default {
    themeColor: "#ffffff",
    siteURL: "https://xxx.com",
    api: {
        site: "https://xxx.com/wp-json/",
        postTypes: {
            posts: {
                prefix: "/blog/",
                api: "wp/v2/posts"
            },
            pages: {
                prefix: "/",
                api: "wp/v2/pages",
            },
            experiments: {
                prefix: "/experiment/",
                api: "wp/v2/experiments",
            },
            marquees: {
                prefix: "/marquee/",
                api: "wp/v2/marquee",
            },
            projects: {
                prefix: "/projects/",
                api: "wp/v2/projects",
            }
        },
        menus: {
            fullscreen: "menus/v1/menus/fullscreen-menu",
        },
        taxonomies: {

        },
    }
}
