<template>
    <el-container>
        <el-aside width="200px">
            <sidebar class="sidebar-container" />
        </el-aside>
        <el-main>
            <my-main />
        </el-main>
    </el-container>

</template>

<script>
    import MyMain from './main/index.vue'
    import sidebar from './sidebar/index.vue'
    import { mapState } from 'vuex'

    export default {
        name: 'Layout',
        components: {
            MyMain,
            sidebar,
        },
        computed: {
            ...mapState({
                // sidebar: state => state.app.sidebar,
            }),
        },
        methods: {

        }
    }
</script>
