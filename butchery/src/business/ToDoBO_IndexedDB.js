define(["../dao/ToDoDAO_IndexedDB", "../models/ToDoBean", "../views/ToDoView"], function(ToDoDAOIndexedDB, ToDoBean, ToDoView){
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
				var table = '';
				ToDoDAOIndexedDB.getTodoList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineList(new ToDoBean(resultSet.value));
						console.log(resultSet.value);
						resultSet.continue();
					} else{
						$('#todoListContent').html(table);
					}
				});
			},
			
			/**
			 * List events list urgent
			 */
			getUrgent : function(){
				var table = '';
				ToDoDAOIndexedDB.getTodoUrgentList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineList(new ToDoBean(resultSet.value));
						resultSet.continue();
					} else{
						$('#todoListContent').html(table);
					}
				});
			},
			
			/**
			 * List events list cancelled
			 */
			getCancelled : function(){
				var table = '';
				ToDoDAOIndexedDB.getTodoCancelledList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineList(new ToDoBean(resultSet.value));
						resultSet.continue();
					} else{
						$('#todoListContent').html(table);
					}
				});
			}
	
		};
	return _this;
});