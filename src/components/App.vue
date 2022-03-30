<template>
    <div id="wrapper">
        <sidebar></sidebar>
        <div class="body">

            <div class="backdrop" v-on:click="close()"></div>
             
            <navbar></navbar>
            
            <content style="padding-top: 2rem"></content>
            
            <!-- <main-footer></main-footer> -->
        </div>
    </div>
</template>

<style lang="scss">
    @import '../scss/base/_base.scss';
    @import '../scss/base/_fonts.scss';
</style>

<script>
import Vue from 'vue'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Content from './Content'
import MainFooter from './Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegramPlane, faGalacticRepublic } from '@fortawesome/free-brands-svg-icons'

import { faBell, faQuestion, faCogs, faAngleRight, faQrcode, faStepBackward, faStepForward, faAngleLeft, faBars, faEllipsisH, faCaretDown, faCaretLeft, faCaretRight, faCheckCircle, faTimesCircle, faTimes, faStar, faEllipsisV, faSearch, faEnvelope, faDollarSign, faHeart, faCog, faHome, faPlus, faHouseUser, faPowerOff, faUsers, faSignOutAlt, faUser, faFile, faAngleDown, faPrint } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faHeart, faQuestion, faTelegramPlane, faQrcode, faPrint, faStepBackward, faStepForward, faBars, faAngleLeft, faTimesCircle, faCaretDown, faCaretLeft, faCaretRight, faAngleRight, faCheckCircle, faTimes, faStar, faSearch, faEllipsisV, faGalacticRepublic, faDollarSign, faCog, faEnvelope, faPlus, faHome, faBell, faPowerOff, faUsers, faEllipsisH, faFile, faHouseUser, faCogs, faSignOutAlt, faAngleDown)

export default {
    components: {
        Navbar,
        Sidebar,
        Content,
        MainFooter
    },
    methods: {
        close() {
            document.querySelector('#sidebar-wrapper').classList.remove('toggled');
            document.querySelector('.backdrop').classList.remove('on');
        }
    }
}

</script>