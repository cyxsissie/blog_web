import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Archives from '../views/Archives.vue';
import ArticleInfo from '../views/ArticleInfo.vue';
import Tag from '../views/Tag.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/archives',
    name: 'archives',
    component: Archives,
  },
  {
    path: '/articleInfo',
    name: 'ArticleInfo',
    component: ArticleInfo,
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
