import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/main.vue'
import Footer from '../components/footer/footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  }

]




const router = new VueRouter({
  routes
})

export default router
