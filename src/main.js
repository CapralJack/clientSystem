import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date',dateFilter)

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBzqHRJriowBzqpki9SIoTpZG_f0pD0t34",
  authDomain: "ado-crm.firebaseapp.com",
  databaseURL: "https://ado-crm.firebaseio.com",
  projectId: "ado-crm",
  storageBucket: "ado-crm.appspot.com",
  messagingSenderId: "931473495717",
  appId: "1:931473495717:web:3f8df7fc707f5ee82bdf4c"
});

let app 
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  
})


