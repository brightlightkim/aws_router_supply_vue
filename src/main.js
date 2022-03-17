import { createApp, VueElement } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/*
const Home = { template: '<p class="router-page home">Home</p>'};
const About = { template: '<p class="router-page about">About</p>'};
const Settings = {
    template: '<p class="router-page settings">Settings</p>',
};

const Router = {
    currentRoute: '/',
    notFountRoute: Home,
    basePath: window.location.pathname.replace(/\/+$/, ''),
    routes: {
        '/': Home,
        '/about': About,
        '/settings': Settings,
    },
};

VueElement.component('app-a', {
    template: 
    '<a v-bind:href="href" v-bind:class="{active: isActive}" v-on:click.prevent="go"<slot></slot>  </a>',
    data: function() {
        return {
            router: Router,
        };
    },
    props: {//Property associated with it
        href: {type: String, required},
    },
    computed: {
        isActive() {
            return this.href===this.router.currentRoute;
        },,
    }
})
*/