<template>
    <!-- Modal -->
    <div class="modal fade" id="order" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div id="modal-header" class="modal-header pb-0 border-0">
                    <span class="d-block">
                        <h5 class="content-title-min">Order Details</h5>
                        <small class="text-muted">Create an order</small>
                    </span>
                </div>
                            
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <span id="status"></span>
                            <status v-model:status_data=status_data></status>

                            <no-data v-if=" !items.length" :message="'No items found.'"></no-data>

                            <div id="tables" class="row mt-4"> 
                                <div class="col-md-12">
                                    <small class="text-muted float-end me-3 fw-bold mb-2">{{ items.length }} records showing</small>

                                    <table id="table" class="table table-striped mt-2">
                                        <thead class="table-dark">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr v-for="({ name, id }, index) in items" :key="index" @click="addItem(id, $event.currentTarget)">
                                                <th scope="row">{{ index + 1 }} </th>
                                                <td class="d-flex">
                                                    <span>{{ name }}</span>
                                                    <span class="ms-auto me-4 checked d-none">
                                                        <font-awesome-icon class="text-success" :icon="['fa', 'check-circle']"></font-awesome-icon>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div class="col-12">
                            <button class="btn btn-success" @click="createOrder()">
                                Create order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../assets/scss/helpers/_breakpoints.scss';
    @import '../../assets/scss/layout/_lists.scss';

    #tables {
        @include media("<=laptop") {
            display: block;
        }
    }
</style>

<script>
import Status from '../../components/Status';
import NoData from '../../components/NoData';

export default {
    name: 'OrderModal',
    props: ['orders'],
    components: {
        Status,
        NoData
    },
    data() {
        return {
            data: {
                order_items: [],
            },
            status_data: {
                success: false,
                success_message: null, 
                error: false,
                error_message: null,
                loading: false
            },
            items: [],
            item: null
        }
    },
    mounted() {
        this.getItems()
    },
    methods: {
        addItem(id, event) {
            if(event.querySelector('.checked').classList.contains('d-none')) {
                
                this.data.order_items.push({
                    item_id: id
                })

                event.querySelector('.checked').classList.remove('d-none')
            } else {
                let i = 0
                
                this.data.order_items.forEach(element => {
                    if(id == element['item_id']) {
                        this.data.order_items.splice(i, 1) 
                    }

                    i++
                });

                event.querySelector('.checked').classList.add('d-none')
            }
        },
        createOrder() {
            this.axios.post('api/orders/', this.data.order_items).then(() => {
                document.getElementById('status').scrollIntoView({behavior: 'smooth'})

                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = 'Success!'

                setTimeout(() => {
                    this.status_data.success = false
                }, 1500);

                this.getOrders()          
            }).catch((error) => {
                document.getElementById('status').scrollIntoView({behavior: 'smooth'})

                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = error.message
            })                      
        },
        getOrders() {
            this.axios.get('api/orders').then(response => {
                this.$emit('update:orders', response.data.data)
            })
        },
        getItems() {
            this.axios.get('api/items').then(response => {
                this.items = response.data.data
            })
        }
    }
}
</script>