<template>
    <button @click="mwyclick" size="mini">
        <slot></slot>
    </button>
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
<style lang="scss" scopes>
</style>