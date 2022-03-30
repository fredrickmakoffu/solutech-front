<template>
    <div id="wrapper" class="bg-white pt-4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-8 offset-xl-2 col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                    
                    <div class="d-flex">
                        <div class="text-left p-4 pb-2">
                            <h3 class="text-uppercase text-primary fw-bold mb-1 mt-2" style="letter-spacing: 1px">Register</h3>                       
                        </div>
                    </div>

                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <status v-model:status_data=status_data></status>
                            </div>
                        </div>
                    </div>

                    <form id="form" action="#" @submit.prevent="handleSubmit()">
                        <div class="border-bottom-0 p-4 pt-2">
                            <div class="form-row">
                                <label class="mb-2 fw-bold" for="name">Name</label>
                                <div class="input-group">
                                    <span class="input-group-text border-right-0">
                                        <font-awesome-icon id="eye" :icon="['fa', 'user']" />
                                    </span>

                                    <input id="name" type="text" class="form-control no-border" v-model="data.name" placeholder="Enter your Names" required> 
                                </div>
                                <small v-if="errors.name" class="text-danger">
                                    <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>
                                    {{ errors.name }}
                                </small>
                            </div>
                            
                            
                            <div class="form-row mt-4">
                                <label class="mb-2 fw-bold" for="email">Email</label>
                                <div class="input-group">
                                    <span class="input-group-text border-right-0" @click="seePassword()">
                                        <font-awesome-icon id="eye" :icon="['fa', 'envelope']" />
                                    </span>
                                    
                                    <input id="email" type="email" class="form-control no-border" v-model="data.email" placeholder="Enter your Email" required>
                                </div>

                                <small v-if="errors.email" class="text-danger">
                                    <font-awesome-icon class="me-2" :icon="['fas', 'info-circle']"></font-awesome-icon>
                                    {{ errors.email[0] }}
                                </small>
                            </div>                              

                            <div class="row mt-4" id="password-row">
                                <label class="mb-2 fw-bold" for="password">Password</label>

                                <div class="input-group">
                                    <span class="input-group-text" >
                                        <font-awesome-icon id="lock" :icon="['fa', 'lock']" />
                                    </span>

                                    <input id="password" type="password" class="form-control" v-model="data.password" placeholder="Create Password" autocomplete required>
                                    
                                    <span class="input-group-text pe-4" @click="seePassword('password', 'password')">
                                        <font-awesome-icon id="eye" :icon="['fa', eye.password]" />
                                    </span>
                                </div>

                                <small v-if="errors.password" class="text-danger">
                                    <font-awesome-icon class="me-2" :icon="['fas', 'info-circle']"></font-awesome-icon>
                                    {{ errors.password[0] }}
                                </small>
                            </div>

                            <div class="row mt-4" id="cpassword-row">
                                <label class="mb-2 fw-bold" for="cpassword">Confirm Password</label>
                                <div class="input-group">
                                    <span class="input-group-text" >
                                        <font-awesome-icon id="lock" :icon="['fa', 'lock']" />
                                    </span>

                                    <input id="cpassword" type="password" class="form-control" v-model="data.cpassword" placeholder="Confirm Password" autocomplete required>
                                    
                                    <span class="input-group-text pe-4" @click="seePassword('cpassword', 'cpassword')">
                                        <font-awesome-icon id="eye" :icon="['fa', eye.cpassword]" />
                                    </span>
                                </div>
                            </div>

                            <div class="form-row mt-4">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required>
                                <label class="form-check-label ms-2" for="flexCheckDefault">
                                    I have read and accepted the <a class="text-primary text-decoration-none" href="#" target="_blank">Terms and Conditions</a>
                                </label>
                            </div>

                            <div class="row" id="login">
                                <div class="col">
                                    <button class="btn bg-primary text-white  btn-sm mt-4 w-100 text-uppercase fw-bold pt-2 pb-2" type="submit">
                                        <span style="letter-spacing: 2px">Register</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fa', 'unlock']" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <p class="text-center pt-4">Have an account? <router-link :to="'/login'" class="text-primary text-decoration-none">Login!</router-link></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import '../assets/scss/base/_base.scss';
    @import '../assets/scss/base/_fonts.scss';
    @import '../assets/scss/helpers/breakpoints.scss';

    .card {
        box-shadow: 0 4px 8px rgb(0 0 0 / 3%)
    }
    
    .input-group {
        .input-group-text {
            background: #eee;
        }

        .form-control {
            background: #eee;
        }
    }    
    
</style>

<script>
    import Status from '../components/Status';

    export default {
        name: 'Login',
        components: {
            Status,
        },
        data() {
            return {
                data: {
                    name: null,
                    email: null,
                    phone_number: null,
                    password: null,
                    cpassword: null,
                },
                status_data: {
                    "success": false,
                    "success_message": null,
                    "error": false,
                    "error_message": null,
                },
                errors: [],
                eye: {
                    'password': 'eye',
                    'cpassword': 'eye'  
                },
                loading: false
            }
        },
        mounted() {
            this.ifLoggedIn()
        },        
        methods: {
            ifLoggedIn() {
                this.loading = true

                if(localStorage.getItem('user')) {
                    this.$router.push({name: 'Users'})
                } else {
                    this.loading = false
                }
            },            
            handleSubmit() {
                this.status_data.loading = true
                let validatePassword = this.validatePassword()

                if(validatePassword == true) {
                    this.axios.post('api/register', this.data).then(() => {
                        this.status_data.loading = false
                        this.status_data.success = true
                        this.status_data.error = false
                        this.status_data.success_message = 'New Account Registered!'

                        setTimeout(() => {
                            this.$router.push({name: 'Login'});
                        }, 2000);
                    }).catch((errors) => {
                            this.status_data.loading = false
                            this.status_data.success = false
                            this.status_data.error = true
                            this.status_data.error_message = 'Errors found!'
                            this.errors = errors.data
                    })   
                } else {
                    this.status_data.loading = false
                    this.status_data.success = false
                    this.status_data.error = true
                    this.status_data.error_message = validatePassword.message                 
                }
                
            }, 
            validatePassword() {
                if(this.data.password == this.data.cpassword) {
                    if(this.data.password.length > 7) {
                        return true
                    } else {
                        return {
                            status: false,
                            message: "Password length is too short."
                        }
                    }
                } else {
                    return {
                        status: false,
                        message: "Your passwords do not match."
                    }                    
                }
            },
            seePassword(id, element) {
                if(document.querySelector('#' + id).type == 'password') {
                    document.querySelector('#' + id).type = 'text'
                    this.eye[element] = 'eye-slash'
                } else {
                    document.querySelector('#' + id).type = 'password'
                    this.eye[element] = 'eye-slash'
                }
            },
            hideAlert() {
                if(this.success == true) {
                    this.success = false
                } else if(this.error == true) {
                    this.error = false
                }
            }
        }
    }
</script>