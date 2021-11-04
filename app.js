Vue.component ('toggle',{
    data: function () {
        return{
            show: false
        };
    },
    props : ['name', 'codename'],


    template: '<div v-on:click="nameToggle"><h1 v-bind:class="{hide:show}">{{name}}</h1> <h1 v-bind:class="{hide:!show}">{{codename}}</h1></div>',


    methods: {
        nameToggle: function(){
            this.show = !this.show
        }

    }
});


var app = new Vue({
    el:"#app",
    data: {
        nametype: "",
        nameWarning: "",
        email: "",
        emailWarning: "",

        list: [{name:"Protagonist",codename:"Joker"},{name:"Anne",codename:"Panther"},{name:"Ryuji",codename:"Skull"}]
    },


    watch:{
        nametype: function(){
            if (this.nametype.length<2) {
                this.nameWarning="Name (text field). The input needs to have at least 2 characters. Required."

            }else{
                this.nameWarning="";

            }
        },
        email: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(email)) {
                    this.emailWarning = "Email (text field). The input needs to be a valid email address. Required.";
                } else if (re.test(email)) {
                    this.emailWarning ="";
                }
        }

    },


});

