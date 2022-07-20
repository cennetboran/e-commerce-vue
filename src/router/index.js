
import HomePage from "../components/HomePage"
import FlowerPage from "../components/FlowerPage"
import GiftPage from "../components/GiftPage"
import BirthdayPage from "../components/BirthdayPage"
import UsPage from "../components/UsPage"

export const routes = [
    {
        path: '',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/FlowerPage',
        name: 'FlowerPage',
        component: FlowerPage
    },

    {
        path: '/BirthdayPage',
        name: 'BirthdayPage',
        component: BirthdayPage
    },
    {
        path: '/GiftPage',
        name: 'GiftPage',
        component: GiftPage
    },
    {
        path: '/UsPage',
        name: 'UsPage',
        component: UsPage
    },
    // {
    //     path: '/FlowerPage',
    //     name: 'HomePage',
    //     component: HomePage
    // },
    // {
    //     path: '/BirthdayPage',
    //     name: 'HomePage',
    //     component: HomePage
    // },
    // {
    //     path: '/GiftPage',
    //     name: 'HomePage',
    //     component: HomePage
    // },
    // {
    //     path: '/TodayPage',
    //     name: 'HomePage',
    //     component: HomePage
    // },
    // {
    //     path: '/BonnyFood',
    //     name: 'HomePage',
    //     component: HomePage
    // },
]

export default routes