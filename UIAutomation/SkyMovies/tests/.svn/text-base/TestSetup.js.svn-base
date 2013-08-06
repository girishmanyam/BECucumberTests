

function TestSetup() {
	
	
};


TestSetup.prototype.initialise = function {
	IOS.log_start("TEST SETUP")
	home = new MOVIES.HomeView();
	home.keepIdle(3000)
	home.populateTestData();
	home.setDeviceOrientation("landscape")
	home.waitAction(1.0)
	home.returnToBaseState();  
	
	
};




