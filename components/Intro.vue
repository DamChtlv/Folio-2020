<template>
    <div id="intro">
        <p id="intro-text">This site rewards curiosity .</p>
    </div>
</template>

<script>
import charming from 'charming'
import { gsap } from 'gsap'

export default {

    // Local helpers
    methods: {

        offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        },

        launchIntro() {

            const introEl = document.getElementById('intro');
            const introTextEl = document.getElementById('intro-text');

            // Split text by words
            charming(introTextEl, {
                split: function(delimiter) {
                    return delimiter.split(' ');
                }
            });

            const introTextWordsEl = document.querySelectorAll('#intro-text span:not(.char5)');
            const introDotEl = document.querySelector('#intro-text span:last-of-type');
            const logoEl = document.querySelector('#logo');

            gsap.set(logoEl, {autoAlpha: 0})

            let homeIntroTL = new gsap.timeline({
                defaults: {duration: 1, ease: 'power3.out'}
            });

            homeIntroTL
                .to(introTextEl, {autoAlpha: 1}, 0.5)

            homeIntroTL
                .to(introTextWordsEl, {y: 0, stagger: 0.1, onComplete: () => {  }})
                .to(introDotEl, {y: '0%', duration: 1.25, ease: 'expo.out'}, '<.75')
                .to(introTextEl, {y: '-100%'}, '<1.5')
                .to(introTextWordsEl, {y: '100%', onComplete: () => {
                    const introDotPos = this.offset(introDotEl)
                    introEl.appendChild(introDotEl)
                    homeIntroTL
                        .to(introDotEl, {duration: 0, position: 'absolute', top: introDotPos.top, left: introDotPos.left})
                        .to(introDotEl, {ease: 'expo.inOut', left: '2%', top: '1%'})
                        .to(introDotEl, {autoAlpha: 0})
                        .to(logoEl, {autoAlpha: 1})
                        .to(introEl, {autoAlpha: 0}, '<')
                } }, '<')
        }
    },

    // Front-end code
    mounted() {
        var comp = this;
        window.onload = function() {
            comp.launchIntro();
        }
    }
}
</script>

<style lang="scss">
#intro {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9992;
    height: 100%;
    width: 100%;
    color: var(--white, #fff);
    font-size: 3vw;
    font-family: var(--font-primary);
    background: var(--dark700, #0F121D);
    overflow: hidden;
    pointer-events: none;
    user-select: none;
}

#intro-text {
    opacity: 0;
    overflow: hidden;

    span {
        display: inline-block;
        transform: translateY(100%);

        & + span {
            margin-left: 0.5vw;
        }
    }
}
</style>
