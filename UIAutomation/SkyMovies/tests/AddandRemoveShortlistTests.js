

var NO_MOVIES_TO_SHORTLIST = 3;

function ShortlistTests() {



};

ShortlistTests.prototype.addAndRemoveFromShortlist = function()
{
	
   IOS.log_start("START:Shortlist movies test")
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("My Shortlist");
	cardView.waitAction(0.5)
	var movies_beforeShortlist = cardView.getCountOnNavBar();
	cardView.waitAction(0.5)
	cardView.navigateCategory("Daily Picks");
	cardView.waitAction(1.0)
	cardView.navigateCardView();
	cardView.waitAction(1.0)
	cardView.navigateToMovieIndex(1);
	var titles = cardView.addMoviesToShortList(parseInt(NO_MOVIES_TO_SHORTLIST));
	cardView.waitAction(0.5)
	cardView.navigateCategory("My Shortlist");
	cardView.waitAction(1.0)
	cardView.navigateCardView();
	var movies_afterShortlist = cardView.getCountOnNavBar();
	Assert.assertEquals(parseInt(movies_beforeShortlist + NO_MOVIES_TO_SHORTLIST), parseInt(movies_afterShortlist),"Movies count after adding to shorlist"); 
	cardView.waitAction(0.5);
	(movies_beforeShortlist == 0) ? cardView.navigateToMovieIndex(1) : cardView.navigateToMovieIndex(parseInt(1 +movies_beforeShortlist))
	cardView.waitAction(0.5);
	cardView.verifyShortlistedMoviesInOrder(titles);
	cardView.verifyDeletingMoviesFromShorlist();
	cardView.returnToBaseState(); 

};












