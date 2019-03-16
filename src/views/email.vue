<template>
    <div class="email">
        {{msg}}<br>
        <button @click='handleClick'>点击email</button>
    </div>
</template>

<script>
export default {
    name:'email',
    data(){
        return{
            msg:'222222222222@sina.com'
        }
    },
    methods:{
        handleClick(){
            this.$bus.$emit('on-click',this.msg)
        }
    },
}
</script>

<style lang="less" scoped>
    .email{
        margin: 10px 10px;
        border: 1px solid royalblue;
    }
</style>
