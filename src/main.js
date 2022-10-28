import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import router from "./router";
import store from "./store"
import firebase from 'firebase/compat/app';
import axios from 'axios'

Vue.prototype.$axios = axios;


// Vue.config.productionTip = false

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYJI_DWuyW7FO1mprIALlvFrYqFNQ2X64",
  authDomain: "shop-3cdeb.firebaseapp.com",
  projectId: "shop-3cdeb",
  storageBucket: "shop-3cdeb.appspot.com",
  messagingSenderId: "207650190872",
  appId: "1:207650190872:web:d44cd6c12793142887756d",
  measurementId: "G-4M00QSFX20"
};

firebase.initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
