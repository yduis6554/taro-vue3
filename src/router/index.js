import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/find/index";
import About from "@/pages/my/index";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
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
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;