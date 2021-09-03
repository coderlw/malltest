import axios from "axios"

export function request(config) {
    // 创建axios实例 
    const instance1 = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
    })
    // axios拦截器一
    instance1.interceptors.request.use(config => {
        // console.log(config);
        return config
    }, err => {
        // console.log(err);
    },
    )
    // axios拦截器二
    instance1.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        // console.log(err);
    }
    )
    // 发送真正的网络请求
    return instance1(config)
}
