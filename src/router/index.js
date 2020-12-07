import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/main.vue'
import MainContext from '../components/context/mainContext.vue'
import Sort from '../components/sort/sort.vue'
import Rank from '../components/rank/rank.vue'
import World from '../components/world/world.vue'


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
    ],
  }
]

const router = new VueRouter({
  routes,
})

export default router
