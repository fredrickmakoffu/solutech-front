<template>
    <div id="wrapper" class="bg-white pt-4" v-if="!loading">        
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-8 offset-xl-2 col-lg-8 col-md-8 offset-lg-2 offset-md-2">

                    <div class="d-flex">
                        <div class="text-left p-4 pb-2 pt-0">
                            <h3 class="text-uppercase text-primary fw-bold mb-1 mt-2" style="letter-spacing: 1px">Login</h3>                        
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
                                <label class="mb-2 fw-bold" for="email">Email</label>
                                <div class="input-group">
                                    <span class="input-group-text border-right-0" @click="seePassword()">
                                        <font-awesome-icon id="eye" :icon="['fa', 'envelope']" />
                                    </span>

                                    <input id="email" type="email" class="form-control no-border" v-model="data.email" placeholder="Enter your Email" required>
                                </div>
                            </div>

                            <div class="row mt-4" id="password-row">
                                <label class="mb-2 fw-bold" for="password">Password</label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <font-awesome-icon id="lock" :icon="['fa', 'lock']" />
                                    </span>

                                    <input id="password" type="password" class="form-control" v-model="data.password" placeholder="Password" autocomplete="new-password" required>

                                    <span class="input-group-text pe-4 ps-4" style="cursor: pointer" @click="seePassword()">
                                        <font-awesome-icon id="eye" :icon="['fa', eye]" />
                                    </span>
                                </div>
                                <div class="d-flex">
                                    <small v-if="errors.password" class="text-burgundy">{{ errors.password }}</small>
                                    <small class="text-muted ms-auto">
                                        <router-link :to="'/forgot-password'" class="text-primary fw-bold text-decoration-none float-end mt-2">Forgot Password</router-link>
                                    </small>
                                </div>
                            </div>

                            <div class="row" id="login">
                                <div class="col">
                                    <button class="btn bg-primary text-white btn-sm mt-4 w-100 text-uppercase fw-bold pt-2 pb-2" type="submit">
                                        <span style="letter-spacing: 2px">Login</span> <font-awesome-icon class="icon ms-1 me-1" :icon="['fa', 'unlock']" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>  
            </div>
        </div>

        <div class="container-fluid">
            <p class="text-center pt-4">Don't have an account? <router-link :to="'/register'" class="text-primary text-decoration-none">Create One</router-link></p>
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

    .gradient-primary {
      background: linear-gradient(126.49deg,#ff9200,#d53690);
    }     
    
    .svg-mobile {
        display: none;

        @include media('<=Lphone') {
            display: block;
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
                    email: '',
                    password: '',
                },
                status_data: {
                    "success": false,
                    "success_message": 'You\'re in! Login is Successful!',
                    "error": false,
                    "error_message": 'There are some input errors.',
                },
                errors: [],
                eye: 'eye',
                loading: null
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
                
                // grab token and set it
                this.axios.post('api/sanctum/token', {
                    email: this.data.email,
                    password: this.data.password,
                }).then((response) => {
                    this.status_data.loading = false
                    this.status_data.success = true
                    this.status_data.success_message = 'Success!'
                    this.status_data.error = false

                    // reset user token details
                    localStorage.setItem('user', JSON.stringify({
                        'token': response.data.data.token, 
                        'expiry': response.data.data.expiry
                    }))   

                    // redirect to home
                    setTimeout(() => {
                        this.$router.push({name: 'Users'});
                    }, 2000); 

                }).catch(errors => {
                    this.status_data.loading = false
                    this.status_data.success = false
                    this.status_data.error = true
                    this.status_data.error_message = errors.message
                })
            },
            seePassword() {
                if(document.querySelector('#password').type == 'password') {
                    document.querySelector('#password').type = 'text'
                    this.eye = 'eye-slash'
                } else {
                    document.querySelector('#password').type = 'password'
                    this.eye = 'eye'
                }
            },
            getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }
        }
    }
</script>