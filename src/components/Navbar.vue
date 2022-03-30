<template>
  <nav :class="'navbar bg-' + background_color">
    <div class="container">
      
      <div class="navbar-brand bars" v-if="sidebar" @click="toggled()">
        <span style="display: -webkit-inline-box;">
          <font-awesome-icon :class="'nav-icon text-white'" :icon="['fa', 'bars']" />
        </span>
      </div>

      <span class="navbar-left">      
        <div class="navbar-brand dropdown">
          <span data-bs-toggle="dropdown" class="dropdown-toggle" style="display: -webkit-inline-box;">
            <font-awesome-icon :class="'nav-icon text-white'" :icon="['fa', 'user']" style="margin-right: 0" />
          </span>

          <div class="dropdown-menu">
            <span class="account">
              <p v-if="user.name" class="account-text" style="display: inline-block">Hey, {{ user.name.split(' ')[0]  }}!</p>
            </span>

            <a class="dropdown-item logout" @click="logout()">
              <font-awesome-icon class="icon logout" :icon="['fa', 'sign-out-alt']" />
              <p class="dropdown-list"> Logout </p>
            </a>
          </div>
        </div>
      </span>

      <profile></profile>

      <div class="divider mt-4 d-none"></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_navbar.scss';

    .dropdown-item {
      cursor: pointer;
    }
    
</style>

<script>
import Profile from '../components/Profile';

export default {
    name: 'Navbar',
    props: {
      background_color: {
        type: String,
        required: true
      },
      sidebar: {
        required: false,
        type: Boolean
      }
    },
    components: {
      Profile
    },
    data() {
      return {
        color: ''      
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }      
    },    
    mounted() {
      this.$store.dispatch("getUser")
    },  
    methods: {
      toggled() { 
        document.querySelector('#sidebar-wrapper').classList.add('toggled');
        document.querySelector('.backdrop').classList.add('on');
      },
      logout() {
        localStorage.removeItem('user')
        this.$router.push({name: 'Login'})
      }
    }
}
</script>