define(function(){
	return function(){
		this.config = (arguments.length == 1)?arguments[0]:{id: 0, title : "Go to japan", plannedTo : "Someday", urgent : "true", enabled : "true"};
		
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
			return (this.config.urgent) === 'true'?'<i class="fa fa-fire"></i>':'';
		};
		
		this.setEnabled = function(value){
			this.config.enabled = value;
		};
		
		this.getEnabled = function(){
			return (this.config.enabled) === 'true'?['','']:['<del>','</del>'];
		};
	};
});	
	
