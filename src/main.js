import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


/**Access This data through this.$root.$data */
let data = {
  currentID: 1,
  routersNum: 1,
  routers: [{
    number: 1,
    id: 1,
    type: 'A',
    location: 'Provo, Utah',
  },
  {
    number: 2,
    id: 2,
    type: 'B',
    location: 'Seoul, Korea'
  },
  {
    number: 3,
    id: 4,
    type: 'B',
    location: 'Daejoen, Korea'
  },
  {
    number: 4,
    id: 2,
    type: 'B',
    location: 'Yongin, Korea'
  },
  ],
  getRouters() {
    return this.routers;
  },
  addRouter(routerType, routerLocation) {
    this.routers.push({
      number: this.routersNum,
      id: this.currentID,
      type: routerType,
      location: routerLocation
    })
    this.routersNum += 1;
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')


