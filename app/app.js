
	 	// var  vue = new Vue( options );
	 	var app1 = new Vue( {
	 		// mounted element
		  	el: '#app-1',
		 	
		 	data: {
		   		message: 'Hello Vue.js!',
		  	},
		  	
		  	methods: {
		  		reverseMessage: function () {
      				this.message = this.message.split('').reverse().join('');
      			}
    		},
		  	
		  	watch : {},
		  	computed : {},
		  	//replaces mounted element, except if starts with "#"
		  	//template : "<h1>hi vue!</h1>",
		  	// LIFECYCLE HOOKS
		  	// beforeCreate : function() {
		  	// 	console.log("beforeCreate there was nothing");
		  	// },
		  	// created : function() {
		  	// 	console.log( "and The App was created " + this.message );
		  	// },
		  	// beforeMount : function() {
		  	// 	console.log( "beforeMount it was nothing");
		  	// },
		  	// mounted : function() {
		  	// 	console.log( "but html element was mounted" );
		  	// },
		  	// beforeUpdate : function() {
		  	// 	console.log( "and beforeUpdate was there")
		  	// },
		  	// updated : function() {
		  	// 	console.log("and the data was updated");
		  	// },
		  	// beforeDestroy : function() {
		  	// 	console.log("and beforeDestoy was ready");
		  	// },
		  	// destroyed : function() {
		  	// 	console.log("and could be destroyed.");
		  	// }
		} );

	 	// $ refs
	 	// app.$el === el
	 	// app.$data === data
	 	var app2 = new Vue( {
	 		el : "#app-2",
	 		data : {
	 			seen : true
	 		},
	 		methods : {
	 			toggleSeen : function() {
	 				this.seen ^= true;
	 			}
	 		}
	 	});
	 	
	 	Vue.component('todo-item', {
	 		props : ['todo'],
		  	template: '<li>{{todo.text}}</li>'
		})
	 	
	 	var app3 = new Vue( {
	 		el : "#app-3",
	 		data: {
		   		groceryList : [ 
		   			{ text : "carrots" },
		   			{ text : "bread" }, 
		   			{ text : "butter"}, 
		   			{ text : "eggs" }, 
		   			{ text : "meat" }
		   		]
		  	},
	 	});