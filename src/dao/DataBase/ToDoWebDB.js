define(function(){
	var _this = {
			webdb: {
				connection: {},
				onError: function(tx, e){
					console.log('Error in ToDoWebDB', e.message);
				},
				onSuccess: function(){
				}
			},
			
			setClear: function(){
				localStorage.clear();
			},
			
			getInstance: function(callback){
//				_this.setClear();
				this.webdb.connection = openDatabase("TodoDB", "1", "Todo manager", (5 * 1024 * 1024)); // 5MB
				if(localStorage.firsCconnection == undefined){
					this.init();
				}
				callback(this.webdb);
			},
			
			init: function(){
				this.webdb.connection.transaction(function(tx) {
					tx.executeSql('DROP TABLE IF EXISTS "todo"', [], this.onSuccess, this.onError);
				    tx.executeSql("CREATE TABLE IF NOT EXISTS " +
				    			  "todo(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, plannedTo TEXT, urgent TEXT  DEFAULT (\'false\'), enabled TEXT  DEFAULT (\'true\'))", [], this.onSuccess, this.onError);
				    
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Revisar issues no github','Someday','true','false'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Preparar fundamentação teórica do TCC','When der','false','false'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Enviar email ao chefe','As soon as possible','true','true'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Reunião de fechamento do mês','Someday','false','false'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Formatar monografia','Someday','true','true'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Realizar testes','Someday','true','true'], this.onSuccess, this.onError);
				    localStorage.setItem('firsCconnection', true);
				    console.log('firsCconnection start');
				});
			}
	}
	return _this;
});
