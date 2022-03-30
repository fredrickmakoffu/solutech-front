<template>
    <!-- Modal -->
    <div class="modal fade" id="assign-to-vehicle" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <span class="d-block">
                        <h5 class="content-title-min">Assign Order to Vehicle</h5>
                    </span>
                </div>
                            
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <status v-model:status_data=status_data></status>

                            <form action="#" @submit.prevent="handleSubmit()">
                                <div class="form-row">
                                    <label for="vehicle" class="fw-bold mb-2">Choose Vehicle</label>

                                    <div class="input-group">
                                        <select v-model="assigned.vehicle_id" id="vehicle" class="form-select">
                                            <option :value="id" v-for="({registration, id}, index) in vehicles" :key="index">{{ registration }}</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="d-flex mt-4">
                                    <button type="button" class="btn button btn-sm secondary ms-auto" data-bs-dismiss="modal">
                                        <span class="ms-2 me-2">Cancel</span> <font-awesome-icon :icon="['fa', 'times-circle']" />&nbsp;
                                    </button>
                                    
                                    <button :class="[{'success': status_data.loading == false }, {'default': status_data.loading == true }, 'btn', 'button', 'btn-sm']" :disabled="status_data.loading == true">
                                        <span class="ms-2 me-2">Change</span> 
                                        
                                        <font-awesome-icon class="me-1" v-if="status_data.loading == false" :icon="['fa', 'check-circle']" />
                                        
                                        <div class="spinner-border spinner-border-sm" role="status" v-if="status_data.loading == true">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../assets/scss/layout/_form.scss';
    @import '../../assets/scss/helpers/_breakpoints.scss';
    
    .side-menu {
        @include media("<=tablet") {
            display: none;
        }

        p {
            cursor: pointer;
        }
    }

    .top-menu {
        display: none;

        @include media("<=tablet") {
            display: flex;
        }

        p {
            cursor: pointer;
        }
    } 
</style>

<script>
import Status from '../../components/Status';

export default {
    name: 'AssignToVehicle',
    props: ['orders'],
    computed: {
        modal_list () {
            return this.$store.state.modal_list
        }
    },      
    watch: {
        modal_list: function (){
            this.assigned.order_id = this.$store.state.modal_list.id
        }
    },
    components: {
        Status
    },
    data() {
        return {
            assigned: {
                order_id: null,
                vehicle_id: null
            },
            vehicles: {},
            vehicle: null,
            status_data: {
                success: false,
                success_message: null, 
                error: false,
                error_message: null,
                loading: false
            },
        }
    },
    mounted() {
        this.getVehicles()
    },
    methods: {
        handleSubmit() {
            this.axios.post('api/assign-vehicle', this.assigned).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = 'Success!'

                setTimeout(() => {
                    this.status_data.success = false
                }, 1500);   

                this.getOrders()
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = error.response.data.message
            })                      
        },
        getVehicles() {
            this.axios.get('api/vehicles').then(response => {
                this.vehicles = response.data.data
            })
        },
        getOrders() {
            this.axios.get('api/orders').then(response => {
                this.$emit('update:orders', response.data.data)
            })
        }
    }
}
</script>