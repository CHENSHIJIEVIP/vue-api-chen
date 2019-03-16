<template>
    <div>
        {{name}}
    </div>
</template>

<script>
export default {
    name:'argu',
    props:{
        name:{
            type:[String,Number],
            default:'jason'
        }
    },
    beforeRouteUpdate(to,from,next){    //组件内守卫(路由发生变化，组件被复用的时触发)
        console.log(to.name,from.name)
    }
}
</script>

<style>

</style>
