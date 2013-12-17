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
			getCanceled : function(){
				ToDoDAOWebDB.getCanceled(function(resultSet){
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
			getDone : function(){
				ToDoDAOWebDB.getDone(function(resultSet){
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
					var contentDate = bean.getPlannedTo().split('/');
					var data = new Date(contentDate[2],(contentDate[1]-1),contentDate[0]);
					eventBean.setStartDate(data);
					eventBean.setEndDate(data);
					eventBean.setTitle(bean.getTitle());
					eventBean.setLocation("");
					eventBean.setNotes("");
					
					Calendar.setEvent(eventBean, function(result){
						alert(result);
					});
				
					ToDoDAOWebDB.setNewItem(bean);
				}finally{}
				
			},
			
			setItem : function(bean){
				console.log(bean.getId());
				try{
					ToDoDAOWebDB.setItem(bean);
				}finally{}
				
			},
			
			setCanceled : function(id){
				try{
					ToDoDAOWebDB.setCanceled(id);
				}finally{}
				
			},
			
			setDone : function(id){
				try{
					ToDoDAOWebDB.setDone(id);
				}finally{}
				
			}
	
		};
	return _this;
});
