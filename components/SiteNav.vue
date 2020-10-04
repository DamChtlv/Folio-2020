<template>
    <div id="menu">
        <SiteLogo />
        <FullScreenMenu />
    </div>
</template>

<script>
import FullScreenMenu from "~/components/FullScreenMenu.vue";
import SiteLogo from "~/components/SiteLogo.vue";

export default {
    components: {
        FullScreenMenu,
        SiteLogo,
    }
};
</script>

<style lang="scss" scoped>
#menu {
  display: flex;
  align-items: center;
  width: 100%;
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
}

</style>
