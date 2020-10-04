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
})

// Update Data helpers
export const mutations = {
    updatePosts: (state, data) => {
        state.posts = data
    },
    updatePages: (state, data) => {
        state.pages = data
    },
    updateExperiments: (state, data) => {
        state.experiments = data
    },
    updateMarquees: (state, data) => {
        state.marquees = data
    },
    updateProjects: (state, data) => {
        state.projects = data
    },
    updateMenuItems: (state, data) => {
        state.menuItems = data
    }
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

            if (!posts || typeof posts !== 'object' || posts.code === 'rest_no_route')
                return;

            posts = posts
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
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

            if (!pages || typeof pages !== 'object' || pages.code === 'rest_no_route')
                return;

            pages = pages
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
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

            if (!experiments || typeof experiments !== 'object' || experiments.code === 'rest_no_route')
                return;

            experiments = experiments
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
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

            if (!marquees || typeof marquees !== 'object' || marquees.code === 'rest_no_route')
                return;

            marquees = marquees
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
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

            if (!projects || typeof projects !== 'object' || projects.code === 'rest_no_route')
                return;

            projects = projects
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    content
                }))

            commit("updateProjects", projects)
        } catch (err) {
            console.log(err)
        }
    },

    // Terms: Menu Items
    async getMenuItems({ state, commit, dispatch }) {
        // if (state.menuItems.length) return

        try {
            let menu = await fetch(
                `${menuItemsAPI}`
            ).then(res => res.json())

            if (!menu || typeof menu !== 'object')
                return;

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
}
