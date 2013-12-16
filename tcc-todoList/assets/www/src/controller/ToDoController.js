define(["../helpers/RESTfulHelper", "../business/ToDoBO", "../views/ToDoView", "../models/ToDoBean"], function(RESTfulHelper, ToDoBO, ToDoView, ToDoBean){
	var _this = {
			
			/**
			 * @param obj
			 */
			reflection : function(rflt){
				try {
					(rflt.content.length == 1)?eval(rflt.controller + '.' + rflt.content.obj + '();'):eval(rflt.controller + '.' + rflt.content.obj + '(' + rflt.content.args + ');');
				} finally {}
			},
			
			/**
			 * @param obj
			 */
			objReflection : function(obj){
				var content = RESTfulHelper.parser(obj.target.dataset.controller);
				if(content.controller != null){
					_this.reflection({"controller":content.controller, "content":content});
				}
			},
			
			/**
			 * Define addEventListeners in DashBoard
			 */
			setEventListeners : function(){
				document.body.addEventListener('click',_this.objReflection);
				document.body.addEventListener('touchend',_this.objReflection);
			},

			/**
			 * Start Aplication
			 */
			getStart : function(){
				ToDoBO.getStart(arguments);
			},
			
			/**
			 * Get List
			 */
			getToDoList : function(){
				ToDoBO.getToDoList(arguments);
			},
			
			/**
			 * Get List
			 */
			getAll : function(){
				ToDoBO.getAll(arguments);
			},
			
			/**
			 * Get Urgent List
			 */
			getUrgent : function(){
				ToDoBO.getUrgent(arguments);
			},
			
			/**
			 * Get Cancelled List
			 */
			getCanceled : function(){
				ToDoBO.getCanceled(arguments);
			},
			
			getDone	: function(){
					ToDoBO.getDone(arguments);	
			},
			getFormNew : function(){
				ToDoView.getForm(arguments);
				ToDoView.getFormAdd(arguments);
			},
			
			closeFormNew :function(){
				ToDoView.closeForm(arguments);
				ToDoView.closeFormAdd(arguments);
			},
			
			setNewItem :function(){
				if (confirm('Are you sure about that?')) { 
					var bean = new ToDoBean();
					bean.setTitle($('#inputTitle').val());
					bean.setPlannedTo($('#inputDate').val());
					bean.setUrgent(document.getElementById('chkUrgent').checked);
					
					ToDoBO.setNewItem(bean);
					_this.closeFormNew(arguments);
					_this.getToDoList(arguments);
				}
			},
			
			setItem :function(){
				if (confirm('Are you sure about that?')) { 
					var bean = new ToDoBean();
					bean.setId($('#hiddenId').val());
					bean.setTitle($('#inputTitle').val());
					bean.setPlannedTo($('#inputDate').val());
					bean.setUrgent(document.getElementById('chkUrgent').checked);
					
					ToDoBO.setItem(bean);
					_this.closeFormEdit(arguments);
					_this.getToDoList(arguments);
				}
			},
			
			setCanceled :function(){
				if (confirm('Are you sure about that?')) { 
					var id = $('#hiddenId').val();
					ToDoBO.setCanceled(id);
					_this.closeFormEdit(arguments);
					_this.getToDoList(arguments);
				}
			},
			
			setDone :function(){
				if (confirm('Are you sure about that?')) { 
					var id = $('#hiddenId').val();
					
					ToDoBO.setDone(id);
					_this.closeFormEdit(arguments);
					_this.getToDoList(arguments);
				}
			},
			
			getFormEdit : function(id){
				ToDoView.getForm(arguments);
				ToDoView.getFormEdit(arguments);
				document.getElementById("hiddenId").value = id;
				ToDoBO.getItemById(id);
				
			},
			
			closeFormEdit :function(){
				ToDoView.closeForm(arguments);
				ToDoView.closeFormEdit(arguments);
			}
			
	};
	_this.setEventListeners();
	_this.getStart();
	return _this;
});
