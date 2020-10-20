<template>
  <p>
      {{ title }}
  </p>
</template>

<script>
export default {
    data() {
        return {
            title: 'Home'
        }
    }
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
}
</style>
