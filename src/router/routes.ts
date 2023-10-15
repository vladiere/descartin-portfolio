import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'project', name: 'project', component: () => import('pages/ProjectPage.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'experience', name: 'experience', component: () => import('pages/ExperiencePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
