define(function(){
	return function(){
		this.config = (arguments.length == 1)?arguments[0]:{id: 0, title : "Go to japan", plannedTo : "01/01/1999", urgent : "true", enabled : "true", done : "false"};
		
		this.setId = function(value){
			this.config.id = value;
		};
		
		this.getId = function(){
			return this.config.id;
		};
		
		this.setTitle = function(value){
			this.config.title = value;
		};
		
		this.getTitle = function(){
			return this.config.title;
		};
		
		this.setPlannedTo = function(value){
			this.config.plannedTo = value;
		};
		
		this.getPlannedTo = function(){
			return this.config.plannedTo;
		};
		
		this.setUrgent = function(value){
			this.config.urgent = value;
		};
		
		this.getUrgent = function(){
			return this.config.urgent;
		};
		
		this.setEnabled = function(value){
			this.config.enabled = value;
		};
		
		this.getEnabled = function(){
			return this.config.enabled;
		};
		
		this.setDone = function(value){
			this.config.done = value;
		};
		
		this.getDone = function(){
			return this.config.done;
		};
	};
});	
	
