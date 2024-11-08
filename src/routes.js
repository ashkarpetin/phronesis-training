export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/casino',
    name: 'casino',
    component: () => import('./views/CasinoView.vue'),
  },
  {
    path: '/deposit/:currency',
    name: 'deposit',
    component: () => import('./views/DepositView.vue'),
  },
  {
    path: '/debriefs',
    name: 'debriefs',
    component: () => import('./views/DebriefsView.vue'),
  },
];
