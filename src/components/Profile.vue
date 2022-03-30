<template>
    <!-- Modal -->
    <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="formsLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <span class="d-block">
                        <h5 class="content-title-min">Your Account</h5>
                        <p class="text-muted">And the relevant super-powers.</p>
                    </span>
                </div>
                            
                <div class="modal-body">
                    <div class="row">
                        <div class="top-menu mb-3">
                            <ul class="nav">
                                <li class="list-group-item border-0">
                                    <p :class="['mb-0', {'active fw-bold': screen == 1}]" @click="switchScreen(1)">Profile</p>
                                    <div class="bg-primary rounded pt-1" v-if="screen == 1"></div>
                                </li>

                                <li class="list-group-item border-0">
                                    <p :class="['mb-0', {'active fw-bold' : screen == 2}]" @click="switchScreen(2)">Security</p>
                                    <div class="bg-primary rounded pt-1" v-if="screen == 2"></div>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-2 border-end side-menu">
                            <ul class="list-group">
                                <li class="list-group-item border-0">
                                    <p :class="['text-decoration-none', 'mb-0', {'active fw-bold' : screen == 1}]" @click="switchScreen(1)">Profile</p>
                                </li>

                                <li class="list-group-item border-0">
                                    <p :class="['text-decoration-none', 'mb-0', {'active fw-bold' : screen == 2}]" @click="switchScreen(2)">Security</p>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-10 col-sm-12">
                            <span v-if="screen == 1" class="d-block ps-3 pe-3">

                                <status v-model:status_data=status_data></status>
                                
                                <form action="#" @submit.prevent="handleSubmit()">
                                    <div class="form-row">
                                        <label for="first_name" class="fw-bold mb-2">First Name</label>
                                        <div class="input-group">
                                            <input id="first_name" type="text" class="form-control" v-model="data.first_name" placeholder="Enter your First Name" required> 
                                        </div>
                                    </div>

                                    <div class="form-row mt-4">
                                        <label for="first_name" class="fw-bold mb-2">Last Name</label>
                                        <div class="input-group">
                                            <input id="first_name" type="text" class="form-control" v-model="data.last_name" placeholder="Enter your Last Name" required> 
                                        </div>
                                    </div>
                                    
                                    <div class="form-row mt-4">
                                        <label for="first_name" class="fw-bold mb-2">Email</label>
                                        <div class="input-group">
                                            <input id="email" type="email" class="form-control no-border" v-model="data.email" placeholder="Enter your Email" required>
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
                            </span>

                            <span v-if="screen == 2" class="d-block ps-3 pe-3">
                                <div class="form-row">
                                    <label for="old_password" class="fw-bold mb-2">Previous Password</label>
                                    <div class="input-group">
                                        <input id="old_password" type="text" class="form-control" v-model="data.old_password" placeholder="Enter your Old Password" required> 
                                    </div>
                                </div>

                                <div class="form-row mt-4">
                                    <label for="password" class="fw-bold mb-2">New Password</label>
                                    <div class="input-group">
                                        <input id="password" type="password" class="form-control" v-model="data.password" placeholder="Enter your New Password." required> 
                                    </div>
                                </div>
                                
                                <div class="form-row mt-4">
                                    <label for="cpassword" class="fw-bold mb-2">Confirm Password</label>
                                    <div class="input-group">
                                        <input id="cpassword" type="cpassword" class="form-control" v-model="data.cpassword" placeholder="Enter your Email" required>
                                    </div>
                                </div>
                                
                                <div class="d-flex mt-4">
                                    <button type="button" class="btn button btn-sm secondary ms-auto" data-bs-dismiss="modal" @click="switchScreen(1)">
                                        <span class="ms-2 me-2">Cancel</span> <font-awesome-icon :icon="['fa', 'times-circle']" />&nbsp;
                                    </button>
                                    
                                    <button :class="[{'success': status_data.loading == false }, {'bg-dark text-white': status_data.loading == true }, 'btn', 'button', 'btn-sm']" :disabled="status_data.loading == true">
                                        <span class="ms-2 me-2">Change</span> <font-awesome-icon :icon="['fa', 'check-circle']" />&nbsp;
                                    </button>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_form.scss';
    @import '../assets/scss/helpers/_breakpoints.scss';
    
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
import Status from '../components/Status';

export default {
    name: 'Form',
    components: {
        Status
    },
    data() {
        return {
            data: {
                first_name: 'Joseph',
                last_name: 'Kamau',
                email: 'josephkamau@example.com'
            },
            screen: 1,
            status_data: {
                "success": false,
                "success_message": 'Form Submission was successful!',
                "error": false,
                "error_message": 'There are some errors.',
                "loading": false
            },
        }
    },
    methods: {
        handleSubmit() {
            // Simulate successful submit
            
            // 1. Show loading spinner
            this.status_data.loading = true

            // 2. Hide loading spinner after .9 second
            setTimeout(() => (this.status_data.loading = false), 700)
            
            // 3. Show success alert after a second
            setTimeout(() => (this.status_data.success = true), 1400)
            
            // 3. Hide success alert after 5 seconds
            setTimeout(() => (this.status_data.success = false), 4000)
        },
        switchScreen(value) {
            this.screen = value 
        }
    }
}
</script>