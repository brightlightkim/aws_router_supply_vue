import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


/**Access This data through this.$root.$data */
let data = {
  currentID: 2,
  routersNum: 4,
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
  addTicket(name, problem) {
    this.routers.push({
      id: this.currentID,
      type: name,
      description: problem
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')


