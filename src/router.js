import Vue from "vue";
import Router from "vue-router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "",
            component: () => import("./components/Signup.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./components/Login.vue")
        },
        {
            path: "/home",
            name: "home",
            meta: { requiresAuth: true },
            component: () => import("./components/home.vue")
        },
        {
            path: "/signup",
            name: "signup",
            component: () => import("./components/Signup.vue")
        },
        {
            path: "/laptop",
            name: "laptop",
            component: () => import("./components/laptop.vue")
        }, {
            path: "/Cart",
            name: "Cart",
            component: () => import("./components/cart.vue")
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isAuthenticated = firebase.auth().currentUser;
    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})

export default router;