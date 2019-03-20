import axios from 'axios'
import { publicUrl } from '@/config'

class HttpRequest{
    constructor(baseUrl = publicUrl){
        this.baseUrl = baseUrl
        this.queue = {}
    }
    //创建请求传入的配置信息
    getInsideConfig (){
        const config = {
            baseUrl: this.baseUrl,
            headers:{
                //
            }
        }
        return config
    }
    //拦截器
    interceptors(instance,url){
        //请求
        instance.interceptors.request.use(config => {
            //添加全局的loading
            //Spin.show()
            if(Object.keys(this.queue).length) //Spin.show() iview
            this.queue[url] =true
            return config
        }, err => {
            return Promis.reject(error)
        })
        //响应
        instance.interceptors.response.use(res => {
            // console.log(res)
            delete this.queue[url]
            const {data, status} = res  //返回
            return {data, status}
        },err => {
            delete this.queue[url]
            return Promis.reject(error)
        })
    }
    request (options){
        const instance = axios.create()
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance,options.url)
        return instance(options)
    }
}

export default HttpRequest
