const routes = [
  {
    path: '/registro',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Register/Index'),
    children: [
      {
        path: 'usuario',
        component: () => import(/* webpackChunkName: "register" */ '@/views/Register/User/Index'),
        props: true,
        children: [
          {
            path: 'pacote',
            name: 'package',
            component: () => import(/* webpackChunkName: "register" */ '@/views/Register/User/Steps/Package'),
            props: true,
          },
          {
            path: 'cadastro',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ '@/views/Register/User/Steps/Register'),
            props: true,
          },
          {
            path: 'validacao',
            name: 'validation',
            component: () => import(/* webpackChunkName: "register" */ '@/views/Register/User/Steps/Validation'),
            props: true,
          },
          {
            path: 'pagamento',
            name: 'payment',
            component: () => import(/* webpackChunkName: "register" */ '@/views/Register/User/Steps/Payment'),
            props: true,
          },
          {
            path: 'final',
            name: 'final',
            component: () => import(/* webpackChunkName: "register" */ '@/views/Register/User/Steps/FinalFeedback'),
            props: true,
            meta: {
              wizardNavigator: {
                disableStepsNavigation: true
              }
            }
          },
        ]
      }
    ]
  },
];

export default routes;
