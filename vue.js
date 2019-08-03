var app = new Vue({
    el: '#app',
    data: {
      name: 'Siti Nur Fatimah',
      food_items: ['nasi ayam','pizza','burger',]

     
    },
    methods: {
        buttonClick: function(){
            alert('Hey'+ ' ' + this.name + ',' + ' ' + 'you clicked me!')
        }
    }
  })