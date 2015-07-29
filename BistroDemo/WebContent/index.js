$(function() {
	identity = new identity();
	
//	setTimeout(identity.getToken(),1000);
//	setTimeout(function(){
//		   window.location.reload(1);
//		}, 3000);
	
    setInterval(function() {
    	identity.getToken();
    }, 1000);
});