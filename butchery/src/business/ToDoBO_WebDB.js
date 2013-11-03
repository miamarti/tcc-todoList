define(["../dao/ToDoDAO_WebDB", "../models/ToDoBean", "../views/ToDoView"], function(ToDoDAOWebDB, ToDoBean, ToDoView){
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
				ToDoDAOWebDB.getTodoList(function(resultSet){
					var table = '';
					for(var i=0; i < resultSet.length; i++){
						table += ToDoView.getLineList(new ToDoBean(resultSet.item(i)));
						console.log(resultSet.item(i));
					}
					$('#todoListContent').html(table);
				});
			},
			
			/**
			 * List events list urgent
			 */
			getUrgent : function(){
				ToDoDAOWebDB.getTodoList(function(resultSet){
					var table = '';
					for(var i=0; i < resultSet.length; i++){
						table += ToDoView.getLineList(new ToDoBean(resultSet.item(i)));
						console.log(resultSet.item(i));
					}
					$('#todoListContent').html(table);
				});
			},
			
			/**
			 * List events list cancelled
			 */
			getCancelled : function(){
				ToDoDAOWebDB.getTodoList(function(resultSet){
					var table = '';
					for(var i=0; i < resultSet.length; i++){
						table += ToDoView.getLineList(new ToDoBean(resultSet.item(i)));
						console.log(resultSet.item(i));
					}
					$('#todoListContent').html(table);
				});
			}
	
		};
	return _this;
});