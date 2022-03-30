<template>
    <div id="sidebar-wrapper">
        <div class="col-12 mt-4 mb-2 brand d-flex">
            <h6 class="float-left mr-2 abbreviation">
                <img :src="require('../assets/img/kipekee-k.png')" alt="">
            </h6>
            <span class="wide float-right mt-1" style="margin-left: 20px">
                <h6 class="fw-bold">
                    <a href="<?php echo base_url(); ?>home">
                        Kipekee Properties
                    </a>
                </h6>
                
                <p class="text-muted" v-if=" !name">Your essentials</p>
                <p class="text-muted" v-if="name">Hello, {{ name.split(' ')[0] }}!</p>
            </span>

            <span class="close mt-2" v-on:click="close()">
                <font-awesome-icon class="icon float-right" :icon="['fa', 'times']" /> 
            </span>
        </div>

        <div class="col-sm-12 text-center mb-2">
            <font-awesome-icon class="icon" :icon="['fa', 'ellipsis-h']" /> 
        </div>

        <div class="list-nav list-group list-group-flush">
            <li v-for="({title, link, icon, if_children, children, modal, index}) in sidebar_data" :key="index" :class="['list-group-item', {'active': page == title}]">
                <router-link v-if="!modal && !if_children" :to="'/' + link" class="d-flex">
                    <span>
                        <font-awesome-icon class="icon float-right" :icon="['fa', icon]" /> 
                        <span class="list-name"> {{ title }} </span>  
                    </span>
                </router-link> 

                <a v-if="modal && !if_children" class="dropdown-item" data-bs-toggle="modal" :data-bs-target="'#' + link">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', 'user']" /> 
                        <span class="list-name"> {{ title }}  </span>  
                    </span>
                </a>

                <a v-if="if_children" class="d-flex" @click="expand($event.currentTarget)">
                    <span>
                        <font-awesome-icon class="icon" :icon="['fa', icon]" /> 
                        <span class="list-name"> {{ title }} </span>  
                    </span>

                    <font-awesome-icon class="icon me-0" :icon="['fa', 'caret-down']" /> 
                </a>

                <ul v-if="if_children" class="list-nav-child list-group list-group-flush">
                    <li v-for="({child_title, child_link, child_icon, child_modal, child_index}) in children" :key="child_index" class="list-group-item">
                        <router-link v-if="!child_modal" :to="'/' + child_link" >
                            <font-awesome-icon class="icon" :icon="['fa', child_icon]" />  &nbsp; {{ child_title }}
                        </router-link>

                        <a v-if="child_modal" class="dropdown-item" data-bs-toggle="modal" :data-bs-target="'#' + child_link">
                            <font-awesome-icon class="icon" :icon="['fa', child_icon]" />  &nbsp; {{ child_title }}
                        </a>
                    </li>
                </ul>

            </li>
        </div>        
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/layout/_sidebar.scss';
</style>

<script> 
export default {
    name: 'AutoSideBar',
    props: ['page', 'sidebar_data', 'name'],
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