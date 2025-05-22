export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('./views/CheckoutView.vue'),
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
    path: '/new-deposit/:currency',
    name: 'new-deposit',
    component: () => import('./views/NewDepositView.vue'),
  },
  {
    path: '/payout/:currency',
    name: 'payout',
    component: () => import('./views/PayoutView.vue'),
  },
  {
    path: '/debriefs',
    name: 'debriefs',
    component: () => import('./views/DebriefsView.vue'),
  },
];
