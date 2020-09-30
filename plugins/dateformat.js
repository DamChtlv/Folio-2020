import Vue from "vue"

Vue.filter("dateformat", value => {
    return new Date(value).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
})
