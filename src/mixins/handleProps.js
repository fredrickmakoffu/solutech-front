export default {
    methods: {
        submit(data = this.form_data, [child = false, parent = ""], component = "", container = false, page = this.page.toLowerCase()) {
            this.status_data.loading = true
            var post_form_data = []

            Object.entries(data).forEach(element => {
                if(this.prop_data[element[0]] == undefined || this.prop_data[element[0]] != element[1]) {

                    // if element[1] is array, loop against it
                    let type  = typeof element[1]

                    if(type == 'object' && element[0] != 'background_image') {
                        Object.entries(element[1]).forEach(item => {
                            post_form_data.push({
                                value: item[1],
                                prop: item[0],
                                component: component,
                                container: container,
                                page: page,
                                child: child,
                                parent: element[0]
                            })
                        }) 
                    } else {
                        if(child == false) {
                            post_form_data.push({
                                value: element[1],
                                prop: element[0],
                                component: component,
                                container: container,
                                page: page,
                                child: child,
                                parent: ""
                            })
                        } else {
                            post_form_data.push({
                                value: element[1],
                                prop: element[0],
                                component: component,
                                container: container,
                                page: page,
                                child: child,
                                parent: parent
                            })
                        }
                    }
                }
            });
            
            this.axios.post('api/prop', post_form_data).then(() => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true
                
                setTimeout(() => (this.status_data.success = false), 2000)
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.error_message = 'Section data was not successfully updated!' + error
                this.status_data.success = false

                setTimeout(() => (this.status_data.error = false), 2000)
            })
        },
        remove(data = this.form_data, index, component) {
            this.status_data.loading = true
            const post_form_data = []

            Object.entries(data[index]).forEach(element => {
                post_form_data.push({
                    value: element[1],
                    prop: element[0],
                    component: component,
                    container: true,
                    page: this.page.toLowerCase(),
                    child: false,
                    parent: ""
                })
            });

            this.axios.post('api/component-props/delete', post_form_data).then((response) => {
                this.status_data.loading = false
                this.status_data.error = false
                this.status_data.success = true

                setTimeout(() => (this.status_data.success = false), 2000)
                
                console.log(response)
            }).catch((error) => {
                this.status_data.loading = false
                this.status_data.error = true
                this.status_data.error_message = 'Section data was not successfully updated!' + error
                this.status_data.success = false

                setTimeout(() => (this.status_data.error = false), 2000)

                console.log(error)
            })
        },
        changeScreen(value) {
            this.form_screen = value
        },  
        scrollTo(value) {
            if(value[0] == '#') {
                document.getElementById(value.substring(1)).scrollIntoView(true);
            } else {
                window.location.href = value
            }
        }
    }
}