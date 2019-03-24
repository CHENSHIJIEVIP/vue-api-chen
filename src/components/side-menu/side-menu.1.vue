<template>
    <div class="side-menu-wrapper">
        <slot></slot>
        <Menu width="auto" theme="dark">
            <template v-for="item in list">
                <!-- 菜单两级渲染 -->
                <!-- <Submenu v-if="item.children" :key='`menu_${item.name}`' :name='item.name'>
                    <menu-item></menu-item>
                </Submenu> -->
                <!-- 菜单递归渲染 -->
                <re-submenu v-if="item.children" :key='`menu_${item.name}`' :name='item.name' :parent="item"></re-submenu>
                <menu-item v-else :key='`menu_${item.name}`' :name='item.name'><Icon :type="item.icon" />{{item.title}}</menu-item>
            </template>
        </Menu>
        <div>

        </div>
    </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'

export default {
    name:'sideMenu',
    props: {
        collapsed:{
            type: Boolean,
            default: false
        },
        list:{
            type: Array,
            default: () => []   //()=>({})
        },
    },
    components:{
        ReSubmenu
    },
    mounted(){
        console.log(this.collapsed)
    }
}
</script>

<style lang='less' scoped>
    .side-menu-wrapper{
        width:100%;
    }
</style>
