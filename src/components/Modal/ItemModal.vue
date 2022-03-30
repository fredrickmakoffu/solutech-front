<template>
    <!-- Modal -->
    <div class="modal fade" id="item" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header pb-0">
                    <span class="d-block">
                        <h5 class="content-title-min">Item Details</h5>
                        <p class="text-muted">Add new Item</p>
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
                                        <input id="first_name" type="text" class="form-control" v-model="item.name" placeholder="Enter your item name" required> 
                                    </div>
                                </div>
                                
                                <div class="form-row mt-4">
                                    <label for="price" class="fw-bold mb-2">Price</label>
                                    <div class="input-group">
                                        <input id="price" type="number" class="form-control no-border" v-model="item.price" placeholder="Enter item's Price." required>
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
    name: 'ItemModal',
    props: ['list_data'],
    components: {
        Status
    },
    data() {
        return {
            item: {},
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
            this.axios.post('api/items/', this.item).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = 'Success!'

                setTimeout(() => {
                    this.status_data.success = false
                }, 1500);

                this.getItems()          
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = error.message
                
                console.log(error.response);
            })                      
        },
        getItems() {
            this.axios.get('api/items').then(response => {
                this.$emit('update:list_data', response.data.data)
            })
        }
    }
}
</script>