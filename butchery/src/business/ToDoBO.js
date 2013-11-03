define(["../dao/ToDoDAO_WebDB", "../models/ToDoBean", "../views/ToDoView"], function(ToDoDAOWebDB, ToDoBean, ToDoView){
	var _this = {

			/**
			 * ToDoList Start
			 */
			getStart : function(){
				this.getToDoList();
				ToDoView.setBackground('womanly');
				ToDoView.getBackground();
				console.log('ToDoList Start...');
			},
			
			/**
			 * List events list
			 */
			getToDoList : function(){
				ToDoDAOWebDB.getTodoList(function(resultSet){
					var table = '';
					for(var i=0; i < resultSet.length; i++){
						table += ToDoView.getLineList(new ToDoBean(resultSet.item(i)));
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
					}
					$('#todoListContent').html(table);
				});
			},
			
			getFormNew : function(){
				$('#container').addClass('blur');
				$('#upperBlade').removeClass('hide');
			},
			
			closeFormNew : function(){
				$('#container').removeClass('blur');
				$('#upperBlade').addClass('hide');
			}
	
		};
	return _this;
});