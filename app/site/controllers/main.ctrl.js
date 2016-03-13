app.controller('MainCtrl',MainCtrl);

function MainCtrl($state){
    var ctrl = this;
    ctrl.state = $state;

    if(localStorage.authToken == undefined){
    	ctrl.state.go('admin.login');

    }

}

MainCtrl.prototype.logout = function(){
    var ctrl = this;
	localStorage.removeItem('authToken');

	ctrl.state.go('admin.login');
}

MainCtrl.prototype.toAdmin = function(){
    var ctrl = this;
    ctrl.state.go('admin.login');
}
