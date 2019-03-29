import Home from '@/views/Home.vue'

export default [
    {
        path: '/',
        alias:'/home_page',     //别名路由
        name: 'home',   //命名路由
        component: Home,
        props: route => ({      //函数模式传参
            food: route.query.food
        }),
        beforeEnter: (to,from,next) => {    //路由内守卫
            // if(from.name === 'about') alert('这是从登录页about来的')
            // else alert('这不是从登录也页about来的')
            next()
        }
    },
    {
        path:'/login',
        name:'login',
        component: () => import('@/views/login.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
        props:{     //对象模式传参
            food:'banana'
        },
        meta:{      //路由源信息
            title: '关于'
        }
    },
    {
        path:'/argu/:name',     //参数路由
        name:'argu',
        component: () => import('@/views/argu.vue'),
        props: true     //属性模式传参
    },
    {
        path:'/parent',
        name:'parent',
        component: () => import('@/views/parent.vue'),
        children:[      //嵌套路由
            {
                path:'child',
                name:'child',
                component: () => import('@/views/child.vue'),
            }
        ]
    },
    {
        path:'/store',
        name:'store',
        component: () => import('@/views/store.vue')
    },
    {
        path:'/view',
        name:'view',
        components:{    //命名视图
            default: () => import('@/views/About.vue'),
            tel: () => import('@/views/tel.vue'),
            email: () => import('@/views/email.vue')
        }
    },
    {
        path:'/main',
        redirect:'/'    //路由重定向
    },
    {
        path:'/layout',
        name:'layout',
        component: () => import('@/views/layout.vue'),
        //redirect: '/layout/layout_page',
        children:[
            {
                path: 'layout_page',
                name: 'menu1',
                component: () => import('@/views/layout-page.vue'),
            }
        ]
    },
    {
        path:'*',
        component: () => import('@/views/error_404.vue')
    }
]
