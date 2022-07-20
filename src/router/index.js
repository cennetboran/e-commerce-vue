import VueRouter, { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage"
import FlowerPage from "../components/FlowerPage"
import Vue from "vue";


Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/FlowerPage',
        name: 'FlowerPage',
        component: FlowerPage
    },
    {
        path: '/FlowerPage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/BirthdayPage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/GiftPage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/TodayPage',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/BonnyFood',
        name: 'HomePage',
        component: HomePage
    },
]
const router = createRouter([{
    history: createWebHistory(process.env.BASE_URL),
    routes
}])
export default router