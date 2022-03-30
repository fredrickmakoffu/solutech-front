<template>      
    <div id="sidebar-wrapper" class="position-relative">
        <div class="col-12 mt-2 mb-4 brand d-flex">
            <!-- <h6 class="float-left mr-2 abbreviation bg-danger">P</h6> -->
            <span class="wide float-right mt-1" style="margin-left: 20px">
                <a href="<?php echo base_url(); ?>home"> Guide Menu </a>
                <div class="pt-1 bg-dark-grey mt-1 w-50 rounded"></div>
            </span>

            <span class="close mt-2" v-on:click="close()">
                <font-awesome-icon class="icon float-right" :icon="['fa', 'times']" /> 
            </span>
        </div>

        <div class="list-nav list-group list-group-flush">
            <li :class="['list-group-item', {'active': screen == 0}]">
                <a class="d-flex" @click="toScreen(0)">
                    <span>
                        <font-awesome-icon class="icon float-right" :icon="['fa', 'home']" /> 
                        <span class="list-name"> Introduction </span>  
                    </span>
                </a> 
            </li>

            <li class="list-group-item" v-on:click="expand($event.currentTarget)">
                <a class="d-flex">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'boxes']" /> 
                        <span class="list-name"> Components </span>  
                    </span>

                    <font-awesome-icon class="icon me-0" :icon="['fa', 'caret-down']" /> 
                </a> 

                <ul class="list-nav-child list-group list-group-flush">
                    <li :class="['list-group-item', { 'item-active': screen == 2}]">
                        <a @click="toScreen(2)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Forms
                        </a>
                    </li>

                    <li :class="['list-group-item', { 'item-active': screen == 3}]">
                        <a @click="toScreen(3)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Breadcrumbs
                        </a>
                    </li>

                    <li :class="['list-group-item', { 'item-active': screen == 4}]">
                        <a @click="toScreen(4)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Status
                        </a>
                    </li> 

                    <li :class="['list-group-item', { 'item-active': screen == 5}]">
                        <a @click="toScreen(5)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Sidebar
                        </a>
                    </li>   

                    <li :class="['list-group-item', { 'item-active': screen == 6}]">
                        <a @click="toScreen(6)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Navbar
                        </a>
                    </li>     

                    <li :class="['list-group-item', { 'item-active': screen == 7}]">
                        <a @click="toScreen(7)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Headers
                        </a>
                    </li>

                    <li :class="['list-group-item', { 'item-active': screen == 8}]">
                        <a @click="toScreen(8)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Stats
                        </a>
                    </li>

                    <li :class="['list-group-item', { 'item-active': screen == 9}]">
                        <a @click="toScreen(9)">
                            <font-awesome-icon class="icon" :icon="['fa', 'angle-right']" />  &nbsp; Lists
                        </a>
                    </li>
                </ul>
            </li>

            <li :class="['list-group-item', {'active': screen == 10}]">
                <a class="d-flex" @click="toScreen(10)">
                    <span>
                        <font-awesome-icon class="icon float-right" :icon="['fa', 'project-diagram']" /> 
                        <span class="list-name"> Dependencies </span>  
                    </span>
                </a> 
            </li>            
        </div>
    </div>             
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/sidebar.scss';
</style>

<script>
export default {
    name: 'SmallSidebar',
    props: ['screen'],
    data() {
        return {
            component_screens: [2, 3, 4, 5, 6, 7, 8, 9]
        }
    },
    methods: {
        toScreen(value) {
            this.$emit('update:screen', value)
        },
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
