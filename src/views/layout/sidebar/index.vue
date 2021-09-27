<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <sidebar-item :mrouts="mrout"></sidebar-item>
        </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SidebarItem from './components/SidebarItem.vue'
    export default {
        name: "sidebar",
        components: {
            SidebarItem
        },
        computed: {
            mrout() {
                return this.$store.getters.catalogues
            }
        },
        data() {
            return {

            }
        }
    }
</script>