<template>
    <div class="aInput">
        <h2>子组件</h2>
        <p><input @input='handleInput' /></p>
        <p>父传子：{{values}}</p>
    </div>
</template>

<script>
export default {
    name:'AInput',
    props:{
        values:{
            type:[String,Number],
            default:''
        }
    },
    methods:{
        handleInput(e){
            let value = e.target.value
            this.$emit('input',value)
        }
    }
}
</script>

<style lang="less" scoped>
    .aInput{
        margin: 10px 10px;
        border: 1px solid black;
        p{
            background: pink;
        }
    }
</style>
