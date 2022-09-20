import {createRouter, createWebHistory} from 'vue-router'

export const routes = [
        {
            path: '/',
            name: 'Home',
            navigation_name: 'Главная',
            component: ()=>import('@/pages/Home.vue')
        },
    ]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;