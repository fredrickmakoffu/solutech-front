<template>
  <div id="wrapper" v-if="!loading"> 
      <sidebar :page="'Items'"></sidebar>
      
      <div class="body">
        <div class="backdrop" v-on:click="close()"></div>
          
        <admin-header :title="'Manage Stock'" :tagline="'Manage your stock from here.'" v-model:all_screens=all_screens v-model:screen=screen v-model:url=url  style="margin-bottom: 3rem;"></admin-header>

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
      
      <item-modal v-model:list_data=list_data></item-modal>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/layout/_spinner';
</style>

<script>
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/Header'
import AutoList from '../components/AutoList'
import ItemModal from '../components/Modal/ItemModal'

export default {
  name: 'Items',
  components: {
    AdminHeader,
    Sidebar,
    AutoList,
    ItemModal
  },
  data() {
    return {
      url: 'api/items',
      title: {status: true, title: 'Your Data', actions: [
        {name: 'Add Item', type: 'modal', action_url: 'item'}
      ]},
      all_screens: [
        {title: 'All Stock', screen: 1, url: 'api/items'},
      ],
      screen: 1,
      list_data: [],
      loading: true,
    } 
  },  
  mounted() {
      this.ifLoggedIn()
  },
  methods: {
    ifLoggedIn() {
      this.loading = true

      if(localStorage.getItem('user')) {
        this.loading = false
      } else {
        this.$router.push({name: 'Login'})
        this.loading = false
      }
    },     
  }    
}
</script>
