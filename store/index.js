import siteConfig from "./../siteConfig"

const siteAPI   = siteConfig.api.site;
const postsAPI = `${siteAPI}${siteConfig.api.postTypes.posts.api}`;
const pagesAPI = `${siteAPI}${siteConfig.api.postTypes.pages.api}`;
const experimentsAPI = `${siteAPI}${siteConfig.api.postTypes.experiments.api}`;
const marqueesAPI = `${siteAPI}${siteConfig.api.postTypes.marquees.api}`;
const projectsAPI = `${siteAPI}${siteConfig.api.postTypes.projects.api}`;
const menuItemsAPI = `${siteAPI}${siteConfig.api.menus.fullscreen}`;

// Store Data
export const state = () => ({
    posts: [],
    pages: [],
    experiments: [],
    marquees: [],
    projects: [],
    menuItems: []
    // tags: []
})

// Update Data helpers
export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts
    },
    updatePages: (state, pages) => {
        state.pages = pages
    },
    updateExperiments: (state, experiments) => {
        state.experiments = experiments
    },
    updateMarquees: (state, marquees) => {
        state.marquees = marquees
    },
    updateProjects: (state, projects) => {
        state.projects = projects
    },
    updateMenuItems: (state, menuItems) => {
        state.menuItems = menuItems
    }
    // updateTags: (state, tags) => {
    //     state.tags = tags
    // }
}

// Get Data helpers
export const actions = {

    // Post: Posts
    async getPosts({ state, commit, dispatch }) {
        if (state.posts.length) return

        try {
            let posts = await fetch(
                `${postsAPI}?page=1&per_page=20&_embed=1`
            ).then(res => res.json())

            if (!posts) return;

            posts = posts
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content
                }))

            commit("updatePosts", posts)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Pages
    async getPages({ state, commit, dispatch }) {
        if (state.pages.length) return

        try {
            let pages = await fetch(
                `${pagesAPI}?page=1&per_page=20&_embed=1`
            ).then(res => res.json())

            if (!pages) return;

            pages = pages
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content
                }))

            commit("updatePages", pages)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Experiments
    async getExperiments({ state, commit, dispatch }) {
        if (state.experiments.length) return

        try {
            let experiments = await fetch(
                `${experimentsAPI}?page=1&per_page=20&_embed=1`
            ).then(res => res.json())

            if (!experiments) return;

            experiments = experiments
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content
                }))

            commit("updateExperiments", experiments)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Marquees
    async getMarquees({ state, commit, dispatch }) {
        if (state.marquees.length) return

        try {
            let marquees = await fetch(
                `${marqueesAPI}?page=1&per_page=20&_embed=1`
            ).then(res => res.json())

            if (!marquees) return;

            marquees = marquees
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content
                }))

            commit("updateMarquees", marquees)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Projects
    async getProjects({ state, commit, dispatch }) {
        if (state.projects.length) return

        try {
            let projects = await fetch(
                `${projectsAPI}?page=1&per_page=20&_embed=1`
            ).then(res => res.json())

            if (!projects) return;

            projects = projects
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    tags,
                    content
                }))

            commit("updateProjects", projects)
        } catch (err) {
            console.log(err)
        }
    },

    // Terms: Menu Items
    async getMenuItems({ state, commit, dispatch }) {
        if (state.menuItems.length) return

        try {
            let menu = await fetch(
                `${menuItemsAPI}`
            ).then(res => res.json())

            if (!menu) return;

            let menuItems = menu.items;
            if (!menuItems) return;

            let menuItemsData = [];

            menuItems.forEach(menuItem => {
                let menuItemData = { url: menuItem.url, title: menuItem.title };
                menuItemsData.push(menuItemData);
            });

            menuItems = menuItemsData;

            commit("updateMenuItems", menuItems)
        } catch (err) {
            console.log(err)
        }
    }

    // Taxo: Tags
    // async getTags({ state, commit }) {
    //     if (state.tags.length) return

    //     let allTags = state.posts.reduce((acc, item) => {
    //         return acc.concat(item.tags)
    //     }, [])
    //     allTags = allTags.join()

    //     try {
    //         let tags = await fetch(
    //             `${siteAPI}tags?page=1&per_page=40&include=${allTags}`
    //         ).then(res => res.json())

    //         tags = tags.map(({ id, name }) => ({
    //             id,
    //             name
    //         }))

    //         commit("updateTags", tags)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

}
