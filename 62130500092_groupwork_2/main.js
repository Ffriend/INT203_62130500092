const app = {
    data() {
        return {
            msg: 'Hello, Vue3',
            shown: true,
            url: 'https://www.youtube.com/'
        }
    },
    created() {
        console.log('message is ' + this.msg)
    },
    updated(){
        console.log('message is changed to ' + this.msg)
    }
}
var mountedApp = Vue.createApp(app).mount('#app');