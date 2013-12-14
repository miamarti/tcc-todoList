define(["../dao/ToDoDAO_WebDB", "../models/ToDoBean", "../models/EventBean", "../views/ToDoView", "../services/Calendar"], function(ToDoDAOWebDB, ToDoBean, EventBean, ToDoView, Calendar){
	var _this = {

			/**
			 * ToDoList Start
			 */
			getStart : function(){
				this.getToDoList();
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
			 * List events list
			 */
			getAll : function(){
				ToDoDAOWebDB.getAll(function(resultSet){
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
				ToDoDAOWebDB.getUrgent(function(resultSet){
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
			getItemById : function(id){
				ToDoDAOWebDB.getItemById(id,function(resultSet){
					ToDoView.setFormEdit(new ToDoBean(resultSet.item(0)));
				});
			},
			
			setNewItem : function(bean){
				try{
					
					var eventBean = new EventBean();
					eventBean.setStartDate(new Date("September 24, 2013 13:00:00"));
					eventBean.setEndDate(new Date("September 24, 2013 14:30:00"));
					eventBean.setTitle("My nice event");
					eventBean.setLocation("Home");
					eventBean.setNotes("Some notes about this event.");
					
					Calendar.setEvent(eventBean, function(result){
						alert(result);
					});
					
					ToDoDAOWebDB.setNewItem(bean);
				}finally{}
				
			}
	
		};
	return _this;
});
