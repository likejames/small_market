import Vue from 'vue'
import VueRouter from 'vue-router'
import Commodity from "@/views/Commodity";
import Test from "@/views/Test"
import Test1 from "@/views/Test"
Vue.use(VueRouter)
//路由配置
const routes = [
    {
        path: '/commodity',
        name: 'Commodity',
        component: Commodity,
        children: [{
            path: '/test',
            name: 'test',
            component: Test
        },
            {
                path: '/test1',
                name: 'test1',
                component: Test1
            },]
    }
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
