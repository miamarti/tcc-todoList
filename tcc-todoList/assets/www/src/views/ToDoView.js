define(function(){
	var _this = {
		getLineList: function(toDoBean){
			return '<div data-id="' + toDoBean.getId() + '"><span class="fc-titleList" data-controller="#_this/getFormEdit/'+ toDoBean.getId() +'"><a href="#ToDoController/getFormEdit/'+ toDoBean.getId() +'">' /*+ ((this.config.enabled) === 'true'?'':'<del>') */+ ' ' + toDoBean.getTitle() + ' - ' + toDoBean.getPlannedTo() /*+ ((this.config.enabled) === 'true'?'':'</del>')*/ + '</a></span><span class="fc-icons">' + ((toDoBean.getUrgent()==='true')?'<i class="fa fa-fire"></i>':'') + '</span></div>';
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
		
		getForm : function(){
			$('#container').addClass('blur');
			$('#formCrud').removeClass('hide');
		},
		getFormAdd : function(){
			$('#btnSaveAdd').removeClass('hide');
			$('#btnCloseAdd').removeClass('hide');
		},
		getFormEdit : function(){
			$('#btnSaveEdit').removeClass('hide');
			$('#btnCloseEdit').removeClass('hide');
		},
		
		setFormEdit : function(bean){
			document.getElementById('inputTitle').value=bean.getTitle();
			document.getElementById('inputDate').value=bean.getPlannedTo();
			if(bean.getUrgent()=='false')
				document.getElementById('chkUrgent').checked = false;
			else
				document.getElementById('chkUrgent').checked = true;
				
		},
		
		closeForm : function(){
			document.getElementById('inputTitle').value='';
			document.getElementById('inputDate').value='';
			document.getElementById('chkUrgent').checked = false;
			$('#container').removeClass('blur');
			$('#formCrud').addClass('hide');
		},
		closeFormAdd : function(){
			$('#btnSaveAdd').addClass('hide');
			$('#btnCloseAdd').addClass('hide');
		},
		closeFormEdit : function(){
			$('#btnSaveEdit').addClass('hide');
			$('#btnCloseEdit').addClass('hide');
		},
		clearForm : function(){

		}
	};
	return _this;
});
