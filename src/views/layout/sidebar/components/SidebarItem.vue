<template>
    <div>
        <div v-for="(item,i) in mrouts" :key="i">
            <el-menu-item @click="changpath(item.path)" v-if="item.children.length==0" :ref="item.id" index="1">
                {{item.name}}</el-menu-item>
            <el-submenu v-else :ref="item.id" popper-append-to-body>
                <template slot="title">{{item.name}}</template>
                <sidebar-item :mrouts="item.children" />
            </el-submenu>
        </div>
    </div>
</template>

<script>
    import path from 'path'
    export default {
        name: 'SidebarItem',
        props: {
            mrouts: {
                type: Array,
                required: true
            },
        },
        data() {
            return {}
        },
        methods: {
            changpath(path) {
                this.$router.push(path)
            }
        }
    }
</script>