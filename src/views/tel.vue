<template>
    <div class="tel">
        tel:11111111111111<br>
        {{msg}}
    </div>
</template>

<script>
export default {
    name:'tel',
    data(){
        return{
            msg:'12121212'
        }
    },
    mounted(){
        this.$bus.$on('on-click', val => {
            this.msg = val
        })
    }
}
</script>

<style lang="less" scoped>
    .tel{
        margin: 10px 10px;
        border: 1px solid green;
    }
</style>
