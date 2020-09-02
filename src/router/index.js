import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from '../views/Welcome';
import Todo from '../views/Todo';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/todo',
        name: 'Todo',
        component: Todo
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
