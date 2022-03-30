<template>
  <div id="wrapper">
      <sidebar :page="'Orders'"></sidebar>
      
      <div class="body">
        <div class="backdrop" v-on:click="close()"></div>
          
        <admin-header :title="'Manage Orders'" :tagline="'Manage your orders from here.'" v-model:all_screens=all_screens v-model:screen=screen v-model:url=url  style="margin-bottom: 3rem;"></admin-header>

        <div class="container mb-4">
          <div class="content-wrapper">
            <div class="content mx-auto">
              <div class="container mb-4">
                <div class="content-wrapper">
                  <div class="content mx-auto">

                    <div class="row">
                      <div class="col-md-3 col-sm-6 mt-4">
                        <div class="card bg-primary border-0 p-4">
                          <h2 class="text-white fw-bold">{{ reports.total }}</h2>
                          <p class="mb-0 text-light">Total Deliveries</p>
                        </div>
                      </div>

                      <div class="col-md-3 col-sm-6 mt-4">
                        <div class="card bg-info border-0 p-4">
                          <h2 class="text-dark fw-bold">{{ reports.pending }}</h2>
                          <p class="mb-0 text-dark">Pending Deliveries</p>
                        </div>
                      </div>

                      <div class="col-md-3 col-sm-6 mt-4">
                        <div class="card bg-primary border-0 p-4">
                          <h2 class="text-white fw-bold">{{ reports.dispatched }}</h2>
                          <p class="mb-0 text-light">Dispatched Deliveries</p>
                        </div>
                      </div>

                      <div class="col-md-3 col-sm-6 mt-4">
                        <div class="card bg-info border-0 p-4">
                          <h2 class="text-dark fw-bold">{{ reports.delivered }}</h2>
                          <p class="mb-0 text-dark">Delivered Deliveries</p>
                        </div>
                      </div>
                    </div>

                    <section-title v-if="title.status == true" :title=title.title :actions=title.actions></section-title>

                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                            <status v-model:status_data=status_data></status>
                        </div>
                      </div>
                    </div>


                    <div class="row mb-3 mt-4">
                        <div id="cards" class="col-md-12 col-lg-12 mt-3" v-for="({id, status, order_items}, index) in orders" :key="index">
                          <div class="card mb-2 border-0">
                            <div class="card-body pb-0">
                              <div class="d-flex">
                                  <p class="text-muted text-uppercase fw-bold" style="letter-spacing: .7px">
                                    <span class="fw-bold text-dark">Order ID:</span> {{ id }}
                                  </p>
                                  <p class="text-muted text-uppercase mb-0 pt-1 ms-auto">
                                      <span style="letter-spacing: 1px" :class="['text-uppercase', 'fw-bold', 
                                          {'text-warning': status == 'pending'},
                                          {'text-dark': status == 'loading'},
                                          {'text-primary': status == 'dispatched'},
                                          {'text-success': status == 'delivered'}
                                      ]">{{ status }}</span>
                                      
                                      <font-awesome-icon :class="['ms-2', 
                                          {'text-warning': status == 'pending'},
                                          {'text-dark': status == 'loading'},
                                          {'text-primary': status == 'dispatched'},
                                          {'text-success': status == 'delivered'}
                                      ]" :icon="['fas', 'circle']"></font-awesome-icon>
                                  </p>                                        
                              </div>

                              <div class="bg-secondary mb-4" style="padding-top: 1px"></div>

                              <div class="row">
                                  <div class="col-md-6 col-sm-12" v-for="({name, price}, index) in order_items" :key="index">
                                      <p class="text-dark fst-italic">{{ index+1 }}.</p>
                                      
                                      <p class="text-dark mb-3"> 
                                          <span class="fw-bold text-uppercase">
                                              Name:
                                          </span> 
                                          {{ name }}
                                      </p>

                                      <p class="text-dark mb-3"> 
                                          <span class="fw-bold text-uppercase">
                                              Price:
                                          </span> 
                                          Ksh. {{ price }}
                                      </p>
                                  </div>
                              </div>
                                
                              <div class="bg-secondary mb-2" style="padding-top: 1px"></div>

                              <div class="d-flex mb-2">
                                <div class="text-muted ms-auto" v-if="status == 'pending'">
                                  <button class="btn btn-transparent text-dark btn-sm" @click="toModal({id})">Assign to Vehicle <font-awesome-icon class="ms-2" :icon="['fa', 'angle-right']"></font-awesome-icon></button>
                                </div>

                                <div class="text-muted ms-auto" v-if="status == 'loading'">
                                  <button class="btn btn-transparent text-primary btn-sm" @click="updateOrder('dispatched', id)">Dispatch Order</button>
                                </div>

                                <div class="text-muted ms-auto" v-if="status == 'dispatched'">
                                  <button class="btn btn-transparent text-success btn-sm" @click="updateOrder('delivered', id)">Complete Delivery</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> 
                    </div>
                  </div>                                          
                </div>
              </div>
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
      
      <order-modal v-model:orders=orders></order-modal>

      <assign-to-vehicle v-model:orders=orders></assign-to-vehicle>
  </div>
</template>

<style lang="scss" scoped>
  @import '../assets/scss/layout/_lists.scss';

  #cards {
    display: block!important;
  }
</style>

<script>
import Sidebar from '../components/Sidebar'
import AdminHeader from '../components/Header'
import SectionTitle from '../components/SectionTitle'
import OrderModal from '../components/Modal/OrderModal'
import AssignToVehicle from '../components/Modal/AssignToVehicle'
import Status from '../components/Status'
import {Modal} from 'bootstrap'

export default {
  name: 'Orders',
  components: {
    AdminHeader,
    SectionTitle,
    Sidebar,
    OrderModal,
    AssignToVehicle,
    Status
  },
  data() {
    return {
      url: 'api/orders',
      title: {status: true, title: 'Your Data', actions: [
        {name: 'Create Order', type: 'modal', action_url: 'order'}
      ]},
      all_screens: [
        {title: 'All Orders', screen: 1, url: 'api/orders'}
      ],       
      status_data: {
        "success": false,
        "success_message": null,
        "error": false,
        "error_message": null,
        "loading": false
      },       
      orders: [],
      screen: 1,
      list_data: [],
      loading: true,
      reports: []
    } 
  },
  mounted() {
    this.getDatabyPage()
  },
  methods: {
    toModal(data) {
        this.$store.dispatch("getModalList", data)
        this.modalElem = new Modal(document.getElementById('assign-to-vehicle'))
        this.modalElem.show()
    },    
    getDatabyPage() {
      this.axios.get('/api/orders').then((response) => {
        this.orders = response.data.data
        this.getReports()
      }).catch((errors) => {
        console.log(errors);
      })  
    }, 
    getReports() {
      this.axios.get('/api/order-reports').then((response) => {
        this.reports = response.data.data
      }).catch((errors) => {
        console.log(errors);
      })  
    },     
    updateOrder(value, id) {
      this.status_data.loading = true

      let status = {
        status: value
      }

      this.axios.put('/api/orders/' + id, status).then(() => {
          this.status_data.loading = false
          this.status_data.error = false
          this.status_data.success = true
          this.status_data.success_message = 'Order updated!'
            
          this.getDatabyPage()
      }).catch((error) => {
          this.status_data.loading = false
          this.status_data.error = true
          this.status_data.success = false
          this.status_data.error_message = 'Order not updated.' + error.response.data.message
      })
    }       
  }
}
</script>
