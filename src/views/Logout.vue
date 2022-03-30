
<script>
    export default {
        name: 'Logout',
        mounted() {
            this.logOut()
        },
        methods: {
            logOut() {
                localStorage.removeItem('user')
                this.$router.push({name: 'Home'});            
            }
        }
    }
</script>