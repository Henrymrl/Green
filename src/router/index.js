import { createRouter, createWebHistory } from 'vue-router';
// import {getAuth, onAuthStateChanged} from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', component: () => import("../views/HomeView.vue"),
      meta: { requiresAuth: true, }
    },

    { path: '/SignUp', component: () => import("../views/SignUpView.vue") },
    { path: '/Login', component: () => import("../views/LoginView.vue") },
    { path: '/Cabazes', component: () => import("../views/CabazesView.vue") },
    { path: '/Erro', component: () => import("../views/ErroView.vue") },
    { path: '/About', component: () => import("../views/AboutView.vue") },
  ],
});

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener();
//         resolve(user);
//       },

//       reject
//     );
//   })
// }

// router.beforeEach(async(to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (await getCurrentUser) {
//       next();
//     }
//     else {
//       alert("não tens acesso!");
//       next("/");
//     }
//   }
//   else {
//     next();
//   }
// });
export default router;