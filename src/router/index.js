import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css';

function view (path) {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  return () => import(/* webpackChunkName: '' */ `../views/${path}`).then(m => m.default || m)
}

const routes = [
  {
    path: '/',
    name: 'Users',
    component: view('Users.vue')
  },
  {
    path: '/items',
    name: 'Items',
    component: view('Items.vue')
  }, 
  {
    path: '/orders',
    name: 'Orders',
    component: view('Orders.vue')
  },  
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: view('Vehicles.vue')
  },      
  {
    path: '/login',
    name: 'Login',
    component: view('Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: view('Register.vue')
  },  
  {
    path: '/logout',
    name: 'Logout',
    component: view('Logout.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  if (to.name) {
    // Start the route progress bar.
    nProgress.start()
  }
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  nProgress.done()
})


export default router
