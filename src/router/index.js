import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BloodPressure from "../views/BloodPressure";
import AddBloodPressure from "../views/AddBloodPressure";
import DiaryBloodPressure from "../views/DiaryBloodPressure";
import BloodSugar from "../views/BloodSugar";
import Weight from "../views/Weight";
import Temperature from "../views/Temperature";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Avaleht',
    component: Home
  },
  // {
  //   path: '/bloodpressure',
  //   name: 'BloodPressure',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/BloodPressure.vue')
  //   }
  // },
  {
    path: '/verer6hk',
    name: 'Vererõhk',
    component: BloodPressure
  },
  {
    path: '/verer6hum66tmine',
    name: 'Sisesta vererõhu mõõtmistulemused',
    component: AddBloodPressure
  },
  {
    path: '/verer6hupaevik',
    name: 'Vaata päevikut vererõhu mõõtmistulemustega',
    component: DiaryBloodPressure
  },
  {
    path: '/veresuhkur',
    name: 'Veresuhkur',
    component: BloodSugar
  },
  {
    path: '/kehakaal',
    name: 'Kehakaal ja KMI',
    component: Weight
  },
  {
    path: '/temperatuur',
    name: 'Kehatemperatuur',
    component: Temperature
  },

]

const router = new VueRouter({
  routes
})

export default router
