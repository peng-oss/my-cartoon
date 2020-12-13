import Vue from 'vue'
import VueRouter from 'vue-router'

/* import Main from '../components/main/main.vue' */
const Main = () => import(/* webpackChunkName: "main_mainContext" */ '../components/main/main.vue')
/* import MainContext from '../components/context/mainContext.vue' */
const MainContext = () => import(/* webpackChunkName: "main_mainContext" */ '../components/context/mainContext.vue')
/* import Login from '../components/login/login.vue' */
const Login = () => import(/* webpackChunkName: "login_sort_rank_world" */ '../components/login/login.vue')
/* import Sort from '../components/sort/sort.vue' */
const Sort = () => import(/* webpackChunkName: "login_sort_rank_world" */ '../components/sort/sort.vue')
/* import Rank from '../components/rank/rank.vue' */
const Rank = () => import(/* webpackChunkName: "login_sort_rank_world" */ '../components/rank/rank.vue')
/* import World from '../components/world/world.vue' */
const World = () => import(/* webpackChunkName: "login_sort_rank_world" */ '../components/world/world.vue')


const Works = () => import(/* webpackChunkName: "words_look" */ '../components/works/works.vue')
/* import Works from '../components/works/works.vue' */
/* import Look0 from '../components/look/look0.vue' */
const Look0 = () => import(/* webpackChunkName: "words_look" */ '../components/look/look0.vue')
/* import Look1 from '../components/look/look1.vue' */
const Look1 = () => import(/* webpackChunkName: "words_look" */ '../components/look/look1.vue')
/* import Look2 from '../components/look/look2.vue' */
const Look2 = () => import(/* webpackChunkName: "words_look" */ '../components/look/look2.vue')
/* import Look3 from '../components/look/look3.vue' */
const Look3 = () => import(/* webpackChunkName: "words_look" */ '../components/look/look3.vue')
/* import Look4 from '../components/look/look4.vue' */
const Look4  = () => import(/* webpackChunkName: "words_look" */ '../components/look/look4.vue')
/* import Look5 from '../components/look/look5.vue' */
const Look5 = () => import(/* webpackChunkName: "words_look" */ '../components/look/look5.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', redirect: '/context' },
      { path: '/context', component: MainContext, },
      { path: '/sort', component: Sort },
      { path: '/rank', component: Rank },
      { path: '/world', component: World },
      { path: '/login', component: Login },
      { path: '/works', component: Works },
      { path: '/look0', component: Look0 },
      { path: '/look1', component: Look1 },
      { path: '/look2', component: Look2 },
      { path: '/look3', component: Look3 },
      { path: '/look4', component: Look4 },
      { path: '/look5', component: Look5 },
    ],
  }
]

const router = new VueRouter({
  routes,
})

export default router
