<template>
    <div class="side-menu-wrapper">
        <slot></slot>
        <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
            <template v-for="item in list"> -->
                <!-- 菜单两级渲染 -->
                <!-- <Submenu v-if="item.children" :key='`menu_${item.name}`' :name='item.name'>
                    <menu-item></menu-item>
                </Submenu> -->
                <!-- 菜单递归渲染 -->
                <re-submenu v-if="item.children" :key='`menu_${item.name}`' :name='item.name' :parent="item"></re-submenu>
                <menu-item v-else :key='`menu_${item.name}`' :name='item.name'><Icon :type="item.icon" />{{item.title}}</menu-item>
            </template>
        </Menu>
        <!-- 收缩 -->
        <div v-show="collapsed" class="drop-wrapper">
            <template v-for="item in list">
                <re-dropdown @on-select="handleSelect" v-if="item.children" :key="`drop_${item.name}`" :parent="item" icon-color="#fff" :showTitle="false"></re-dropdown>
                <Tooltip v-else transfer placement="right" :content="item.title" :key="`drop_${item.name}`">
                    <span @click="handleClick(item.title)" class="drop-menu-span">
                        <Icon :type="item.icon" color="#fff" size="20" />
                    </span>
                </Tooltip>
            </template>
        </div>
    </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'

import ReDropdown from './re-dropdown.vue'

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
        ReSubmenu,
        ReDropdown
    },
    methods:{
        handleSelect(name){
            console.log(name)
        },
        handleClick(val){
            console.log(val)
        }
    },
}
</script>

<style lang='less'>
    .side-menu-wrapper{
        width:100%;
        .ivu-tooltip, .drop-menu-span{
            display: block;
            width: 100%;
            text-align: center;
            padding: 8px 0;
        }
        .drop-wrapper > .ivu-dropdown{
            display: block;
            padding:5px;
            margin: 0 auto;
        }

    }
</style>
