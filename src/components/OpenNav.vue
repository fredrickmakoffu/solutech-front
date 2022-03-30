<template>
    <section id="open-nav" class="bg-dark position-fixed h-100 d-none" style="z-index: 8; overflow-y: auto">
        
        <div class="row mt-2">
            <div class="col-md-12 col-sm-12">
                <button class="btn btn-sm btn-dark close d-flex me-4 mb-4" @click="closeNav()">
                    <font-awesome-icon class="ms-1 mt-auto mb-auto" :icon="['fas', 'times']"></font-awesome-icon> 
                    <span class="ms-2 me-1">Close</span>
                </button>
            </div>
        </div>
        
        <ul class="list-group mt-4">
            <li class="list-group-item bg-transparent border-0 text-white mb-2" v-if="user.name != undefined">
                <router-link :to="'/admin'" class="nav-link text-white">
                    <h1 class="underline-link mb-1">Admin</h1>
                    <small class="text-muted ms-1">Go to your admin page!</small>
                </router-link>
            </li>  

            <li class="list-group-item bg-transparent border-0 text-white mb-2">
                <a class="nav-link text-white" @click="linkTo('team')">
                    <h1 class="underline-link mb-1">The Team</h1>
                    <small class="text-muted ms-1">See who we are</small>
                </a>
            </li>

            <li class="list-group-item bg-transparent border-0 text-white mb-2">
                <a class="nav-link text-white" @click="linkTo('services')">
                    <h1 class="underline-link mb-1">Services</h1>
                    <small class="text-muted ms-1">See what we do</small>
                </a>
            </li>

            <li class="list-group-item bg-transparent border-0 text-white mb-2">
                <a class="nav-link text-white"  @click="linkTo('partners')">
                    <h1 class="underline-link mb-1">Partners</h1>
                    <small class="text-muted ms-1">See who we've worked with</small>
                </a>
            </li>

            <li class="list-group-item bg-transparent border-0 text-white mb-2">
                <a class="nav-link text-white" @click="linkTo('testimonials')">
                    <h1 class="underline-link mb-1">Testimonials</h1>
                    <small class="text-muted ms-1">See what we do</small>
                </a>
            </li> 

            <li class="list-group-item bg-transparent border-0 text-white mb-2">
                <a class="nav-link text-white" @click="linkTo('contacts')">
                    <h1 class="underline-link mb-1">Contact</h1>
                    <small class="text-muted ms-1">Reach out!</small>
                </a>
            </li>          
        </ul>
    </section>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/abstracts/_variables.scss';

    .underline-link {
        transition: all .1s ease-in;
        -webkit-transition: all .1s ease-in;
        -o-transition: all .1s ease-in;
        cursor: pointer;

        &:hover {
            font-weight: 300;
        }

        font-weight: 200;
    }

    .close {
        position: fixed;
        bottom: 0;
        right: 0;
    }
    
</style>

<script>
    export default {
        name: "OpenNav",
        methods: {
            closeNav() {
                document.getElementById('open-nav').classList.add('d-none');
            },
            linkTo(value) {
                this.closeNav()
                document.querySelector('#' + value).scrollIntoView({behavior: 'smooth'});
            }
        },
        computed: {
            user() {
                return this.$store.state.user
            }
        },
        mounted() {
            this.$store.dispatch("getUser")
        }
    
    }
</script>