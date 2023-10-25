import { createRouter, createWebHistory } from "vue-router";

import Homepage from "./pages/Homepage.vue";
import WorkPage from "./pages/WorkPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";

const bgColor= '#fffeee';
const bgColorSecondary='#f6f4fb';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
            meta: { bgColor: bgColor}
        },
        {
            path: '/work',
            name: 'work',
            component: WorkPage,
            meta: { bgColor: bgColor}
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage,
            meta: { bgColor: bgColorSecondary}
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage,
            meta: { bgColor: bgColorSecondary}
        },
    ]
});

export {router};