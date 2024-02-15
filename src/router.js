import { createWebHistory, createRouter } from "vue-router";
import List from './components/BoardList.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

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
    children: [
      { // nested routes
        path: "author",
        component: Author,
      }, {
        path: "comment",
        component: Comment,
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
