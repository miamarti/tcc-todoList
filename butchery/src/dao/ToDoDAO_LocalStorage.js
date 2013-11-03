define(["../helpers/helpers", "../dao/DataBase/ToDoLocalStorage", "../models/ToDoBean"], function(helpers, ToDoLocalStorage, ToDoBean){
	return {
			
		getTodoList : function(callback){
			var arrayList = new helpers.ArrayList();
			ToDoLocalStorage.getInstance(function(conn){
				for(var i=0; i<conn.getItem('ToDoLocalStorage.length'); i++){
					if(conn.getItem('ToDoLocalStorage.' + i + '.title') != undefined){
						var toDoBean = new ToDoBean();
						toDoBean.setId(i+1);
						toDoBean.setTitle(conn.getItem('ToDoLocalStorage.' + i + '.title'));
						toDoBean.setPlannedTo(conn.getItem('ToDoLocalStorage.' + i + '.plannedTo'));
						toDoBean.setUrgent(conn.getItem('ToDoLocalStorage.' + i + '.urgent'));
						toDoBean.setEnabled(conn.getItem('ToDoLocalStorage.' + i + '.enabled'));
						arrayList.add(toDoBean);
					}
				}
			});
			callback(arrayList);
		}

	};
});