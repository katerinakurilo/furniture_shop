import Vue from 'vue'
import Router from 'vue-router'
import vHeader from '../components/v-header'
import vCart from '../components/v-cart'
import vCatalog from '../components/v-catalog'
import vTable from '../components/v-table'
import vSofa from '../components/v-sofa'
Vue.use(Router);



let router = new Router({
    routes: [
        {
            path: '/',
            name: 'header',
            component: vHeader
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: vCatalog,
            
        },
        {
            path: '/catalog/table',
            name: 'table',
            component: vTable,
            
        },
        {
            path: '/catalog/sofa',
            name: 'sofa',
            component: vSofa,
            
        }
    ]
})




export default router;