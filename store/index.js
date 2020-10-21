import siteConfig from "./../siteConfig"

const siteAPI   = siteConfig.api.site;
const postsAPI = `${siteAPI}${siteConfig.api.postTypes.posts.api}`;
const notesAPI = `${siteAPI}${siteConfig.api.postTypes.notes.api}`;
const pagesAPI = `${siteAPI}${siteConfig.api.postTypes.pages.api}`;
const frontPageAPI = `${siteAPI}${siteConfig.api.postTypes.pages.frontPageApi}`;
const experimentsAPI = `${siteAPI}${siteConfig.api.postTypes.experiments.api}`;
const marqueesAPI = `${siteAPI}${siteConfig.api.postTypes.marquees.api}`;
const projectsAPI = `${siteAPI}${siteConfig.api.postTypes.projects.api}`;
const menuItemsAPI = `${siteAPI}${siteConfig.api.menus.fullscreen}`;

// Store Data
export const state = () => ({
    post: {},
    posts: [],
    note: {},
    notes: [],
    page: {},
    pages: [],
    experiment: {},
    experiments: [],
    marquee: {},
    marquees: [],
    project: {},
    projects: [],
    menuItems: []
})

// Update Data helpers
export const mutations = {
    updatePost: (state, data) => {
        state.post = data
    },
    updatePosts: (state, data) => {
        state.posts = data
    },
    updateNote: (state, data) => {
        state.note = data
    },
    updateNotes: (state, data) => {
        state.notes = data
    },
    updatePage: (state, data) => {
        state.page = data
    },
    updatePages: (state, data) => {
        state.pages = data
    },
    updateExperiment: (state, data) => {
        state.experiment = data
    },
    updateExperiments: (state, data) => {
        state.experiments = data
    },
    updateMarquee: (state, data) => {
        state.marquee = data
    },
    updateMarquees: (state, data) => {
        state.marquees = data
    },
    updateProject: (state, data) => {
        state.project = data
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

    // Post: Front page
    async getFrontPage({ state, commit, dispatch }) {
        if (Object.keys(state.page).length) return

        try {
            let page = await fetch(
                `${frontPageAPI}?&_embed`
            ).then(res => res.json())

            if (!page || typeof page !== 'object' || page.code === 'rest_no_route')
                return;

            commit('updatePage', page)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Posts
    async getPosts({ state, commit, dispatch }) {
        if (state.posts.length) return

        try {
            let posts = await fetch(
                `${postsAPI}?page=1&per_page=20&_embed`
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

    // Post: Post
    async getPost({ state, commit, dispatch }, post_slug) {
        if (Object.keys(state.post).length) return

        try {
            let post = await fetch(
                `${postsAPI}?&_embed&slug=${post_slug}`
            ).then(res => res.json())

            if (!post || typeof post !== 'object' || post.code === 'rest_no_route')
                return;

            post = post
                .filter(el => el.status === 'publish')
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            // console.log('post:');
            // console.log(post);

            commit('updatePost', post)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Notes
    async getNotes({ state, commit, dispatch }) {
        if (state.notes.length) return

        try {
            let notes = await fetch(
                `${notesAPI}?page=1&per_page=20&_embed`
            ).then(res => res.json())

            if (!notes || typeof notes !== 'object' || notes.code === 'rest_no_route')
                return;

            notes = notes
                .filter(el => el.status === "publish")
                .map(({ id, slug, title, excerpt, date, content }) => ({
                    id,
                    slug,
                    title,
                    excerpt,
                    date,
                    content
                }))

            commit("updateNotes", notes)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Note
    async getNote({ state, commit, dispatch }, post_slug) {
        if (Object.keys(state.note).length) return

        try {
            let note = await fetch(
                `${notesAPI}?&_embed&slug=${post_slug}`
            ).then(res => res.json())

            if (!note || typeof note !== 'object' || note.code === 'rest_no_route')
                return;

            note = note
                .filter(el => el.status === 'publish')
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            // console.log('post:');
            // console.log(note);

            commit('updateNote', note)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Pages
    async getPages({ state, commit, dispatch }) {
        if (state.pages.length) return

        try {
            let pages = await fetch(
                `${pagesAPI}?page=1&per_page=20&_embed`
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

    // Post: page
    async getPage({ state, commit, dispatch }, post_slug) {
        if (Object.keys(state.page).length) return

        try {
            let page = await fetch(
                `${pagesAPI}?&_embed&slug=${post_slug}`
            ).then(res => res.json())

            if (!page || typeof page !== 'object' || page.code === 'rest_no_route')
                return;

            page = page
                .filter(el => el.status === 'publish')
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            // console.log('post:');
            // console.log(page);

            commit('updatePage', page)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Experiments
    async getExperiments({ state, commit, dispatch }) {
        if (state.experiments.length) return

        try {
            let experiments = await fetch(
                `${experimentsAPI}?page=1&per_page=20&_embed`
            ).then(res => res.json())

            if (!experiments || typeof experiments !== 'object' || experiments.code === 'rest_no_route')
                return;

            experiments = experiments
                .filter(el => el.status === "publish")
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            commit("updateExperiments", experiments)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Experiment
    async getExperiment({ state, commit, dispatch }, post_slug) {
        if (Object.keys(state.experiment).length) return

        try {
            let experiment = await fetch(
                `${experimentsAPI}?&_embed&slug=${post_slug}`
            ).then(res => res.json())

            if (!experiment || typeof experiment !== 'object' || experiment.code === 'rest_no_route')
                return;

            experiment = experiment
                .filter(el => el.status === 'publish')
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            // console.log('post:');
            // console.log(experiment);

            commit('updateExperiment', experiment)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Marquees
    async getMarquees({ state, commit, dispatch }) {
        if (state.marquees.length) return

        try {
            let marquees = await fetch(
                `${marqueesAPI}?page=1&per_page=20&_embed`
            ).then(res => res.json())

            if (!marquees || typeof marquees !== 'object' || marquees.code === 'rest_no_route')
                return;

            marquees = marquees
                .filter(el => el.status === "publish")
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            commit("updateMarquees", marquees)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: marquee
    async getMarquee({ state, commit, dispatch }, post_slug) {
        if (Object.keys(state.marquee).length) return

        try {
            let marquee = await fetch(
                `${marqueesAPI}?&_embed&slug=${post_slug}`
            ).then(res => res.json())

            if (!marquee || typeof marquee !== 'object' || marquee.code === 'rest_no_route')
                return;

            marquee = marquee
                .filter(el => el.status === 'publish')
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            // console.log('post:');
            // console.log(marquee);

            commit('updateMarquee', marquee)
        } catch (err) {
            console.log(err)
        }
    },

    // Post: Projects
    async getProjects({ state, commit, dispatch }) {
        if (state.projects.length) return

        try {
            let projects = await fetch(
                `${projectsAPI}?page=1&per_page=20&_embed`
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

    // Post: project
    async getProject({ state, commit, dispatch }, post_slug) {
        if (Object.keys(state.project).length) return

        try {
            let project = await fetch(
                `${projectsAPI}?&_embed&slug=${post_slug}`
            ).then(res => res.json())

            if (!project || typeof project !== 'object' || project.code === 'rest_no_route')
                return;

            project = project
                .filter(el => el.status === 'publish')
                // .map(({ id, slug, title, excerpt, date, content }) => ({
                //     id,
                //     slug,
                //     title,
                //     excerpt,
                //     date,
                //     content
                // }))

            // console.log('post:');
            // console.log(project);

            commit('updateProject', project)
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
