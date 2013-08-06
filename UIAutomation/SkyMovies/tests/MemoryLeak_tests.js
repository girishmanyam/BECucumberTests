/***********************************************************************
* Sky movies Memory leak tests
***********************************************************************/


//importing the project libraries

#import "../project.js"





//settings the logging level globally
IOS.settings.logLevel = IOS.logLevels.LOG_INFO

// % of number of cards to scroll in a category
var FACTOR = 1.0;

count_dailyPicks = Math.round(parseInt(count.dailyPicks) * FACTOR);
count_onSkyMovies = Math.round(parseInt(count.onSkyMovies) * FACTOR);
count_onBoxofice = Math.round(parseInt(count.onBoxofice) * FACTOR);
count_comingSoon = Math.round(parseInt(count.comingSoon) * FACTOR);
count_inCinemas  = Math.round(parseInt(count.inCinemas) * FACTOR); 


//IOS.log_start("TEST SETUP")
home = new MOVIES.HomeView();
home.setDeviceOrientation("landscape")
home.waitAction(1.0)
home.returnToBaseState(); 




//var MOVIES_IN_GRID_IPAD = 15
//scroll_dp = Math.floor(count.dialyPicks/MOVIES_IN_GRID_IPAD) + 1 


//IOS.log_start("START:Movie card tests")
cardView = new MOVIES.CardView();
cardView.navigateCardView();
cardView.navigateCategory("Daily Picks");
cardView.waitAction(0.5)
cardView.navigateToMovieIndex(count_dailyPicks);
cardView.returnToBaseState(); 


cardView = new MOVIES.CardView();
cardView.navigateCardView();
cardView.navigateCategory("On Sky Movies");
cardView.waitAction(0.5)
cardView.navigateToMovieIndex(count_onSkyMovies);
//cardView.returnToBaseState();



/*cardView = new MOVIES.CardView();
cardView.navigateCardView();
cardView.navigateCategory("On Box Office");
cardView.waitAction(0.5)
cardView.navigateToMovieIndex(count_onBoxofice); 
//cardView.returnToBaseState();


cardView = new MOVIES.CardView();
cardView.navigateCardView();
cardView.navigateCategory("Coming Soon");
cardView.waitAction(0.5)
cardView.navigateToMovieIndex(count_comingSoon);
//cardView.returnToBaseState(); 


cardView = new MOVIES.CardView();
cardView.navigateCardView();
cardView.navigateCategory("At The Cinema");
cardView.waitAction(0.5)
cardView.navigateToMovieIndex(count_inCinemas);
//cardView.returnToBaseState();  */






