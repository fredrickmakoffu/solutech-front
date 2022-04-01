<template>
  <div id="wrapper" v-if="!loading">
      <sidebar :page="'Users'"></sidebar>
      
      <div class="body">
        <div class="backdrop" v-on:click="close()"></div>
          
        <admin-header :title="'Manage Site'" :tagline="'All your controls, in one place.'" v-model:all_screens=all_screens v-model:screen=screen v-model:url=url  style="margin-bottom: 3rem;"></admin-header>

        <div class="container mb-4">
          <div class="content-wrapper">
            <div class="content mx-auto">

              <!--  List 1 -->
              <auto-list v-if="url != null" v-model:all_screens=all_screens v-model:screen="screen" :title=title :url="url" v-model:list_data="list_data"></auto-list>

            </div>                                          
          </div>
        </div>
        
        <footer class="main-footer d-flex p-4 pb-2">
          <div class="float-end mx-auto">
            Copyright &copy;  

            Built for <a href="#">Solutech</a>
          </div>
        </footer>
      </div>
      
      <user-modal v-model:list_data=list_data></user-modal>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/layout/_spinner';
</style>

<script>
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/Header'
import AutoList from '../components/AutoList'
import UserModal from '../components/Modal/UserModal'
import ifLoggedIn from '../mixins/ifLoggedIn'

export default {
  name: 'Admin',
  mixins: [ifLoggedIn],
  components: {
    AdminHeader,
    Sidebar,
    AutoList,
    UserModal
  },
  data() {
    return {
      url: 'api/users',
      title: {status: true, title: 'Your Data'},
      all_screens: [
        {title: 'Users', screen: 1, url: 'api/users', actions: [
          {name: 'Edit', type: 'modal', action_url: 'user'},
          {name: 'Delete', type: 'api', action_url: {type: 'delete', url:'api/users/', message: {success: 'Success!', error: 'Error!'}}},
        ]},
      ],
      screen: 1,
      list_data: [],
      loading: null,
    } 
  }
}
</script>
