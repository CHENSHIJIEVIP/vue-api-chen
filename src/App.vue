<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name:'home'}">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link> |
      <router-link to="/store">store</router-link> |
      <router-link to="/view">视图</router-link>
    </div>
    <!-- 命名视图 -->
    <transition-group :name="routerTransition">
    <!-- <transition-group name="router"> -->
        <router-view key='default'/>
        <router-view key='tel' name='tel'/>
        <router-view key='email' name='email'/>
    </transition-group>
  </div>
</template>

<script>
export default {
    data(){
        return{
            routerTransition:'ddd'
        }
    },
    watch:{
        '$route'(to) {
            to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)    //监听路由变化给某个组件加动效store?transitionName=router
        }
    }
}
</script>


<style lang="less">
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

//页面组件进入时一些效果
.router-enter{
    opacity: 0;
}
.router-enter-active{
    transition: opacity 1s ease;
}
.router-enter-to{
    opacity: 1;
}
//页面组件离开时一些效果
.router-leave{
    opacity: 1;
}
.router-leave-active{
    transition: opacity 1s ease;
}
.router-leave-to{
    opacity: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
