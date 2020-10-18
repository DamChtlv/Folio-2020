<template>
    <header>
        <SiteLogo />
        <Breadcrumb />
        <FullScreenMenu />
    </header>
</template>

<script>
import FullScreenMenu from "~/components/FullScreenMenu.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import SiteLogo from "~/components/SiteLogo.vue";

export default {
    components: {
        FullScreenMenu,
        Breadcrumb,
        SiteLogo,
    }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1em 100px;
  background: transparent;

  a {
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

</style>
