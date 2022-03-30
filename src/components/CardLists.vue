<template>
    <section-title v-if="title"></section-title>

    <div class="row">
        <div class="col-md-12">
            <div class="input-group mb-3">
                <form action="#" @submit.prevent="fetchResults()" style="width: inherit">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control search" v-model="search" placeholder="Search through system." aria-label="search" aria-describedby="search-submit">

                        <span class="input-group-text search-icon" id="search-submit">
                            <button class="btn btn-transparent" type="submit">
                                <font-awesome-icon class="icon" :icon="['fa', 'search']" /> 
                            </button>
                        </span>
                    </div>

                </form>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-md-12">
            <small class="text-muted me-3 fw-bold">+{{ totals }} total</small>
            <small class="text-muted float-end me-3 fw-bold">{{ totals }} records found.</small>
            
            <table id="table" class="table table-striped mt-2">
                <thead class="table-dark">
                    <tr>
                        <th v-for="(header, index) in headers" :key="index" scope="col">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td v-for="(column, index) in columns" :key="index">{{
                            item[column] }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="card" v-for="(header, index) in headers" :key="index" >
                <div class="card-body">
                    <div class="col-6" v-for="(item, index) in data" :key="index">
                        {{ item[column] }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row navigation">
        <div class="col-12 d-flex">
            <div class="mx-auto">
                <button class="btn default btn-sm me-2" @click="start()" :disabled="hidePrevious">
                    <span class="mx-1">Start <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-backward']" /></span>
                </button>

                <button class="btn default btn-sm me-2" id="previous" @click='previous()' :disabled="hidePrevious">
                    <font-awesome-icon class="icon me-2" :icon="['fa', 'caret-left']" /> Previous
                </button>

                <span>
                    ||
                </span>

                <button class="btn default btn-sm ms-2 me-2" id="next" @click='next()' :disabled="hideNext">
                    Next
                    <font-awesome-icon class="icon ms-2" :icon="['fa', 'caret-right']" />
                </button>

                <button class="btn default btn-sm me-2" @click="end()" :disabled="hideNext">
                    <span class="mx-1">End <font-awesome-icon class="icon ms-2" :icon="['fa', 'step-forward']" /></span>
                </button>
            </div>
        </div>
    </div>

    <form-component></form-component>

</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
import FormComponent from '../components/Form';
import SectionTitle from'../components/SectionTitle';

export default {
    name: 'Lists',
    props: {
        title: {
            type: Boolean,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        headers: {
            type: Object,
            required: true
        },
        columns: {
            type: Object,
            required: true
        }
    },
    components: {
        FormComponent,
        SectionTitle
    },
    mounted() {
        this.getDatabyPage()
    },
    data (){
        return {
            error: [],
            page: 1,
            limit: 25,
            totals: '',
            data: [],
            current_limit: 25,
            hidePrevious: true,
            hideNext: false,
            max: 0,
            search: '',
            awaitingSearch: false
        }
    },
    methods: {
        getDatabyPage() {
            this.axios.get(this.url).then((response) => {
                this.data = response.data
                this.totals = this.data.length
            }).catch(error => {
                this.error = error.response.data
                console.log(this.error);
            })
        },
        next() {
            // increment page + limit
            this.page++
            this.current_limit = this.current_limit + this.limit

            // if current limit > limit, terminate
            if(this.hidePrevious == true && this.current_limit > this.limit) {
                this.hidePrevious = false
            }

            // if max - current limit is less than limit, hide next
            if((this.max - this.current_limit) <= this.limit){
                this.hideNext = true
                this.hidePrevious = false
            }

            // get data to populate lists
            this.getDatabyPage(this.page, this.limit, '')

            document.getElementById("table").scrollIntoView(true)
        },

        previous() {
            // increment page + limit
            this.page--
            this.current_limit = this.current_limit - this.limit
            
            if(this.hideNext == true && ((this.max - this.current_limit) > this.limit)) {
                this.hideNext = false
            }

            // if current limit <= limit, terminate
            if(this.current_limit <= this.limit) {
                this.hidePrevious = true
                this.hideNext = false
            }

            // get data to populate lists
            this.getDatabyPage(this.page, this.limit)
            document.getElementById("table").scrollIntoView(true)
        },
        start() {
            this.page = 1
            this.current_limit = this.limit
            
            this.hideNext = false
            this.hidePrevious = true

            this.getDatabyPage(this.page, this.limit, '')
        },

        end() {
            this.page = this.max/this.limit
            this.current_limit = this.max - this.limit

            this.hideNext = true
            this.hidePrevious = false

            this.getDatabyPage(this.page, this.limit,)
        },
        
        fetchResults(){
            if(this.search !== '') {
                this.getDatabyPage(this.page, this.limit, this.search)
            } else {
                 this.getDatabyPage(1, 25, '')
            }
        }
    }
}
</script>