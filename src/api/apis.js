import axios from 'axios'


let req = axios.create({
    baseURL: 'http://localhost:80',
    timeout: 10000
})

export const IP = 'http://localhost:80'

// 登录验证
export function login(acc, pwd){
    return req.post('/login.php')
}
// 猜你喜欢
export function like() {
    return req.get('/gethouselist.php')
}