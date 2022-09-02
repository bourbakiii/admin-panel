import {createRouter, createWebHistory} from 'vue-router'

export const routes = [
    {
        path: '/tailwind',
        name: "Tailwind",
        meta: {transition: 'page-transition'},
        component: () => import('@/pages/Tailwind.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;