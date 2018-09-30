import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import About from "../components/About";
import Home from "../components/Home";
import PersonCenter from "../components/PersonCenter";
import Web from "../components/Web";
import MessageBoard from "../components/MessageBoard";

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/web',
      name: 'web',
      component: Web
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: PersonCenter
    },
    {
      path: '/messageBoard',
      name: 'messageBoard',
      component: MessageBoard
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
