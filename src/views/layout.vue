<template>
    <div class="layout-wrapper">
        <Layout class="layout-outer">
            <Sider :width="300" hide-trigger collapsible breakpoint='sm' v-model="collapsed">
                <!-- <router-link :to="{name:'layout_page'}">gird栅格</router-link> -->
                <!-- 菜单组件 -->
                <side-menu :collapsed='collapsed' :list='menuList'></side-menu>
            </Sider>
            <Layout>
                <Header class="header-wrapper">
                    <Icon :class="triggerClasses" type='md-menu' :size='32' @click.native='handleCollapsed'></Icon>
                </Header>
                <Content class="content-wrapper">
                    <Card shadow class="page-card">
                        <router-view></router-view>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>

import SideMenu from '_c/side-menu'
export default {
    name:'layout',
    data(){
        return{
            collapsed:false,
            menuList:[
                {
                    title:'1',
                    name:'menu1',
                    icon:'ios-alarm'
                },
                {
                    title:'2',
                    name:'menu2',
                    icon:'ios-alarm',
                    children:[
                        {
                            title:'2-1',
                            name:'menu2-1',
                            icon:'ios-alarm'
                        },
                        {
                            title:'2-2',
                            name:'menu2-2',
                            icon:'ios-alarm',
                            children:[
                                {
                                    title:'2-1-1',
                                    name:'menu2-1-1',
                                    icon:'ios-alarm'
                                },
                                {
                                    title:'2-1-2',
                                    name:'menu2-1-2',
                                    icon:'ios-alarm',
                                    children:[
                                        {
                                            title:'2-1-2-1',
                                            name:'menu2-1-2-1',
                                            icon:'ios-alarm'
                                        },
                                        {
                                            title:'2-1-2-2',
                                            name:'menu2-1-2-2',
                                            icon:'ios-alarm'
                                        },
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    title:'3',
                    name:'menu3',
                    icon:'ios-alarm',
                    children:[
                        {
                            title:'3-1',
                            name:'menu3-1',
                            icon:'ios-alarm'
                        },
                        {
                            title:'3-2',
                            name:'menu3-2',
                            icon:'ios-alarm',
                            children:[
                                {
                                    title:'3-1-1',
                                    name:'menu3-1-1',
                                    icon:'ios-alarm'
                                },
                                {
                                    title:'3-1-2',
                                    name:'menu3-1-2',
                                    icon:'ios-alarm'
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },
    components:{
        SideMenu
    },
    computed:{
        triggerClasses(){
            return[
                'trigger-icon',
                this.collapsed ? 'rotate' : ''
            ]
        }
    },
    methods:{
        handleCollapsed(){
            this.collapsed = !this.collapsed
        }
    }
}
</script>

<style lang='less' scoped>
.layout-wrapper, .layout-outer{
    height: 100%;
    .header-wrapper{
        background: #ffffff;
        box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
        padding: 0 23px;
        .trigger-icon{
            cursor: pointer;
            transition: transform 0.3s ease;
            &.rotate{
                transform: rotateZ(-90deg);
                transition: transform 0.3s ease;
            }
        }
    }
    .content-wrapper{
        padding: 10px;
    }
    .page-card{
        // height: 100%;
        min-height:~"calc(100vh - 84px)"
    }
}


</style>
