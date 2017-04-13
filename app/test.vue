<!-- HTML TEMPLATE -->
	
	<template>
		<div id='test'>
			 <ol>
				<todo-item v-for="item in groceryList" :key="item.id" 
						   v-bind:todo="item"></todo-item>
			</ol>
		</div>
	</template>


<!-- JS SCRIPT with VUE -->
	
	<script>

	Vue.component('todo-item', {
		 		props : ['todo'],
			  	template: '<li>{{todo.text}}</li>'
			})
		 	
	var app3 = new Vue( {
		el : "#test",
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

	module.exports = app3;

	</script>

<!-- CSS style -->

	<style scoped>
		todo-item {
			background-color: #770000;
		}
	</style>