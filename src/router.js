import { createWebHistory, createRouter } from "vue-router";
import List from './components/BoardList.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [
  {
    path: "/list",
    component: List,
  }, {
    path: "/",
    component: Home,
  }, {
    path: "/detail/:id(\\d+)",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
