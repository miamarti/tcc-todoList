define(["../dao/DataBase/ToDoWebDB"], function(ToDoWebDB){
	return {
			
		getTodoList : function(callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo where plannedTo = strftime('%d/%m/%Y', 'now')", [], function(tx, rs){
						callback(rs.rows);
					}, db.onError);
				});
			});
		},
		getAll : function(callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo", [], function(tx, rs){
						callback(rs.rows);
					}, db.onError);
				});
			});
		},
		
		getUrgent : function(callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo where urgent like 'true'", [], function(tx, rs){
						callback(rs.rows);
					}, db.onError);
				});
			});
		},
		getItemById : function(id,callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo where id = ?", [id], function(tx, rs){
						callback(rs.rows);
					}, db.onError);
				});
			});
		},
		
		setNewItem : function(bean){
			console.log(bean.getTitle());
			console.log(bean.getPlannedTo());
			
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql('insert into todo ("title", "plannedTo", "urgent", "enabled") values (?, ?, ?, ?);', [bean.getTitle(),bean.getPlannedTo(), bean.getUrgent() + '','true'], 
							ToDoWebDB.onSuccess, ToDoWebDB.onError);
				});
			});
		}
	

	};
});
