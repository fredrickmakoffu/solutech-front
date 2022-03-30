<template>
    <!-- Modal -->
    <div class="modal fade" id="user" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="d-block">
                        <h5 class="content-title-min">User Details</h5>
                        <p class="text-muted">Edit User Details</p>
                    </span>
                </div>
                            
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <status v-model:status_data=status_data></status>

                            <form action="#" @submit.prevent="handleSubmit()">
                                <div class="form-row">
                                    <label for="first_name" class="fw-bold mb-2">Names</label>
                                    <div class="input-group">
                                        <input id="first_name" type="text" class="form-control" v-model="user.name" placeholder="Enter your First Name" required> 
                                    </div>
                                </div>
                                
                                <div class="form-row mt-4">
                                    <label for="first_name" class="fw-bold mb-2">Email</label>
                                    <div class="input-group">
                                        <input id="email" type="email" class="form-control no-border" v-model="user.email" placeholder="Enter your Email" required>
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
            this.user.id = this.$store.state.modal_list.id
            this.user.name = this.$store.state.modal_list.name
            this.user.email = this.$store.state.modal_list.email            
        }
    },
    data() {
        return {
            user: {},
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
        handleSubmit() {
            this.axios.put('api/users/' + this.user.id, this.user).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = 'Success!'

                setTimeout(() => {
                    this.status_data.success = false
                }, 1500);

                this.getUsers()
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = error.message
                
                console.log(error.response);
            })                      
        },
        switchScreen(value) {
            this.screen = value 
        },
        getUsers() {
            this.axios.get('api/users').then(response => {
                this.$emit('update:list_data', response.data.data)
            })
        }        
    }
}
</script>