<template>
  <div id="wrapper" v-if="!loading">
      <sidebar :page="'Vehicles'"></sidebar>
      
      <div class="body">
        <div class="backdrop" v-on:click="close()"></div>
          
        <admin-header :title="'Manage Vehicles'" :tagline="'Manage your vehicles from here.'" v-model:all_screens=all_screens v-model:screen=screen v-model:url=url  style="margin-bottom: 3rem;"></admin-header>

        <div class="container mb-4">
          <div class="content-wrapper">
            <div class="content mx-auto">
              <div class="row">
                <div class="col-md-3 col-sm-6 mt-4">
                  <div class="card bg-primary border-0 p-4">
                    <h2 class="text-white fw-bold">{{ reports.total }}</h2>
                    <p class="mb-0 text-light">Total Vehicles</p>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6 mt-4">
                  <div class="card bg-info border-0 p-4">
                    <h2 class="text-dark fw-bold">{{ reports.loading }}</h2>
                    <p class="mb-0 text-dark">Vehicles Loading</p>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6 mt-4">
                  <div class="card bg-primary border-0 p-4">
                    <h2 class="text-white fw-bold">{{ reports.on_transit }}</h2>
                    <p class="mb-0 text-light">Vehicles on Transit</p>
                  </div>
                </div>
              </div>

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

      <vehicle-modal v-model:list_data=list_data></vehicle-modal>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/layout/_spinner';
</style>

<script>
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/Header'
import AutoList from '../components/AutoList'
import ifLoggedIn from '../mixins/ifLoggedIn'
import VehicleModal from '../components/Modal/VehicleModal'

export default {
  name: 'Orders',
  mixins: [ifLoggedIn],
  components: {
    AdminHeader,
    Sidebar,
    AutoList,
    VehicleModal
  },
  data() {
    return {
      url: 'api/vehicles',
      title: {status: true, title: 'Your Data', actions: [
        {name: 'Add Vehicle', type: 'modal', action_url: 'vehicle'}
      ]},
      all_screens: [
        {title: 'All Vehicles', screen: 1, url: 'api/vehicles', actions: [
          {name: 'Edit', type: 'modal', action_url: 'vehicle'},
          {name: 'Delete', type: 'api', action_url: {type: 'delete', url:'api/vehicles/', message: {success: 'Success!', error: 'Error!'}}},
        ]},
      ],
      screen: 1,
      list_data: [],
      loading: true,
      reports: []
    } 
  },  
  mounted() {
    this.ifLoggedIn()
    this.getReports()
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
    getReports() {
      this.axios.get('/api/vehicle-reports').then((response) => {
        this.reports = response.data.data
      }).catch((errors) => {
        console.log(errors);
      })  
    },     
  }
}
</script>
