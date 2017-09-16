import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import Category from '@/components/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:category',
        name: 'Category',
        component: Category
    },
    {
        path: '/:category/:title',
        name: 'Article',
        component: Article
    },
    {
        path: '*',
        name: 'Default',
        component: Home,
        redirect: '/'
    }
  ]
})