import Home from './pages/Home'
import My from './pages/nav/My'
import Lt from './pages/nav/Lt'
import Rec from './pages/nav/Rec' //推荐

import Login from './pages/Login'
import Reg from './pages/Reg'
import Error404 from './pages/Error404'

let routers = [
    {
        path:'/home',
        component: Home,
        exact: true,
        children: [
            {
                path: '/home/my',
                component: My
            },
            {
                path: '/home/lt',
                component: Lt
            },
            {
                path: '/home/rec',
                component: Rec
            },
        ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/reg',
        component: Reg,
    },
    {
        component: Login,
    }
    
] 

export default routers