import vue from 'vue'
const mutations = {
    SET_APP_NAME (state, params){
        state.app_name = params.newAppName
    },
    SET_TWO_NAME(state){
        vue.set(state, 'two_name','admin2')
    },
    SET_STATE_VALUE(state,value){
        state.state_value = value
    }
}

export default mutations
