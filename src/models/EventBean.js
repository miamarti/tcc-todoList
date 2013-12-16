define(function(){
	return function(){
		this.config = (arguments.length == 1)?arguments[0]:{startDate:'', endDate:'', title:'', location:'', notes:''};
		
		this.setStartDate = function(value){
			this.config.startDate = value;
		};
		
		this.getStartDate = function(){
			return this.config.startDate;
		};
		
		this.setEndDate = function(value){
			this.config.endDate = value;
		};
		
		this.getEndDate = function(){
			return this.config.endDate;
		};
		
		this.setTitle = function(value){
			this.config.title = value;
		};
		
		this.getTitle = function(){
			return this.config.title;
		};
		
		this.setLocation = function(value){
			this.config.location = value;
		};
		
		this.getLocation = function(){
			return this.config.location;
		};
		
		this.setNotes = function(value){
			this.config.notes = value;
		};
		
		this.getNotes = function(){
			return this.config.notes;
		};
	};
});	