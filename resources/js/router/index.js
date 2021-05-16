import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../components/Home";

Vue.use(VueRouter);
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) return { selector: to.hash };
        if (savedPosition) return savedPosition;
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: "/",
            name: "Public",
            component: () => import("../components/home/Index"),
            meta: {
                requiresAuth: false,
                admin: false,
                requiresVisitore: false
            },
            children: [
                {
                    path: "",
                    name: "Home",
                    component: () => import("../components/home/Home"),
                    meta: {
                        requiresAuth: false,
                        admin: false,
                        requiresVisitore: false
                    }
                },
            ]
        },

        {
            path: "/admin",
            component: () => import("../components/admin/index"),
            meta: { requiresAuth: true, admin: true, requiresVisitore: false },
            name: "Admin",
            redirect: { name: "Dashboard" },
            children:[
                {
                    path: "dashboard",
                    name: "Dashboard",
                    component: () => import("../components/admin/dashboard/Dashboard"),
                    meta: { admin: true }
                },
            ]
        },

        {
            path: "/auth",
            component: () => import("../components/auth/Index"),
            name: "Auth",
            meta: { requiresAuth: false, admin: false, requiresVisitore: true },
            redirect: { name: "Connexion" },
            children: [
                {
                    path: "/connexion",
                    component: () => import("../components/auth/Connexion"),
                    name: "Connexion",
                    meta: {
                        requiresAuth: false,
                        admin: false,
                        requiresVisitore: true
                    }
                },
                {
                    path: "/mail-verification",
                    component: () =>
                        import("../components/auth/MailVerification"),
                    name: "MailVerification"
                },
                {
                    path: "/password-oublie",
                    component: () => import("../components/auth/Forgot"),
                    name: "Forgot"
                },
                {
                    path: "/reset-password/:token/:email",
                    component: () => import("../components/auth/ResetPassword"),
                    name: "ResetPassword"
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        next({
            name: "Connexion",
            query: { redirect: to.fullPath }
        });
    } else if (to.matched.some(record => record.meta.requiresVisitore)) {
        if (!store.getters.isLoggedIn) {
            next();
            return;
        }
        next({ name: "Home" });
    } else {
        next();
    }
});

export default router;
