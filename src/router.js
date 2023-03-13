import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import Contacts from './pages/Contacts.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/blog',
      name: 'project-list',
      component: ProjectList
    },
    {
      path: '/blog/:slug',
      name: 'single-project',
      component: SingleProject
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export { router };