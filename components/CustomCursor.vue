<template>
    <svg id="cursor" width="25" height="25" viewBox="0 0 25 25">
        <circle class="cursor__inner" cx="12.5" cy="12.5" r="6.25"/>
    </svg>
</template>

<script>
import { gsap } from 'gsap';

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Gets the mouse position
const getMousePos = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }

    return { x : posx, y : posy }
};

// Track the mouse position
let mouse = {x: 0, y: 0};

// Cursor logic
class Cursor {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.el.style.opacity = 0;

        this.bounds = this.DOM.el.getBoundingClientRect();

        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.2},
            ty: {previous: 0, current: 0, amt: 0.2},
            scale: {previous: 1, current: 1, amt: 0.2},
            opacity: {previous: 1, current: 1, amt: 0.2}
        };

        this.onMouseMoveEv = (ev) => {
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width/2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height/2;
            gsap.to(this.DOM.el, {duration: 0.9, ease: 'Power3.easeOut', opacity: 1});
            requestAnimationFrame(() => this.render());
            window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);
        window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

        if (!document.documentElement.classList.contains('has-custom-cursor')) {
            document.documentElement.classList.add('has-custom-cursor');
        }
    }
    enter() {
        this.renderedStyles['scale'].current = 4;
        this.renderedStyles['opacity'].current = 0.2;
    }
    leave() {
        this.renderedStyles['scale'].current = 1;
        this.renderedStyles['opacity'].current = 1;
    }
    render() {
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width/2;
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height/2;

        for (const key in this.renderedStyles ) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }

        this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
        this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;

        requestAnimationFrame(() => this.render());
    }
    destroy() {
        document.documentElement.classList.remove('has-custom-cursor');
    }
}

export default {
    mounted() {

        // initialize custom cursor
        const logoEl = document.getElementById('logo');
        const cursorEl = document.getElementById('cursor');

        if (!logoEl || !cursorEl)
            return;

        let cursor = null;
        logoEl.addEventListener('dblclick', (ev) => {
            if (!cursor) {
                cursor = new Cursor(cursorEl);
            } else {
                cursor.destroy();
                cursor = null;
            }
        });

    }
}
</script>

<style lang="scss">
#cursor {
    display: none;
}

@media (any-pointer: fine) {
    .has-custom-cursor {
        *,
        *:before,
        *:after {
            cursor: none !important;
        }

        #cursor {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            display: block;
            pointer-events: none;

            circle {
                fill: var(--primary);
                // stroke: var(--cursor-stroke);
                // stroke-width: var(--cursor-stroke-width);
            }
        }
    }
}

</style>
