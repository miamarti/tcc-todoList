define(function(){
	var _this = {
			
			getInstance: function(callback){
				var request = indexedDB.open("ToDoList", 1);
				request.onupgradeneeded = function() {
					_this.init(request.result);
				};
				request.onsuccess = function() {
					callback(request.result);
				};
			},
			
			init: function(db){
				var store = db.createObjectStore("ToDoList", {
					keyPath : "title"
				});
				store.createIndex("by_urgent", "urgent");
				store.createIndex("by_enabled", "enabled");
				
				//initial data
				store.put({
                                        title : "Consulta Médica",
                                        plannedTo : "Someday",
                                        urgent : "false",
                                        enabled : "true"
                                });
                                store.put({
                                        title : "Reunião com o Diretor",
                                        plannedTo : "When der",
                                        urgent : "true",
                                        enabled : "true"
                                });
                                store.put({
                                        title : "Formatar monografia",
                                        plannedTo : "As soon as possible",
                                        urgent : "true",
                                        enabled : "true"
                                });
                                store.put({
                                        title : "Criar diagrama de classes",
                                        plannedTo : "As soon as possible",
                                        urgent : "false",
                                        enabled : "true"
                                });
                                store.put({
                                        title : "Criar protótipos de tela",
                                        plannedTo : "As soon as possible",
                                        urgent : "true",
                                        enabled : "true"
                                });
			},
			
			deleteDatabase: function(name){
				indexedDB.deleteDatabase(name);
			}
		};
//	_this.deleteDatabase("ToDoList");
	return _this;
});
