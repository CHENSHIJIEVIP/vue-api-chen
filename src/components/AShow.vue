<template>
    <div  class="aShow">
        <h2>兄弟组件</h2>
        <p>子传子：{{content}}</p>
    </div>
</template>

<script>
export default {
    name:'AShow',
    props:{
        content:{
            type:[String,Number],
            defalut:'11111'
        }
    }
}
</script>

<style lang="less" scoped>
    .aShow{
        margin: 10px 10px;
        border: 1px solid green;
        p{
            background: yellowgreen;
        }
    }
</style>
