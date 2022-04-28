//对于axios进行二次封装
import axios from 'axios'
//1：利用axios对象的方法create，去创建一个axios实例
//2：request
const requests = axios.create({
  //配置对象
  //基础路径，发送请求的时候，路径当中会出现api
  baseURL: "/api",
  //代表请求超时的时间是5s
  timeout: 5000
})
//对外暴露
export default requests;