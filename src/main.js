import { createApp } from 'vue'
import router from './router.js';
import './style.css'
import App from './App.vue'
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheButton from './components/TheButton.vue';
import MainBorder from './components/UI/MainBorder.vue';
import Popup from './components/UI/Popup.vue'
import BigPopup from './components/UI/BigPopup.vue'
// import TheCard from './components/TheCard.vue';
// import BlogEntry from './components/BlogEntry.vue';
// import NewEntry from './components/NewEntry.vue';

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('the-button', TheButton);
app.component('main-border', MainBorder);
app.component('popup', Popup);
app.component('big-popup', BigPopup);
// app.component('the-card', TheCard);
// app.component('blog-entry', BlogEntry);
// app.component('new-entry', NewEntry);


app.use(router).mount('#app')
