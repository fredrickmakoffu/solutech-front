export default {
    methods: {
        onImageChange(event, array) {
            this.status_data.loading = true
            const file = event.target.files[0]
            
            if(file.size > 1048576) {
                this.success = false
                this.error = true
                this.error_message = "This image is above the recommended size. Please upload an image under 1MB."
            } else {
                if(this.error ==  true){
                    this.error = false
                    this.error_message = null
                }
        
                const imageFile = URL.createObjectURL(event.target.files[0]);
                this.createImage(imageFile, this.convertImage, array);   
            }          
        },
        createImage(imageFile, callback, array) {
            const image = document.createElement('img');
            image.onload = () => callback(image, array);
            image.setAttribute('src', imageFile);
        },
        convertImage(image, array) {
            const canvas = this.drawImageToCanvas(image);
            var result = canvas.toDataURL()

            this[array].image = result
            console.log(this[array]);
            this.status_data.loading = false
        },
        drawImageToCanvas(image) {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height);
            return canvas;
        }
    }
}