import {createRouter, createWebHistory} from 'vue-router'

// import productRouter from './product.js';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'First',
            meta: {transition: 'page-transition'},
            component: () => import('@/pages/Home.vue')
        },
        {
            path: '/second',
            name: "Second",
            meta: {transition: 'page-transition-with-partners'},
            component: () => import('@/pages/Second.vue')
        },
        {
            path: '/third',
            name: "Third",
            meta: {transition: 'page-transition'},
            component: () => import('@/pages/Third.vue')
        },
    ]
})


export default router;