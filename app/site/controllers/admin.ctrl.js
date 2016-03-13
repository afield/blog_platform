app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl($state,api){
    var ctrl = this;
    ctrl.api = api;
    ctrl.state = $state;
    ctrl.email;
    ctrl.password = null;
    ctrl.auth_btn = "Login";
    ctrl.stateName = ctrl.state.current.name;
    ctrl.siteName;

    if(!localStorage.authToken && ctrl.stateName == 'admin'){
	   ctrl.state.transitionTo('admin.login');
    }
    else if(localStorage.authToken){
		ctrl.state.go('admin.panel');
	}


}

AdminCtrl.prototype.login = function(){
    var ctrl = this;
    var payload = {
		email:ctrl.email,
		password:ctrl.password
	}
    ctrl.auth_btn = "Authorizing";

    ctrl.api.request('/login',payload,'POST')
	.then(function(res){
		console.log(res);
		//successfull response
		if(res.status == 200){
			//user exists
			if(res.data.user != null){
				ctrl.state.go('admin.panel');
			}
		}
		ctrl.auth_btn = "Error";
	},function(){
		//error
		console.log(res);
		ctrl.auth_btn = "Error";
	})

}
AdminCtrl.prototype.logout = function(){
    var ctrl =this;
	localStorage.removeItem('authToken');

	ctrl.state.go('admin.login');
}

AdminCtrl.prototype.logSiteName = function(){
    var ctrl = this;
    console.log(ctrl.siteName);
}
