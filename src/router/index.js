import Vue from 'vue'
import VueRouter from 'vue-router'
import Commodity from "../views/Commodity";
import Shopping from "../views/Shopping"
import Productin from "../views/Productin"
import test from "../views/test"
import AdminInfo from "../views/Admin/AdminInfo"
import EditShopping from "../views/Admin/EditShopping"
import Welecome from "../views/Admin/Welecome"
import Testxx from "../views/Admin/Testxx"
import ShoppingShow from "../views/Admin/ShoppingShow"
Vue.use(VueRouter)
//路由配置
const routes = [{
    path: '',
    name: 'Commodity',
    component: Commodity,
},
    {
        path: '/commodity',
        name: 'Commodity',
        component: Commodity,
        children: [
            {
                path: '/',
                name: 'Index',
                redirect:{name:"Shopping"} //重定向
            },{
            path: '/shopping',
            name: 'Shopping',
            component: Shopping
        }, {
            path: '/productin',
            name: 'Productin',
            component: Productin
        },]
    },
    {
        path: '/test',
        name: 'test',
        component: test,
    },
    {
        path: '/admin',
        name: 'AdminInfo',
        component: AdminInfo,
        children: [
            {
                path: '/admin',
                name: 'Welecome',
                component:Welecome //重定向
            },
           {
                path: '/editShopping',
                name: 'EditShopping',
                component: EditShopping
            },
            {
                path: '/shoppingShow',
                name: 'ShoppingShow',
                component: ShoppingShow
            },
            {
                path: '/testxx',
                name: 'Testxx',
                component: Testxx
            }]
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
