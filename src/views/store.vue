<template>
    <div class="store">
        <h2>父组件</h2>
        <p>子传父：{{ msg }}</p>
        <a-input v-model="msg" :values="msg"></a-input>
        <a-show :content='msg'></a-show>
        <p>vuexState：{{ appName }}</p>
        <p>vuexStateUser：{{ userName }}</p>
        <p>{{inputValueLastLetter}}</p>
        <p>{{appVersion}}</p>
        <p>{{firstName}}</p>
        <div class="mutations">
            <button @click="handleClick('app')">修改app_name</button>
            <p>{{twoName}}</p>
        </div>
        <div class="mutations">
            <button @click="handleClick('user')">修改user_name</button>
            <p>{{twoName}}</p>
        </div>
        <div class="mutations">
            <button @click="handleClick('save')">动态注册模块</button>
            <p>{{todoList}}</p>
        </div>
    </div>
</template>

<script>
import AInput from '@/components/AInput.vue'
import AShow from '@/components/AShow.vue'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name:'Store',
    data(){
        return{
            msg:'bus数据持久化'
        }
    },
    computed:{
        // appName(){
        //     return this.$store.state.app_name
        // },
        // userName(){
        //     return this.$store.state.user.user_name
        // },
        // ...mapState([
        //     'app_name',
        //     'user_name'
        // ])
        ...mapState({
            appName: state => state.app_name,
            userName: state => state.user.user_name,
            twoName: state => state.two_name,
            todoList:state => state.todo ? state.todo.todoList : ''
        }),
        inputValueLastLetter(){     //计算属性
            return this.msg.substr(-3)
        },
        appVersion(){
            return this.$store.getters.appVersion
        },
        ...mapGetters([
            'firstName'
        ])
    },
    components:{
        AInput,
        AShow
    },
    methods:{
        ...mapMutations([
            'SET_APP_NAME',
            'SET_USER_NAME'
        ]),
        ...mapActions([
            'updateAppName'
        ]),
        handleClick(val){
            // this.$store.commit('SET_APP_NAME',{     //1、commit修改state的值
            //     newAppName : 'newAPP_Name'
            // })
            // this.$store.commit('SET_TWO_NAME')      //2、commit添加state的新属性和值
            if(val == 'app'){
                this.SET_APP_NAME({newAppName:'newAPP_Name'})
            }else if(val == 'user'){
                this.SET_USER_NAME({newUserName:'newUser_Name'})
            }else if(val == 'save'){
                this.$store.registerModule('todo',{     //注册模块['user','todo]
                    state:{
                        todoList:'学习模块'
                    }
                })
            }

            // this.updateAppName()
            this.$store.dispatch('getAppName')  //提交actions

        }
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
