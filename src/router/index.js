import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const routes = [
  {
    path: '/',
    component: () => import('../components/main/main.vue'),
    children: [
      { path: '/', redirect: '/context' },
      {
        path: '/context',
        component: () => import('../components/context/mainContext.vue'),
      },
      { path: '/sort', component: () => import('../components/sort/sort.vue') },
      { path: '/rank', component: () => import('../components/rank/rank.vue') },
      {
        path: '/world',
        component: () => import('../components/world/world.vue'),
      },
      {
        path: '/login',
        component: () => import('../components/login/login.vue'),
      },
      {
        path: '/works',
        component: () => import('../components/works/works.vue'),
      },
      {
        path: '/look/:title',
        component: () => import('../components/look/look.vue'),
      }
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
