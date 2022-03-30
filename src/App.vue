<template>
    <router-view></router-view>
</template>

<style lang="scss">
    @import './assets/scss/base/_base.scss';
    @import './assets/scss/base/_fonts.scss';
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'

import { faAngleDown, faAngleLeft, faAngleRight, faBan, faBars, faBox, faCar, faCaretDown, faCheckCircle, faCircle, faCrown, faEllipsisH, faEnvelope, faEye, faEyeSlash, faInfoCircle, faLock, faSignOutAlt, faSpinner, faTimes, faTimesCircle, faTruckMoving, faUnlock, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faCrown, faAngleRight, faAngleLeft, faUsers, faUser, faTruckMoving, faCar, faBox, faEllipsisH, faTimesCircle, faCheckCircle, faAngleDown, faBars, faCaretDown, faTimes, faCircle, faBan, faSpinner, faEnvelope, faLock, faEye, faUnlock, faInfoCircle, faSignOutAlt, faEyeSlash)

export default {
    methods: {
        close() {
            document.querySelector('#sidebar-wrapper').classList.remove('toggled');
            document.querySelector('.backdrop').classList.remove('on');
        }
    }
}

</script>