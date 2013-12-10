define(["../helpers/RESTfulHelper", "../business/ToDoBO", "../views/ToDoView", "../models/ToDoBean"], function(RESTfulHelper, ToDoBO, ToDoView, ToDoBean){
	var _this = {
			
			/**
			 * @param obj
			 */
			reflection : function(rflt){
				try {
					console.log(rflt);
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
			getCancelled : function(){
				ToDoBO.getCancelled(arguments);
			},
			
			getFormNew : function(){
				ToDoView.getFormNew(arguments);
			},
			
			closeFormNew :function(){
				ToDoView.closeFormNew(arguments);
			},
			
			setNewItem :function(){
				var bean = new ToDoBean();
				bean.setTitle($('#inputTitle').val());
				bean.setPlannedTo($('#inputDate').val());
				bean.setUrgent(document.getElementById('chkUrgent').checked);
				
				ToDoBO.setNewItem(bean);
				_this.closeFormNew(arguments);
				_this.getToDoList(arguments);
			}
			
	};
	_this.setEventListeners();
	_this.getStart();
	return _this;
});
