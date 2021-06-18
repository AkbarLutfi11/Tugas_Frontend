import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Auth from './components/Auth.vue'
import Todo from './components/Todo.vue'
import User from './components/User.vue'

const routes = [
    {path: '/', component: Auth},
    {path: '/Pacar', component: Todo },
    {path: '/User', component: User }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')
