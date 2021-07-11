import Vue from 'vue'
import VueRouter from 'vue-router'
import Commodity from "../views/Commodity";
import Shopping from "../views/Shopping"
import Productin from "../views/Productin"
import test from "../views/test"

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
        children: [{
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
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
