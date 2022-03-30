<template>
    <!-- Error Message -->
    <transition name="fade">
        <div v-if="status_data.success == true" class="alert alert-dismissible fixed alert-success fade show" role="alert">
            <h6 class="text-start fw-bold text-uppercase">  <font-awesome-icon class="icon me-2" :icon="['fa', 'info-circle']" /> Success! </h6>

            <p class="mb-0 pt-2">{{ status_data.success_message }}</p>
            <button type="button" class="btn-close" aria-label="Close" @click="hideAlert()"></button>
        </div>
    </transition>

    <transition name="fade">
        <div v-if="status_data.error == true" class="alert fixed alert-dismissible alert-danger fade show" role="alert">
            <h6 class="text-start fw-bold text-uppercase">  <font-awesome-icon class="icon me-2" :icon="['fa', 'info-circle']" /> Error! </h6>

            <p class="mb-0 pt-2"> {{ status_data.error_message }}</p>
            <button type="button" class="btn-close" aria-label="Close" @click="hideAlert()"></button>
        </div>
    </transition>
    
    <transition name="fade">
        <div class="d-flex" v-if="status_data.loading">                      
            <h3 class="spinner-border spinner-border-sm fw-bold text-warning mx-auto mt-2" role="status">
                <span class="sr-only">Loading...</span>
            </h3> 
        </div> 
    </transition>
</template>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
</style>

<script>
export default {
    name: 'Status',
    props: {
        status_data: {
            type: Object,
            required: true
        },
    },
    methods: {
        hideAlert() {
            if(this.status_data.success == true) {
                let status_data =  {
                    "success": false,
                    "success_message": this.status_data.success_message,
                    "error": this.status_data.error,
                    "error_message":this.status_data.error_message,
                    "loading": false
                }

                this.$emit('update:status_data', status_data);

            } else if(this.status_data.error == true) {
                let status_data =  {
                    "success": this.status_data.success,
                    "success_message": this.status_data.success_message,
                    "error": false,
                    "error_message": this.status_data.error_message,
                    "loading": false
                }

                this.$emit('update:status_data', status_data);
            }
        }
    }
}
</script>