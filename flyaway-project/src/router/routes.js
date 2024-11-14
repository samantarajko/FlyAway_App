const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/login', component: () => import('pages/LogInPage.vue') },
      { path: '/about-us', component: () => import('pages/AboutUsPage.vue') },
      { path: '/qa', component: () => import('pages/QA.vue') }, // Česta pitanja
      { path: '/team', component: () => import('pages/Team.vue') }, // Upoznaj team
      { path: '/travel', component: () => import('pages/Travel.vue') }, // Putovanja
      { path: '/register', component: () => import('pages/RegisterMe.vue')} // Registracija
    ]
  },

  // Catch-all route for undefined routes (always place this last)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
