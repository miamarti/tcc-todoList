define(["../dao/ToDoDAO_LocalStorage", "../views/ToDoView"], function(ToDoDAOLocalStorage, ToDoView){
	var _this = {

			/**
			 * ToDoList Start
			 */
			getStart : function(){
				console.log('\n###################################');
				console.log('ToDoList Start...');
				this.getToDoList();
			},
			
			/**
			 * List events list
			 */
			getToDoList : function(){
				ToDoDAOLocalStorage.getTodoList(function(callback){
					ToDoDAOLocalStorage.getTodoList(function(callback){
						var table = '';
						callback.forEach(function(toDoBean){
							table += ToDoView.getLineList(toDoBean);
							console.log(toDoBean);
						});
						$('#todoListContent').html(table);
					});
				});
			}
	
		};
	return _this;
});