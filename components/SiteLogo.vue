<template>
  <svg
    id="logo"
    :height="height"
    :width="width"
    fill="none"
    viewBox="0 0 31 33"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="eye"
      d="M15.8967 0H1.24121V33H15.8967C24.8121 33 31 29.1225 31 17.2012V15.7987C31 3.795 24.8121 0 15.8967 0ZM16.2224 29.9887H4.29443V2.97H16.2224C23.9572 2.97 27.9467 6.765 27.9467 15.7987V17.2012C27.9467 26.235 23.9572 29.9887 16.2224 29.9887Z"
      :fill="fill"
    />
    <path
      id="eyelid"
      d="M27.4652 8.32445L28.8702 10.5527C23.0835 10.7845 18.5342 12.2234 14.0136 15.15C9.49292 18.0765 6.29246 21.6545 3.65291 26.8777L2.24793 24.6494C4.88748 19.4263 8.08794 15.8482 12.6086 12.9217C17.1293 9.99513 21.6785 8.55624 27.4652 8.32445Z"
      :fill="fill"
    />
    <path
      id="pupil"
      d="M24.0471 20.9747C24.0471 22.5568 22.7814 23.8393 21.2201 23.8393C19.6587 23.8393 18.393 22.5568 18.393 20.9747C18.393 19.3926 19.6587 18.1101 21.2201 18.1101C22.7814 18.1101 24.0471 19.3926 24.0471 20.9747Z"
      :fill="fill"
    />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 33,
    },
    width: {
      type: Number,
      default: 31,
    },
    fill: {
      type: String,
      default: "#fff",
    },
  },
  methods: {
    mousePosition(event) {
      let mousePos = {};
      const x = event.pageX;
      const y = event.pageY;
      mousePos.x = x;
      mousePos.y = y;
      return mousePos;
    },
    changePupilPosition(x, y) {
      const pupilEl = document.getElementById("pupil");
      const pupilElPos = pupilEl.getBoundingClientRect();
      let pupilElX = pupilElPos.left;
      let pupilElY = pupilElPos.top;
      pupilElX = x;
      pupilElY = y;
    },
  },
  mounted() {
    var comp = this;
    window.addEventListener(
      "mousemove",
      function (event) {
        const mouseCoords = comp.mousePosition(event);
        comp.changePupilPosition(mouseCoords.x, mouseCoords.y);
      },
      true
    );
  },
};
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
  top: 3%;
  left: 2%;
  z-index: 9995;
  vertical-align: middle;
  mix-blend-mode: difference;
  cursor: pointer;
  transition: transform 0.2s ease 0s;

  &:hover {
    transform: scale(0.9);
  }
}
</style>
