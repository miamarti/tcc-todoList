define(function(){
	var _this = {
		getLineList: function(toDoBean){
			return '<div data-id="' + toDoBean.getId() + '" data-controler="#_this/getFormEdit"><span class="fc-titleList">' /*+ ((this.config.enabled) === 'true'?'':'<del>') */+ ' ' + toDoBean.getTitle() + ' - ' + toDoBean.getPlannedTo() /*+ ((this.config.enabled) === 'true'?'':'</del>')*/ + '</span><span class="fc-icons">' + ((toDoBean.getUrgent()==='true')?'<i class="fa fa-fire"></i>':'') + '</span></div>';
		},
		
		renderBackground: function(value){
			document.head.innerHTML += '<link rel="stylesheet" href="assets/css/' + value + 'Background.css">';
		},
		
		getBackground: function(){
			if(typeof(Storage)!=="undefined"){
				if(localStorage.background != undefined){
					this.renderBackground(localStorage.getItem('background'));
				} else {
					this.renderBackground('metallic');
				}
			} else {
				this.renderBackground('metallic');
			}
		},
		
		setBackground: function(value){
			localStorage.setItem('background', value);
			this.renderBackground(value);
		},
		
		getFormNew : function(){
			$('#container').addClass('blur');
			$('#formAdd').removeClass('hide');
		},
		
		closeFormNew : function(){
			$('#container').removeClass('blur');
			$('#formAdd').addClass('hide');
		},
		
		getFormEdit : function(){
			$('#container').addClass('blur');
			$('#formEdit').removeClass('hide');
		},
		
		closeFormEdit : function(){
			$('#container').removeClass('blur');
			$('#formEdit').addClass('hide');
		}
	};
	return _this;
});
