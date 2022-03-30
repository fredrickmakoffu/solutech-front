export default {
    methods: {
        loadingButton(event) {
            event.classList.remove('btn-secondary')
            event.classList.add('btn-warning')
            event.querySelector('.icon-loading').classList.remove('d-none')
        },
        successButton(event) {
            event.classList.remove('btn-warning')
            event.classList.add('btn-success')
            event.querySelector('.icon-loading').classList.add('d-none')
            event.querySelector('.icon-success').classList.remove('d-none')
        },
        errorButton(event) {
            event.classList.remove('btn-warning')
            event.classList.add('btn-danger')
            event.querySelector('.icon-loading').classList.add('d-none')
            event.querySelector('.icon-error').classList.remove('d-none')
        },
        defaultButton(event, status_type) {
            if(status_type == 'success') {
                event.classList.remove('btn-success')  
                event.querySelector('.icon-success').classList.add('d-none')  
            } else if(status_type == 'error') {
                event.classList.remove('btn-danger')  
                event.querySelector('.icon-error').classList.add('d-none')  
            }

            event.classList.add('btn-secondary')
        }
    }
}