
//Importing the movie libraries
//#import "../project.js"



//IOS.settings.logLevel = IOS.logLevels.LOG_INFO

var skyIdSD = new Array("movieslive1","test1234")
var skyIdHD = new Array("movieslive4","test1234")

//UIALogger.logMessage("skyIdSD" + skyIdSD[0])

function SkyIDRemoteRecordTests() {
	
	
	};


SkyIDRemoteRecordTests.prototype.loginFromCardAndSendRemoteRecord = function()
{
IOS.log_start("Login and send remote record requests from card");
cardView = new MOVIES.CardView();
cardView.navigateCategory("On Sky Movies")
cardView.waitAction(0.5)
cardView.navigateCardView(); 
cardView.waitAction(1.0)
cardView.tapCenterOftarget();
cardView.navigateToMovieIndex(1); 
cardView.waitAction(0.5);
cardView.scrollUntillMovieIsOnSky() 
cardView.waitAction(0.5);
cardView.doRemoteRecordRequest()  
};	


SkyIDRemoteRecordTests.prototype.loginAsHDUserAndRemoteRecordRequest = function() 
{
IOS.log_start("Login from settings as HD user and send remote record requests");
settings = new MOVIES.SettingsView();
settings.tapIconsOnNavBar("Settings");
settings.navigateToSettings("Your Profile")
settings.loginWithSkyID(skyIdHD[0],skyIdHD[1])
settings.closeSettingsDialog();  

cardView = new MOVIES.CardView();
cardView.navigateCategory("Daily Picks")
cardView.waitAction(1.0)
cardView.navigateCardView(); 
cardView.waitAction(0.5)
cardView.tapCenterOftarget();
cardView.navigateToMovieIndex(1); 
cardView.waitAction(0.5);
cardView.scrollUntillMovieIsOnSky() 
cardView.waitAction(0.5);
cardView.doRemoteRecordRequest()   };




SkyIDRemoteRecordTests.prototype.loginAsSDUserAndRemoteRecordRequest = function() 
{
IOS.log_start("Login from settings as SD user and send remote record requests");
settings = new MOVIES.SettingsView();
settings.tapIconsOnNavBar("Settings");
settings.navigateToSettings("Your Profile")
settings.loginWithSkyID(skyIdSD[0],skyIdSD[1])
settings.closeSettingsDialog();  

cardView = new MOVIES.CardView();
cardView.tapCenterOftarget();
cardView.navigateCategory("On Sky Movies")
cardView.waitAction(1.0)
cardView.navigateCardView(); 
cardView.waitAction(0.5)
cardView.navigateToMovieIndex(1); 
cardView.waitAction(0.5);
cardView.scrollUntillMovieIsOnSky() 
cardView.waitAction(0.5);
cardView.doRemoteRecordRequest()  
cardView.waitAction(0.5);
cardView.returnToBaseState()
cardView.waitAction(2.0);
};






