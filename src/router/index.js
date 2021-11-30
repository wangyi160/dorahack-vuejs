import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import store from '../store/index'

// 捕获异常不处理
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {  return originalPush.call(this, location).catch(err => err) }

Vue.use(VueRouter)
let router = new VueRouter({
    routes: [{
            path: '/', // 这是index对应的url /
            name: 'Index',
            component: Index,
            redirect: '/market', // 直接跳转到了 /market, 即是children[0]
            children: [{
                    path: 'market', // url是 /market
                    name: 'market',
                    component: () =>
                        import ('../views/market')
                },
                {
                    path: 'detail', // url是 /detail
                    name: 'detail',
                    component: () =>
                        import ('../views/detail')
                },
            ],
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
});

router.afterEach((to, form, next) => {

    window.scrollTo(0, 0);
})

export default router