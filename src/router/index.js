import { createWebHistory, createRouter } from "vue-router";
import config from "@/config/index";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/pages/home/index'),
        children: [
            {
                name: 'Login',
                path: 'Login',
                component: () => import('@/components/test.vue')
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: () => import('@/pages/user/index'),

    },
    {
        path: "/user",
        name: "user",
        component: () => import('@/components/test.vue')
    },
];

const router = createRouter({
    //history: createWebHistory(config.baseUrl.dev),
    routes,
});

export default router;