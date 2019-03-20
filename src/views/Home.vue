<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到某页面</button>
    <button @click="handleClick('replace')">替换到某页面</button><br>
    <b>{{food}}</b>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props:{
      food:{
          type:[String, Number],
          default:'chicken'
      }
  },
  beforeRouteEnter(to,from,next){   //组件内路由守卫(正要进入目标组件但没有渲染组件时触发)
      next(vm => {
        // console.log('设置vue实例',vm)
      })
  },
  beforeRouteLeave(to, from ,next){     //组件内路由守卫(即将离开目标组件但没有离开时触发)
    // const leave = confirm('您确定要离开吗？')
    // if(leave) next()
    // else next(false)
    next()
  },
  methods:{
      handleClick(type){
          //编程式路由
        if(type == 'back') this.$router.back()
        else if(type == 'push') this.$router.push({
                name:'argu',
                // params:{
                //     name:'jason'
                // }
                query:{
                    name:'jason'
                }
            })
        else if(type == 'replace') this.$router.replace({name:'parent'})
      }
  }
}
</script>
