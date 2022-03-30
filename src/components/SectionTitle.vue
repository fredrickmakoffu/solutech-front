<template>
    <span class="d-flex">
        <h5 class="content-title" style="margin-top: 45px; margin-bottom: 20px;">{{ title }}</h5>
        <div class="content-buttons" v-if="actions">
            <span v-for="({name, action_url, type}, index) in actions" :key="index" >
                
                <button class="btn button success btn-sm" v-if="type == 'modal'" @click="setListData(data = {}, action_url)">
                    <span class="ms-2 me-2">{{ name }}</span><font-awesome-icon :icon="['fa', 'angle-down']" />&nbsp; 
                </button>  

                <button class="btn button success btn-sm" v-if="type == 'api'" @click="autoAPI(action_url)"> 
                    <span class="ms-2 me-2">{{ name }}</span><font-awesome-icon :icon="['fa', 'angle-down']" />&nbsp; 
                </button> 
                  
            </span>
        </div>
    </span>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_lists.scss';
</style>

<script>
import {Modal} from 'bootstrap'

export default {
    name: "SectionTitle",
    props: {
        title: {
            type: String,
            required: true
        },
        actions: {
            type: Array,
            required: false
        },
        list_data: {
            required: false,
            type: Object
        }
    },
    methods: {
        setListData(data, action_url) {
            this.$store.dispatch("getModalList", data)
            this.modalElem = new Modal(document.getElementById(action_url))
            this.modalElem.show()
        },
        autoAPI(url, message) {
            this.status_data.loading = true

            this.axios[url.type](url.url).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                this.status_data.success_message = message.success

                setTimeout(() => (this.status_data.success = false), 2000)
                this.getDatabyPage() 
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.success = false
                this.status_data.error_message = message.error

                setTimeout(() => (this.status_data.error = false), 2000)   
                console.log(error)
            })
        },        
    }
}
</script>