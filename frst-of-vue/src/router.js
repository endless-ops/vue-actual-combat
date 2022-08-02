import {createRouter, createWebHistory} from 'vue-router'; // 引入vue-router
import Home from './views/Home';

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes : [
        {
            path:'/',
            name:'Home',
            component : Home
        },

        {
            path:'/about',
            name:'about',
            component: () => import('./views/About')
        }
    ]
})