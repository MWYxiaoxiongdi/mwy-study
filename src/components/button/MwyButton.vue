<template>
    <a href="#" @click="mwyclick">
        <slot></slot>
    </a>
</template>
<script>
    import { debounce, fnThrottle } from '../unit/index';
    export default {
        name: "MWYButton",
        props: {
            shake: {
                type: Boolean,
                default: false
            },
            times: {
                type: Number,
                default: 500
            },
            throttle: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {

            }
        },
        created() {
        },
        mounted() {
            console.log(this.$slots.default)
        },
        methods: {
            mwyclick(event) {
                if (this.shake)
                    debounce(this.$emit("click", event), this.times)
                else if (this.throttle)
                    fnThrottle(this.$emit("click", event), 500, this.times)
                else
                    this.$emit("click", event);
            }
        },
        watch: {

        },
        components: {

        }
    }
</script>
<style lang="scss" scoped>
    * {
        margin: 0;
        padding: 0;
        font-family: '微软雅黑', sans-serif;
        box-sizing: border-box;
    }
    a {
        position: relative;
        padding: 5px;
        color: #21ebff;
        text-decoration: none;
        font-size: 14px;
        text-transform: uppercase;
        transition: 0.5s;
        overflow: hidden;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);
    }

    a:hover {
        background: #21ebff;
        color: #fff;
        box-shadow: 0 0 50px #21ebff;
        transition-delay: 0.5s;
    }

    a:nth-child(1) {
        filter: hue-rotate(115deg);
    }

    a:nth-child(3) {
        filter: hue-rotate(270deg);
    }

    a::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #21ebff;
        border-left: 2px solid #21ebff;
        transition: 0.5s;
        transition-delay: 0.5s;
    }

    a:hover::before {
        width: 100%;
        height: 100%;
        transition-delay: 0s;
    }

    a::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 9px;
        height: 9px;
        border-bottom: 2px solid #21ebff;
        border-right: 2px solid #21ebff;
        transition: 0.5s;
        transition-delay: 0.5s;
    }

    a:hover::after {
        width: 100%;
        height: 100%;
        transition-delay: 0s;
    }
</style>