var Login = {
	doLogin : function(callback){
		var loginPanel = document.loginPanel;
		setTimeout(function(){ callback({}, 'success'); }, 3000);
	}
};