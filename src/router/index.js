import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/main.vue'
import Footer from '../components/footer/footer.vue'
import Login from '../components/login/login.vue'
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
      {
        path: '/login',
        component:Login,
      },
    ],
  },

  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  }

]

const router = new VueRouter({
  routes,
})

export default router
