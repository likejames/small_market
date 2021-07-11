import Vue from 'vue'
import VueRouter from 'vue-router'
import Commodity from "../views/Commodity";
import Shopping from "../views/Shopping"
import Productin from "../views/Productin"

Vue.use(VueRouter)
//路由配置
const routes = [
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
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
