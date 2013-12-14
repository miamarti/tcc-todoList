define(function(){
	var _this = {
		getLineList: function(toDoBean){
			return '<div data-id="' + toDoBean.getId() + '"><span class="fc-titleList" data-controller="#_this/getFormEdit/'+ toDoBean.getId() +'">' + ((toDoBean.getDone()) === 'true'?'<i>':'') + ((toDoBean.getEnabled()) === 'true'?'':'<del>') + ' ' + toDoBean.getTitle() + ' - ' + toDoBean.getPlannedTo() + ((toDoBean.getEnabled()) === 'true'?'':'</del>') + ((toDoBean.getDone()) === 'true'?'</i>':'') + '</span><span class="fc-icons">' + ((toDoBean.getUrgent()==='true')?'<i class="fa fa-fire"></i>':'') + ((toDoBean.getDone()==='true')?'<i class="fa fa-check"></i>':'') + '</span></div>';
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
			console.log('getAdd');
			$('#btnSaveAdd').removeClass('hide');
			$('#btnCloseAdd').removeClass('hide');
		},
		getFormEdit : function(){
			console.log('getEdit');
			$('#btnSaveEdit').removeClass('hide');
			$('#btnCloseEdit').removeClass('hide');
			$('#btnDone').removeClass('hide');
			$('#btnCancel').removeClass('hide');
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
			console.log('closeForm');
			document.getElementById('inputTitle').value='';
			document.getElementById('inputDate').value='';
			document.getElementById('chkUrgent').checked = false;
			$('#container').removeClass('blur');
			$('#formCrud').addClass('hide');
		},
		closeFormAdd : function(){
			console.log('closeFormAdd');
			$('#btnSaveAdd').addClass('hide');
			$('#btnCloseAdd').addClass('hide');
		},
		closeFormEdit : function(){
			console.log('closeFormEdit');
			$('#btnSaveEdit').addClass('hide');
			$('#btnCloseEdit').addClass('hide');
			$('#btnDone').addClass('hide');
			$('#btnCancel').addClass('hide');
		}
	};
	return _this;
});
