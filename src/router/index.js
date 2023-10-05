import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import BasketView from "../views/BasketView.vue";
import ProductView from "../views/ProductView.vue";
import Checkout1 from "../components/Checkout1.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/basket',
      name: 'basket',
      component: BasketView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout1
    }
  ]
})

export default router
