import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/HelloWorld'
import About from '@/components/About.vue'
import Services from '@/components/Services'
import Portifolio from '@/components/Portifolio'
import Contact from '@/components/Contact'

Vue.use(Router)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'about',
        path: '/about',
        component: About
    },
    {
        name: 'services',
        path: '/services',
        component: Services
    },
    {
        name: 'portifolio',
        path: '/portifolio',
        component: Portifolio
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    }
    
]

const router = new Router({
    routes, 
    //this mode removes # from the url
    mode: 'history'})

export default router
