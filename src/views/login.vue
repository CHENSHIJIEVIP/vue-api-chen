<template>
    <div>login
        <button @click='handleClick'>登录</button>
    </div>
</template>

<script>
export default {
    name:'login',
    methods:{
        handleClick(e){
            console.log(e)
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style>

</style>
