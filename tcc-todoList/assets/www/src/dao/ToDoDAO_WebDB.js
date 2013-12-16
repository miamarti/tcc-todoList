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
		
		getCanceled : function(callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo where enabled like 'false'", [], function(tx, rs){
						callback(rs.rows);
					}, db.onError);
				});
			});
		},
		
		getDone: function(callback){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql("SELECT * FROM todo where done like 'true'", [], function(tx, rs){
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
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql('insert into todo ("title", "plannedTo", "urgent", "enabled","done") values (?, ?, ?, ?,"false");', [bean.getTitle(),bean.getPlannedTo(), bean.getUrgent() + '','true'], 
							ToDoWebDB.onSuccess, ToDoWebDB.onError);
				});
			});
		},

		setItem : function(bean){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql('update todo set title = ?, plannedTo = ?, urgent = ? where id = ?', [bean.getTitle(),bean.getPlannedTo(), bean.getUrgent() + '', bean.getId()], 
							this.onSuccess, this.onError);
				});
			});
		},
		setCanceled : function(id){
			console.log(id);
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql('update todo set enabled = ? where id = ?', ["false",id], 
							this.onSuccess, this.onError);
				});
			});
		},
		setDone : function(id){
			ToDoWebDB.getInstance(function(db){
				db.connection.transaction(function(tx) {
					tx.executeSql('update todo set done = ? where id = ?', ["true",id], 
							this.onSuccess, this.onError);
				});
			});
		},
		
		onSuccess : function(){
			console.log("Success");
		},
		
		onError : function(){
			console.log("Error");
		}
	

	};
});
