import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [{ 
    path:'/',
    name: 'MainPage',
    component: () => import('../views/MainPage.vue'),
    children: [
        {
        path:'/home',
        name:'HomePage',
        component: ()=> import("../views/HomePage"),

        },
        {
        path:'/anime',
        name:'AnimePage',
        component: ()=> import("../views/AnimePage"),
        },

        {
        path:'/user',
        name:'UserPage',
        component: ()=> import("../views/UserPage"),
        }
    ]
}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router