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
				
				//_this.setClear();
				
				this.webdb.connection = openDatabase("TodoDB", "1", "Todo manager", (5 * 1024 * 1024)); // 5MB
				if(localStorage.firstConnection == undefined){
					this.init();
				}
				callback(this.webdb);
			},
			
			init: function(){
				this.webdb.connection.transaction(function(tx) {
					tx.executeSql('DROP TABLE IF EXISTS "todo"', [], this.onSuccess, this.onError);
				    tx.executeSql("CREATE TABLE IF NOT EXISTS " +
				    			  "todo(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, plannedTo DATE, urgent TEXT  DEFAULT (\'false\'), enabled TEXT  DEFAULT (\'true\'))", [], this.onSuccess, this.onError);
				    
//				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Revisar issues no github - 10/nov/2013','Someday','true','false'], this.onSuccess, this.onError);
//                  tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Preparar fundamentação teórica do TCC - 18/nov/2013','When der','false','false'], this.onSuccess, this.onError);
//                  tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Enviar email ao chefe - 29/dez/2013','As soon as possible - 25/nov/2013','true','true'], this.onSuccess, this.onError);
//                  tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Reunião de fechamento do mês - 02/dez/2013','Someday','false','false'], this.onSuccess, this.onError);
//                  tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Formatar monografia - 02/nov/2013','Someday','true','true'], this.onSuccess, this.onError);
//                  tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Realizar testes - 03/nov/2013','Someday','true','true'], this.onSuccess, this.onError);
				    localStorage.setItem('firstConnection', true);
				    console.log('firstConnection start');
				});
			}
	}
	return _this;
});
