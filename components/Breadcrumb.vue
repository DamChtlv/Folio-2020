<template>
  <p>
      {{ breadcrumb }}
  </p>
</template>

<script>
export default {

    data() {
        return {
            breadcrumb: 'Home'
        }
    },

    async asyncData({ params, $http }) {
      const breadcrumb = await this.$store.state.breadcrumb
      return { breadcrumb }
    },

    // asyncdata() {
    //     if (!this.$store.state.breadcrumb) {
    //         // this.$store.dispatch('updateBreadcrumb', 'Home');
    //     }
    // },

    // mounted() {
    //     this.breadcrumb = this.$store.state.breadcrumb;
    // }

    // Prepare & format data
    // computed: {
    //     getBreadcrumb() {
    //         this.breadcrumb = this.$store.state.breadcrumb;
    //     },
    // },
}
</script>

<style lang="scss" scoped>
p {
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 11;
    margin: auto;
    font-weight: 200;
    letter-spacing: .5vw;
    font-size: .75rem;
    text-align: center;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    mix-blend-mode: difference;
    user-select: none;
    pointer-events: none;
}
</style>
