const app = new Vue({
    el: '#app',
    data: {
        emails: [],
        isLoading: false,
        transErr: false,
    },

    mounted(){
        
    },

    methods: {
        getEmails(num){
            this.emails = [];
            for(let i = 0; i< num; i++){
                this.getEmail();
            }
        },

        getEmail(){
            this.isLoading = true;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{
                this.emails.push(response.data.response);
                console.log(response.data.response);
                this.isLoading = false;
            })
            .catch((error) =>{
                console.log('KO',error);
                this.transErr = true;
            })
        }
    },

  })