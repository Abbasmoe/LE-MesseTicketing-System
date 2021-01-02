import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import signup from '@/views/signup'


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
    },
    {
        path: "/login",
        name: "login",
        component: login
},
    {
        path: "/signup",
        name: "signup",
        component: signup
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
