

var GRID_ICON = "Grid";
function PlayingMovieTrailerTests() {
	
	
	};


PlayingMovieTrailerTests.prototype.playTrailerFromCard = function() {
IOS.log_start("Playing the trailer from the card");
cardView = new MOVIES.CardView();
//cardView.setDeviceOrientation("landscape");
cardView.waitAction(1.0);
cardView.tapIconsOnNavBar(GRID_ICON)
cardView.waitAction(1.0);
cardView.navigateToMovieWithTrailer();
cardView.waitAction(1.0);
cardView.getTrailerIcon().tap(); 
cardView.waitAction(0.5);
cardView.verifyTrailer(); 
cardView.waitAction(1.0);
cardView.returnToBaseState(); 

};

PlayingMovieTrailerTests.prototype.playTrailerFromPortalPage = function() {
IOS.log_start("Playing the trailer from the Movie portal page");
cardView = new MOVIES.CardView();
cardView.waitAction(0.5);
cardView.setDeviceOrientation("portrait");
cardView.waitAction(0.5);
cardView.navigateCardView()
cardView.waitAction(0.5);
cardView.navigateToMovieIndex(1);
cardView.waitAction(0.5);
cardView.navigateToMovieWithTrailer();
cardView.waitAction(0.5)
cardView.openMoviePortalPage(); 
var card_number = cardView.getCurrentIndex();
cardView.playAndVerifyTrailerFromPortalPage(1,card_number); 
cardView.closeMoviePortalPage(); 
cardView.setDeviceOrientation("landscape");
cardView.waitAction(1.0)
cardView.returnToBaseState(); 
	
};


