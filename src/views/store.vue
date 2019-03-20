<template>
    <div class="store">
        <h2>父组件</h2>
        <p>子传父：{{ msg }}</p>
        <a-input v-model="msg" :values="msg"></a-input>
        <!-- 绑定state的值：{{stateValue}}<a-input :values="stateValue" @input='handleStateValueChange'></a-input> -->  <!-- 通过事件提交 -->
        绑定state的值：{{stateValue}}<a-input v-model="stateValue"></a-input>   <!-- 设置set、get -->
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
        <div class="mutations">
            <button @click="handleClick('action')">异步提交actions</button>
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
        ...mapState({   //组件中计算属性获取仓库中的数据
            appName: state => state.app_name,
            userName: state => state.user.user_name,
            twoName: state => state.two_name,
            todoList: state => state.todo ? state.todo.todoList : '',
            // stateValue: state => state.state_value
        }),
        stateValue:{    //设置state属性的set、get,修改和获取属性的值
            get(){
                return this.$store.state.state_value
            },
            set(val){
                this.SET_STATE_VALUE(val)
            }
        },
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
            'SET_USER_NAME',
            'SET_STATE_VALUE'
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
                // this.$store.state.user.user_name = 'haha'
                this.SET_USER_NAME({newUserName:'newUser_Name'})
            }else if(val == 'save'){
                this.$store.registerModule('todo',{     //注册模块['user','todo]
                    state:{
                        todoList:'学习模块'
                    }
                })
            }else if(val == 'action'){
                // this.updateAppName()
                this.$store.dispatch('updateAppName')  //提交actions
            }
        },
        handleStateValueChange(val){    //通过事件commit提交mutation修改state的值
            this.SET_STATE_VALUE(val)
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
        .mutations{
            display: inline-block;
            margin: 10px 10px;
        }
    }

</style>
