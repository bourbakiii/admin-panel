import {createRouter, createWebHistory} from 'vue-router'

export const routes = [
    {
        path: '/',
        name: 'Home',
        icon_name: 'fa-solid fa-house',
        navigation_name: 'Главная',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        icon_name: 'fa-solid fa-user',
        navigation_name: 'Профиль',
        component: () => import('@/pages/Profile.vue')
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;