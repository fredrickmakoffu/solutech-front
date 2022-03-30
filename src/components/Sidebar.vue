<template>
    <div id="sidebar-wrapper">
        <div class="col-12 mt-4 mb-4 brand d-flex">
            <h6 class="float-left abbreviation bg-danger bg-gradient">
                S
            </h6>
            <span class="wide float-right mt-1 ms-3">
                <a href="<?php echo base_url(); ?>home">
                    <h6 class="fw-bold text-dark mb-1">Solutech</h6>
                </a>
                
                <small class="text-muted">All your essentials, here</small>
            </span>

            <span class="close mt-2" v-on:click="close()">
                <font-awesome-icon class="icon float-right" :icon="['fa', 'times']" /> 
            </span>
        </div>

        <div class="list-nav list-group list-group-flush">
            <li :class="['list-group-item', {'active': page == 'Users'}]" v-on:click="expand($event.currentTarget)">
                <a class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'users']" /> 
                        <span class="list-name"> Users </span>  
                    </span>

                    <font-awesome-icon class="icon me-0" :icon="['fa', 'caret-down']" /> 
                </a> 

                <ul class="list-nav-child list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link :to="'/'" >
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Manage Users
                        </router-link>
                    </li>
                </ul>
            </li>

            <li :class="['list-group-item', {'active': page == 'Items'}]">
                <router-link :to="'/items'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'box']" /> 
                        <span class="list-name"> Manage Stock </span>  
                    </span>
                </router-link>
            </li>

            <li :class="['list-group-item', {'active': page == 'Orders'}]">
                <router-link :to="'/orders'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'truck-moving']" /> 
                        <span class="list-name"> Manage Orders </span>  
                    </span>
                </router-link>
            </li>

            <li :class="['list-group-item', {'active': page == 'Vehicles'}]">
                <router-link :to="'/vehicles'" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'car']" /> 
                        <span class="list-name"> Manage Vehicles  </span>  
                    </span>
                </router-link>
            </li>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_sidebar.scss';
</style>

<script> 
export default {
    name: 'SideBar',
    props: ['page'],
    methods: {
        expand(event) {
            document.querySelectorAll('.list-nav > .list-group-item').forEach(list => { 
                if(list.querySelector('.list-name').textContent === event.querySelector('.list-name').textContent) {
                    if(list.querySelector('.list-nav-child').style.height === '0px' || list.querySelector('.list-nav-child').style.height === '') {
                        list.querySelector('.list-nav-child').style.opacity = '1'
                        list.querySelector('.list-nav-child').style.visibility = 'visible'
                        list.querySelector('.list-nav-child').style.height = 'auto'

                        if(list.querySelector('.list-nav-child').parentElement.className.includes('active')) {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.add('expand-active-list-item');
                        } else {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.add('expand-list-item');
                        }
                    } else {
                        list.querySelector('.list-nav-child').style.height = '0px'
                        list.querySelector('.list-nav-child').style.visibility = 'hidden'
                        list.querySelector('.list-nav-child').style.opacity = '0'

                        if(list.querySelector('.list-nav-child').parentElement.className.includes('active')) {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.remove('expand-active-list-item');
                        } else {
                            list.querySelector('.list-nav-child').parentElement.querySelector('.list-group-item a.d-flex').classList.remove('expand-list-item');
                        }
                    }
                }
            });
        },

        close() {
            document.querySelector('#sidebar-wrapper').classList.remove('toggled');
            document.querySelector('.backdrop').classList.remove('on');
        }
    }
}
</script>