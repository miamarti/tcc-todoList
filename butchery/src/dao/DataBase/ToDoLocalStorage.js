define(function(){
	var _this = {
			
			getInstance: function(callback){
//				localStorage.clear();
				callback(this.init());
			},
			
			init: function(){
				var context = [
				               	{title : "Buy a bladder caramel", plannedTo : "When der", urgent : "false", enabled : "false"},
				               	{title : "Go to japan", plannedTo : "Someday", urgent : "true", enabled : "false"},
				               	{title : "Trample President Dilma", plannedTo : "As soon as possible", urgent : "true", enabled : "true"}
				              ];
				if(typeof(Storage)!=="undefined"){
					localStorage.setItem('ToDoLocalStorage.length', context.length);	
					for(key in context){
						localStorage.setItem('ToDoLocalStorage.' + key + '.title', context[key].title);
						localStorage.setItem('ToDoLocalStorage.' + key + '.plannedTo', context[key].plannedTo);
						localStorage.setItem('ToDoLocalStorage.' + key + '.urgent', context[key].urgent);
						localStorage.setItem('ToDoLocalStorage.' + key + '.enabled', context[key].enabled);
					}
				} else {
					return null;
				}
				return localStorage;
			}
			
	};
	return _this;
});