import { getAppName } from '@/api/app'

const actions = {
    // updateAppName({ commit }){
    //     getAppName().then(res => {
    //         console.log(res)
    //         commit('SET_APP_NAME',{newAppName:res.info.appName})
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    async getAppName ({commit}) {
        const {info:{appName}} = await getAppName()
        commit('SET_APP_NAME', {newAppName:appName})
    }
}

export default actions
