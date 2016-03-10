app.controller('MainCtrl',MainCtrl);

function MainCtrl(){

}

MainCtrl.prototype.registerModal = function(){
        $modal.dialog({}).open('modalContent.html');

}
