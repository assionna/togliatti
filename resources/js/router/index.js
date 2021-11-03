import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter ({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "showTask",
            component: () => import('../components/pages/ShowTasks.vue'),
        },
        {
            path: "*",
            component: () => import('../components/pages/PageNotFound.vue'),
        }
    ]
});

export default router;
