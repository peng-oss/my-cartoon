import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/main.vue'
import Login from '../components/login/login.vue'
import MainContext from '../components/context/mainContext.vue'
import Sort from '../components/sort/sort.vue'
import Rank from '../components/rank/rank.vue'
import World from '../components/world/world.vue'
import Works from '../components/works/works.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', redirect: '/context' },
      { path: '/context', component: MainContext, },
      { path: '/sort', component: Sort, },
      { path: '/rank', component: Rank, },
      { path: '/world', component: World, },
      { path: '/login', component: Login, },
      { path: '/works', component: Works, },
    ],
  }
]

const router = new VueRouter({
  routes,
})

export default router
