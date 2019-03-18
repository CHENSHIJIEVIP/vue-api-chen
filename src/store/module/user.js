const state = {
    user_name :'jason'
}

const mutations = {
    SET_USER_NAME (state, params){
        state.user_name = params.newUserName
    }
}

const actions = {
    // updateUserName({commit, state, rootState, dispatch}){

    // }
}

const getters = {
    firstName:(state) => {
        return state.user_name.substr(0,1)
    }
}

export default{
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
    modules:{

    }
}
