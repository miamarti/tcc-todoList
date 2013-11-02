define(function(){
	var _this = {
		getLineList: function(toDoBean){
			return '<div><span class="fc-titleList">' + toDoBean.getEnabled()[0] + ' ' + toDoBean.getTitle() + ' ' + toDoBean.getEnabled()[1] + '</span><span class="fc-icons">' + toDoBean.getUrgent() + '</span></div>';
		}
	};
	return _this;
});