define(["../dao/ToDoDAO", "../models/ToDoBean", "../views/ToDoView"], function(ToDoDAO, ToDoBean, ToDoView){
	var _this = {

			/**
			 * ToDoList Start
			 */
			getStart : function(){
				console.log('ToDoList Start...');
				this.getToDoList();
			},
			
			/**
			 * List events list
			 */
			getToDoList : function(){
				var table = '';
				ToDoDAO.getTodoList(function(resultSet){
					if (resultSet) {
						table += ToDoView.getLineList(new ToDoBean(resultSet.value));
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
				ToDoDAO.getTodoUrgentList(function(resultSet){
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
				ToDoDAO.getTodoCancelledList(function(resultSet){
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