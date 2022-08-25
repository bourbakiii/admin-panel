import {createRouter, createWebHistory} from 'vue-router'

import productRouter from './product.js';

console.log('router is:');
console.log({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: import('@/pages/Home.vue')
        },
        productRouter
    ]
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: import('@/pages/Home.vue')
        },
        {

            path: '/product',
            name: "Product",
            children: [{
                path: 'edit',
                name: "ProductEdit",
                component: import('@/pages/Product/Edit.vue')
            },
                {
                    path: 'add',
                    name: "ProductAdd",
                    component: import('@/pages/Product/Add.vue')
                }
            ]
        }
    ]
})


export default router;