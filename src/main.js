import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyC6OxrvVxbK5Sh6V9beF5yZdtelIw8SN60',
      authDomain: 'vue-test-e7efb.firebaseapp.com',
      databaseURL: 'https://vue-test-e7efb.firebaseio.com',
      projectId: 'vue-test-e7efb',
      storageBucket: ''
    })
  }
})
