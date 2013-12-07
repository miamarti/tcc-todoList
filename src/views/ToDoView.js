define(function(){
	var _this = {
		getLineList: function(toDoBean){
			return '<div data-id="' + toDoBean.getId() + '"><span class="fc-titleList">' + toDoBean.getEnabled()[0] + ' ' + toDoBean.getTitle() + ' - ' + toDoBean.getPlannedTo() + toDoBean.getEnabled()[1] + '</span><span class="fc-icons">' + toDoBean.getUrgent() + '</span></div>';
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
			$('#upperBlade').removeClass('hide');
		},
		
		closeFormNew : function(){
			$('#container').removeClass('blur');
			$('#upperBlade').addClass('hide');
		}
	};
	return _this;
});