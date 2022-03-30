<template>
    <section-title v-if="title.status == true" :title=title.title :actions=title.actions></section-title>
    
    <div class="container">
        <div class="row">
            <div class="col-12">
                <status v-model:status_data=status_data></status>
            </div>
        </div>
    </div>

    <div id="tables" class="data-lists row">
        <div class="col-md-12">
            <small class="text-muted float-end fw-bold">{{ totals }} records showing</small>
            
            <table id="table" class="table table-striped mt-4">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th v-for="(header, index) in headers" :key="index" scope="col">
                            <span class="text-capitalize">{{ header }}</span>
                        </th>
                        <th v-if="all_screens[screen-1].actions">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td v-for="(header, index) in headers" :key="index">{{
                            item[header] }}</td>

                        <td class="dropdown" v-if="all_screens[screen-1].actions">
                            <font-awesome-icon :icon="['fas', 'ellipsis-h']" class="dropdown-toggle" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false"></font-awesome-icon>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
                                <li v-for="({name, action_url, type}, index) in all_screens[screen-1].actions" :key="index">
                                    <a class="dropdown-item" v-if="type == 'api'" @click="autoAPI(action_url, item['id'], action_url.message, $event.currentTarget, 'list')" style="cursor: pointer">{{ name }}</a>

                                    <a class="dropdown-item" v-if="type == 'modal'" style="cursor: pointer" @click="setListData(item, action_url)">{{ name }}</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div id="cards" class="data-lists row mb-3">
        <div class="col-md-12">
            <small class="text-muted fw-bold">+{{ totals }} total</small>
            <small class="text-muted float-end fw-bold">{{ totals }} records found.</small>
        </div>

        <div class="col-md-12 mt-3" v-for="(item, index) in data" :key="index">
            <div class="card mb-2 border-0">
                <div class="card-body pb-0">
                    <p class="text-dark fw-bold">{{ index + 1 }}. </p>
                    <p class="text-dark mb-3" v-for="(header, index) in headers" :key="index"> <span class="fw-bold text-uppercase">{{ header }}: </span> {{ item[header] }}</p>
                </div>
                <div class="card-footer border-0 bg-white">
                    <span v-for="({name, action_url, type}, index) in all_screens[screen-1].actions" :key="index" >
                        <button class="btn button default btn-sm mt-1" v-if="type == 'modal'" @click="setListData(item, action_url)">
                            <span class="ms-2 me-2">{{ name }}</span>
                        </button>  

                        <button class="btn btn-secondary button btn-sm mt-1" v-if="type =='api'" @click="autoAPI(action_url, item['id'], action_url.message, $event.currentTarget, 'cards')"> 
                            <span class="ms-2 me-2">{{ name }}</span>

                            <font-awesome-icon class="ms-2 icon-loading d-none" :icon="['fas', 'spinner']"></font-awesome-icon>
                            
                            <font-awesome-icon class="ms-2 icon-success d-none" :icon="['fas', 'check-circle']"></font-awesome-icon>

                            <font-awesome-icon class="ms-2 icon-failure d-none" :icon="['fas', 'times-circle']"></font-awesome-icon>
                        </button>         
                    </span>
                </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>

import SectionTitle from'../components/SectionTitle';    
import Status from '../components/Status';
import {Modal} from 'bootstrap'
import statusButtons from '../mixins/statusButtons';

export default {
    name: 'AutoList',
    mixins: [statusButtons],
    props: {
        title: {
            type: Object,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        all_screens: {
            required: true,
            type: Object
        },
        screen: {
            required: true,
            type: Number
        },
        list_data: {
            required: true,
            type: Array
        }
    },
    components: {
        SectionTitle,    
        Status
    },
    mounted() {
        this.getDatabyPage()
    },
    data (){
        return {
            data: [],
            totals: 0,
            headers: [],
            status_data: {
                "success": false,
                "success_message": null,
                "error": false,
                "error_message": null,
                "loading": false
            },
            modalElem: null,
        }
    },
    watch: {
        url: function() {
            this.getDatabyPage()
            this.hidePrevious = true
            this.hideNext = false
            this.page = 0
            this.filterUrl()
        },
        list_data: function() {
            this.data = this.list_data
        }
    },
    methods: {
        getDatabyPage() {
            this.axios.get(this.url).then((response) => {
                this.data = response.data.data
                this.$emit('update:list_data', response.data.data)

                this.headers = response.data.headers
                this.totals = response.data.totals
                document.querySelector('.data-lists').scrollIntoView({behavior: "smooth"})
            }).catch((error) => {
                this.error = error
                document.querySelector('.data-lists').scrollIntoView({behavior: "smooth"})
            })
        },
        setListData(data, action_url) {
            this.$store.dispatch("getModalList", data)
            this.modalElem = new Modal(document.getElementById(action_url))
            this.modalElem.show()
        },
        autoAPI(url, id, message, event, display_type) {
            this.status_data.loading = true

            if(display_type == 'cards') {
                this.loadingButton(event)
            }

            this.axios[url.type](url.url + id).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = message.success

                if(display_type == 'cards') {
                    this.successButton(event)
                    setTimeout(() => (this.defaultButton(event, 'success')), 2000)
                }

                setTimeout(() => (this.status_data.success = false), 2000)
                this.getDatabyPage() 
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = message.error
                
                if(display_type == 'cards') {
                    this.errorButton(event)
                }

                console.log(error);
            })
        },    
    }
}
</script>