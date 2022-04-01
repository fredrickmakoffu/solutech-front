export default {
    watch: {
        user: function() {
            this.ifNotLoggedIn()
        }
    },
    computed: {
        user () {
            return this.$store.state.user
        }      
    },    
    mounted() {
        this.$store.dispatch("getUser")
    },  
    methods: {
        ifNotLoggedIn() {
            this.loading = true
        
            if(this.user.name) {
                this.loading = false
            } else {
                localStorage.removeItem('user')
                this.$router.push({name: 'Login'})
            }
        },     
    }
}