import { createRouter, createWebHistory} from 'vue-router'
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Goats = () => import('./views/Goats.vue');
const Gallery = () => import('./views/Gallery.vue');
const Contact = () => import('./views/Contact.vue');

const routes = [
    { path: '/', component: Home, alias: '/home' },
    { path: '/home', redirect:{ name: 'home'}},
    { path: '/about', component: About },
    { path: '/goats', component: Goats },
    { path: '/contact', component: Contact },
    { path: '/gallery', component: Gallery },
  ]
  

  const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })
  

export default router;