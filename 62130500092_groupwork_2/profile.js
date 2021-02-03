const app = {
    data() {
        return {
            firstname: 'Samita',
            lastname: 'Pinijsupol',
            education: 'IT Student',
            article: '34',
            followers: '940',
            ratings: '8.9',
            url: 'preview.jpg'
        }
    }
    
}
var mountedApp = Vue.createApp(app).mount('#app');