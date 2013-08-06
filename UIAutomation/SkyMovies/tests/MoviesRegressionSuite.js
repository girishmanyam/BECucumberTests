

#import "../project.js"
#import "CardandMoviePortalPageTests.js"
#import "AiringsInfoCardTests.js"
#import "AiringInfoPopOverTests.js";
#import "SearchByActorDirectorsTests.js"
#import "PlayingMovieTrailersTests.js"
#import "SkyIDAndRemoteRecordTests.js"
#import "AddandRemoveShortlistTests.js"
#import "GenreAndCertificateTests.js"
#import "CardViewNavigationTests.js"
#import "SettingsOptionsTests.js"




IOS.settings.logLevel = IOS.logLevels.LOG_INFO

function MoviesIOSTestSuite () {
	
	
}


MoviesIOSTestSuite.prototype.initialise = function() {
	IOS.log_start("TEST SETUP")
	home = new MOVIES.HomeView();
	home.populateTestData();
	home.setDeviceOrientation("landscape")
	home.waitAction(1.0)
	home.returnToBaseState();  
	
};

MoviesIOSTestSuite.prototype.cardAndMoviePortalPage = function() {

var cardAndPortalPage = new MovieCardAndPortalPageTests();
	
cardAndPortalPage.dailyPicksCardAndMoviePortalPage();
cardAndPortalPage.skyMoviesCardAndMoviePortalPage();
cardAndPortalPage.skyStoreCardAndMoviePortalPage();
cardAndPortalPage.comingSoonCardAndMoviePortalPage();  
cardAndPortalPage.atCinemaCategoryCardAndMoviePortalPage(); 

};

MoviesIOSTestSuite.prototype.categoryNavigation = function() {
	var navigate = new CategoryNavigationTests();
	navigate.InGridView();
	navigate.InCardiew();
	navigate.withInCategory();
};	



MoviesIOSTestSuite.prototype.searchByActorDirectorMovieTitleTests = function()
{
var searchTests = new SearchTests();	
searchTests.searchByMovieTitle();
searchTests.searchByActor(); 
/*searchTests.searchDirector(); */
};

MoviesIOSTestSuite.prototype.playingMovieTrailerTests = function()
{
	var player = new PlayingMovieTrailerTests();
	player.playTrailerFromCard();
	player.playTrailerFromPortalPage();
};

MoviesIOSTestSuite.prototype.remoteRecordRequests = function()
{
	var record = new SkyIDRemoteRecordTests()
	record.loginFromCardAndSendRemoteRecord() ;
	/*record.loginAsHDUserAndRemoteRecordRequest();
	record.loginAsSDUserAndRemoteRecordRequest();*/

}	

MoviesIOSTestSuite.prototype.airingPopoverOnTheCardAndInPortalPage = function()
{
	var airing = new AiringPopOverTests();
	airing.airingPopoverOnCardTests();

}

MoviesIOSTestSuite.prototype.airingInfoOnTheCard = function()
{
	var airingInfo = new AiringInfoOnCardTests();
	airingInfo.airingInfoForDailyPicksCategory();
	airingInfo.airingInfoForOnSkyMoviesCategory();
	airingInfo.airingInfoForSkyStoreCategory();
	airingInfo.airingInfoForComingSoonCategory();
	airingInfo.airingInfoForAtTheCinemaCategory(); 
};	

MoviesIOSTestSuite.prototype.filterView = function()
{
	var filter = new GenreAndCertificateTests();
	filter.genreFilterView();
	filter.certificateFilterView();
	filter.genreAndCertificateFilterView();

};


MoviesIOSTestSuite.prototype.addAndRemoveShortlist = function()
{
	var shortList = new ShortlistTests();
	shortList.addAndRemoveFromShortlist();
	
	
};	

MoviesIOSTestSuite.prototype.settingsOptions = function()
{
	var settings = new SettingsTests();
	settings.informationGroup();
	settings.calanderGroup(); 
	settings.skyPromotionsApps();
	settings.skyAccountPage();
	
	
};	



//ISSUES to be fixed for close and open button for movie portal page

//Entry point of Movies IOS Tests;

var testSuite = new MoviesIOSTestSuite()
testSuite.initialise(); 
testSuite.categoryNavigation()
testSuite.cardAndMoviePortalPage(); 
testSuite.settingsOptions();
testSuite.addAndRemoveShortlist();
testSuite.airingInfoOnTheCard();
testSuite.airingPopoverOnTheCardAndInPortalPage() 
testSuite.searchByActorDirectorMovieTitleTests(); 
testSuite.filterView();
//testSuite.remoteRecordRequests();
testSuite.playingMovieTrailerTests(); 







