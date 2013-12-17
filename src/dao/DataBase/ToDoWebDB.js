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
				    			  "todo(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, plannedTo DATE, urgent TEXT  DEFAULT (\'false\'), enabled TEXT  DEFAULT (\'true\'), done TEXT  DEFAULT (\'false\'))", [], this.onSuccess, this.onError);
				    
//				    
				    localStorage.setItem('firstConnection', true);
				    console.log('firstConnection start');
				});
			}
	}
	return _this;
});
