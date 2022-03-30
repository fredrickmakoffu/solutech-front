import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createStore } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Axios defaults
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.baseURL = 'http://localhost:8000';

// Set authorization header
axios.interceptors.request.use(function (config) {
  const user = localStorage.getItem('user')
  
  if (user !== null) {
      config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

// store instance setup
const store = createStore({
  state () {
    return {
      user: {},
      modal_list: {},
    }
  },
  mutations: {
    setModalList(state, modal_list) {
      state.modal_list = modal_list
    },
    setUser(state, user) {
      state.user = user
    }              
  },
  actions: {
    async getUser(context) {
      axios.get('api/user').then((response) => {
        context.commit("setUser", response.data.data);
      }).catch(() => {
        context.commit("setUser", {})
      })
    },      
    getModalList(context, data) {
      context.commit("setModalList", data);
    }
  },
  getters: {
    modal_list: state => state.modal_list,
    user: state => state.user
  }
})
  
createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
