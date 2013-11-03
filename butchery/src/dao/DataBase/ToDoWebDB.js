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
			getInstance: function(callback){
//				localStorage.clear();
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
				    
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Go to japan','Someday','true','false'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Buy a bladder caramel','When der','true','false'], this.onSuccess, this.onError);
				    tx.executeSql('insert into todo ("id", "title", "plannedTo", "urgent", "enabled") values (NULL, ?, ?, ?, ?);', ['Trample President Dilma','As soon as possible','true','true'], this.onSuccess, this.onError);
				    localStorage.setItem('firsCconnection', true);
				    console.log('firsCconnection start');
				});
			}
	}
	return _this;
});


//var html5rocks = {};
//html5rocks.webdb = {};
//html5rocks.webdb.db = null;
//
//html5rocks.webdb.open = function() {
//  var dbSize = 5 * 1024 * 1024; // 5MB
//  html5rocks.webdb.db = openDatabase("Todo", "1.0", "Todo manager", dbSize);
//}
//
//html5rocks.webdb.createTable = function() {
//  var db = html5rocks.webdb.db;
//  db.transaction(function(tx) {
//    tx.executeSql("CREATE TABLE IF NOT EXISTS todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, added_on DATETIME)", []);
//  });
//}
//
//html5rocks.webdb.addTodo = function(todoText) {
//  var db = html5rocks.webdb.db;
//  db.transaction(function(tx){
//    var addedOn = new Date();
//    tx.executeSql("INSERT INTO todo(todo, added_on) VALUES (?,?)",
//        [todoText, addedOn],
//        html5rocks.webdb.onSuccess,
//        html5rocks.webdb.onError);
//   });
//}
//
//html5rocks.webdb.onError = function(tx, e) {
//  alert("There has been an error: " + e.message);
//}
//
//html5rocks.webdb.onSuccess = function(tx, r) {
//  // re-render the data.
//  html5rocks.webdb.getAllTodoItems(loadTodoItems);
//}
//
//
//html5rocks.webdb.getAllTodoItems = function(renderFunc) {
//  var db = html5rocks.webdb.db;
//  db.transaction(function(tx) {
//    tx.executeSql("SELECT * FROM todo", [], renderFunc,
//        html5rocks.webdb.onError);
//  });
//}
//
//html5rocks.webdb.deleteTodo = function(id) {
//  var db = html5rocks.webdb.db;
//  db.transaction(function(tx){
//    tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
//        html5rocks.webdb.onSuccess,
//        html5rocks.webdb.onError);
//    });
//}
//
//function loadTodoItems(tx, rs) {
//  var rowOutput = "";
//  var todoItems = document.getElementById("todoItems");
//  for (var i=0; i < rs.rows.length; i++) {
//    rowOutput += renderTodo(rs.rows.item(i));
//  }
//
//  todoItems.innerHTML = rowOutput;
//}
//
//function renderTodo(row) {
//  return "<li>" + row.todo  + " [<a href='javascript:void(0);'  onclick='html5rocks.webdb.deleteTodo(" + row.ID +");'>Delete</a>]</li>";
//}
//
//function init() {
//  html5rocks.webdb.open();
//  html5rocks.webdb.createTable();
//  html5rocks.webdb.getAllTodoItems(loadTodoItems);
//}
//
//function addTodo() {
//  var todo = document.getElementById("todo");
//  html5rocks.webdb.addTodo(todo.value);
//  todo.value = "";
//}​