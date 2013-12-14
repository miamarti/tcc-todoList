define(function() {
	var _this = {
		setEvent : function(eventBean, callback) {
			var success = function(message) {
				callback("Success: " + JSON.stringify(message));
			};
			var error = function(message) {
				callback("Error: " + message);
			};

			window.plugins.calendar.createEvent(eventBean.getTitle(), eventBean.getLocation(), eventBean.getNotes(), eventBean.getStartDate(), eventBean.getEndDate(), success, error);
		}
	};
	return _this;
});