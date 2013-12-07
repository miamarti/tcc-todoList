define(["../dao/DataBase/ToDoWebDB"], function(ToDoWebDB){
	return {
			
		getTodoList : function(callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo", [], function(tx, rs){
						callback(rs.rows);
					}, db.onError);
				});
			});
		},
		setNewItem : function(bean){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql('insert into todo ("title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', [bean.getTitle(),bean.getPlannedTo(),'true','false'], 
							ToDoWebDB.onSuccess, ToDoWebDB.onError);
				});
			});
		}
	

	};
});