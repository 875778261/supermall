import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })
    //2.axios拦截器
    //2.1请求拦截的作用
    instance.interceptors.response.use(config => {
        //1.config中的信息不符合服务器要求
        //2.比如每次发送网络请求时都想要在界面中显示一个请求的图标
        //3.某些网络请求（比如登录的token），必须携带一些特殊信息
        return config
    }, err => {
        console.log(err);
    })

    //2.2响应拦截
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    //3.发送真正的网络请求
    return instance(config)

}



















