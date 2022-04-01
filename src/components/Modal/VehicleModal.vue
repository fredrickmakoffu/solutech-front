<template>
    <!-- Modal -->
    <div class="modal fade" id="vehicle" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="d-block">
                        <h5 class="content-title-min">Vehicle Details</h5>
                        <p class="text-muted">Add or Edit Vehicle Details</p>
                    </span>
                </div>
                            
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <status v-model:status_data=status_data></status>

                            <form action="#" @submit.prevent="handleSubmit()">
                                <div class="form-row">
                                    <label for="vehicle_type" class="fw-bold mb-2">Vehicle Type</label>
                                    <div class="input-group">
                                        <select v-model="vehicle.vehicle_type" id="vehicle_type" class="form-select">
                                            <option value="motorcycle">Motorcycle</option>
                                            <option value="truck">Truck</option>
                                            <option value="van">Van</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="form-row mt-4">
                                    <label for="registration" class="fw-bold mb-2">Email</label>
                                    <div class="input-group">
                                        <input id="registration" type="text" class="form-control no-border" v-model="vehicle.registration" placeholder="Enter your vehicle Registration." required>
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
    name: 'UserModal',
    props: ['list_data'],
    components: {
        Status
    },
    computed: {
        modal_list () {
            return this.$store.state.modal_list
        }
    },  
    watch: {
        modal_list: function (){
            this.vehicle = this.$store.state.modal_list
        }
    },
    data() {
        return {
            vehicle: {},
            screen: 1,
            status_data: {
                success: false,
                success_message: null, 
                error: false,
                error_message: null,
                loading: false
            },
        }
    },
    methods: {
        addVehicle() {
            this.axios.post('api/vehicles', this.vehicle).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = 'Success!'

                setTimeout(() => {
                    this.status_data.success = false
                }, 1500);

                this.getVehicles()
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = error.message
                
                console.log(error.response);
            })              
        },
        editVehicle() {
            this.axios.put('api/vehicles/' + this.vehicle.id, this.vehicle).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = 'Success!'

                setTimeout(() => {
                    this.status_data.success = false
                }, 1500);

                this.getVehicles()
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = error.message
                
                console.log(error.response);
            })              
        },
        handleSubmit() {
            if(this.vehicle.id) {
                this.editVehicle()
            } else {
                this.addVehicle()
            }
        },
        switchScreen(value) {
            this.screen = value 
        },
        getVehicles() {
            this.axios.get('api/vehicles').then(response => {
                this.$emit('update:list_data', response.data.data)
            })
        }        
    }
}
</script>