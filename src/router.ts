import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import TutorialList from './components/TutorialsList.vue';
import TutorialDetails from './components/TutorialDetails.vue';
import AddTutorial from './components/AddTutorial.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    alias: '/tutorials',
    name: 'tutorials',
    component: TutorialList,
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: TutorialDetails,
  },
  {
    path: '/add',
    name: 'add',
    component: AddTutorial,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
