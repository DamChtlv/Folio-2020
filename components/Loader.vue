<template>
  <div id="loader">
      <p id="loading-text">
          <span data-text="I think it's loading. I think it's loading.">I think it's loading.</span>
      </p>
  </div>
</template>

<script>
import charming from "charming"
import gsap from "gsap"

export default {

    // Local helpers
    methods: {

        launchLoader() {

            const loaderEl = document.getElementById('loader');
            const loadingTextEl = document.getElementById('loading-text');
            const loadingTextSentencesEl = document.querySelector('#loading-text span');

            let numberOfLines = 8;
            for (let index = 0; index < numberOfLines; index++) {
                let clone = loadingTextSentencesEl.cloneNode(true);
                loadingTextEl.appendChild(clone);
            }

            let loaderTL = new gsap.timeline({
                defaults: {duration: .7, ease: 'power3.out'}
            });

            loaderTL
                .to(loadingTextEl, {duration: 1, opacity: 0, ease: 'expo.out', onComplete: function() {
                    // loadingTextEl.remove();
                    loaderEl.remove();
                    // loaderTL.clear();
                }}, 0.5)
        }
    },

    // Front-end code
    mounted() {
        var component = this;
        // window.addEventListener('DOMContentLoaded', function(ev) {
            component.launchLoader();
        // });

    }
};
</script>

<style lang="scss">
#loader {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9993;
    color: var(--white, #fff);
    font-size: 3vw;
    font-family: var(--font-primary);
    background: var(--dark700, #0F121D);
    overflow: hidden;
    pointer-events: none;
    user-select: none;
}

#loading-text {
    display: flex;
    flex-direction: column;
    font-size: 7.5vw;
    line-height: .95em;
    text-align: left;
    text-transform: uppercase;
    transform: rotate(-7deg);

    span {
        display: block;
        white-space: nowrap;
        font-weight: bold;
        animation: marquee-text-left 15s linear infinite;

        &::before,
        &::after {
            content: attr(data-text);
            position: absolute;
            right: 100%;
            padding: 0 21px;
        }

        &::after {
            left: 100%;
            right: auto;
        }

        &:nth-child(odd) {
            animation: marquee-text-right 15s linear infinite;
        }

        // &:nth-child(even) {
            // color: var(--white);
            // -webkit-text-fill-color: var(--dark700);
            // -webkit-text-stroke-width: 2px;
            // -webkit-text-stroke-color: var(--white);
        // }

        &:nth-child(1),
        &:nth-child(9) {
            font-weight: 100;
        }

        &:nth-child(2),
        &:nth-child(8) {
            font-weight: 200;
        }

        &:nth-child(3),
        &:nth-child(7) {
            font-weight: 300;
        }

        &:nth-child(4),
        &:nth-child(6) {
            font-weight: 500;
        }

        &:nth-child(5) {
            font-weight: 700;
        }
    }
}

@keyframes marquee-text-left {
    0% {
        transform: translate3d(100%,0,0);
    }
    100% {
        transform: translate3d(-100%,0,0);
    }
}

@keyframes marquee-text-right {
    0% {
        transform: translate3d(-100%,0,0);
    }
    100% {
        transform: translate3d(100%,0,0);
    }
}
</style>
