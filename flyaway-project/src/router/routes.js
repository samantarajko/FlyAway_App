const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'login', component: () => import('pages/LogInPage.vue') },
      {path: '/about-us', component: () => import('pages/ONamaPage.vue')
      }
    ]
  },

  // Catch-all route for undefined routes (always place this last)
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
