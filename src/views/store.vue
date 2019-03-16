<template>
    <div class="store">
        <h2>父组件</h2>
        <p>子传父：{{ msg }}</p>
        <a-input v-model="msg" :values="msg"></a-input>
        <a-show :content='msg'></a-show>
    </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AShow from '@/components/AShow.vue'

export default {
    name:'Store',
    data(){
        return{
            msg:'bus数据持久化'
        }
    },
    components:{
        AInput,
        AShow
    }

}
</script>

<style lang='less' scoped>
    .store{
        border: 1px solid red;
        p{
            background: rgb(0, 247, 255);
        }
    }

</style>
