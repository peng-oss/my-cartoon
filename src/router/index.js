import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/main.vue'
import MainContext from '../components/context/mainContext.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/context',
    children: [
      {
        path: '/context',
        component: MainContext,
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
