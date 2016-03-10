app.controller('AdminCtrl',AdminCtrl);

function AdminCtrl($state){
    $state.transitionTo('admin.login');

}
