import Vue from 'vue'
import VueRouter from 'vue-router'
import Commodity from "../views/Commodity";
import Shopping from "../views/Shopping"
import Productin from "../views/Productin"
import test from "../views/test"
import AdminInfo from "../views/Admin/AdminInfo"

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
        path: '/admin/Info',
        name: 'AdminInfo',
        component: AdminInfo,
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
