import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewUser from "../views/NewUser";
import BloodPressure from "../views/BloodPressure";
import AddBloodPressure from "../views/AddBloodPressure";
import DiaryBloodPressure from "../views/DiaryBloodPressure";
import BloodSugar from "../views/BloodSugar";
import AddBloodSugar from "../views/AddBloodSugar";
import DiaryBloodSugar from "../views/DiaryBloodSugar";
import Weight from "../views/Weight";
import AddWeight from "../views/AddWeight";
import DiaryWeight from "../views/DiaryWeight";
import Temperature from "../views/Temperature";
import AddTemperature from "../views/AddTemperature";
import DiaryTemperature from "../views/DiaryTemperature";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Avaleht',
    component: Home
  },
  {
    path: '/uuskasutaja',
    name: 'Uue kasutaja loomine',
    component: NewUser
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
    path: '/veresuhkrum66tmine',
    name: 'Sisesta veresuhkru mõõtmistulemused',
    component: AddBloodSugar
  },
  {
    path: '/veresuhkrupaevik',
    name: 'Vaata päevikut veresuhkru mõõtmistulemustega',
    component: DiaryBloodSugar
  },
  {
    path: '/kehakaal',
    name: 'Kehakaal ja KMI',
    component: Weight
  },
  {
    path: '/kehakaalum66tmine',
    name: 'Sisesta kehakaalu mõõtmistulemused',
    component: AddWeight
  },
  {
    path: '/kehakaalupaevik',
    name: 'Vaata päevikut kehakaalu mõõtmistulemustega',
    component: DiaryWeight
  },
  {
    path: '/temperatuur',
    name: 'Kehatemperatuur',
    component: Temperature
  },
  {
    path: '/temperatuurim66tmine',
    name: 'Sisesta kehatemperatuuri mõõtmistulemused',
    component: AddTemperature
  },
  {
    path: '/temperatuuripaevik',
    name: 'Vaata päevikut kehatemperatuuri mõõtmistulemustega',
    component: DiaryTemperature
  }
]

const router = new VueRouter({
  routes
})

export default router
