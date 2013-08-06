
IOS.settings.logLevel = IOS.logLevels.LOG_INFO



function MovieCardAndPortalPageTests() 
{
	
};


MovieCardAndPortalPageTests.prototype.dailyPicksCardAndMoviePortalPage = function()
 {
	IOS.log_start("Verify the card and movieportal page contents with feed for Daily picks category");
	cardView = new MOVIES.CardView();
	cardView.navigateCardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("Daily Picks");
	cardView.waitAction(1.0)
	cardView.navigateToMovieIndex(1);
	var movies_dailypicks = cardView.getMovieIdsByCategoryId(1);
	var response = cardView.getJSONResponseByMovieId(movies_dailypicks[0]);
	cardView.verifyCardDetails(response); 
	cardView.openMoviePortalPage();
	cardView.verifyMoviePortalPage(response);
	cardView.verifyReview(movies_dailypicks[0]);
	cardView.closeMoviePortalPage(); 
	cardView.returnToBaseState(); 
	IOS.log_end("END OF TEST :Verify the card and movieportal page contents with feed for Daily picks category")

};

MovieCardAndPortalPageTests.prototype.skyMoviesCardAndMoviePortalPage = function()
{
	IOS.log_start("Verify the card and movieportal page contents with feed for On Sky Movies category");
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("On Sky Movies");
	cardView.waitAction(1.0)
	cardView.navigateCardView();
	cardView.waitAction(2.0)
	cardView.navigateToMovieIndex(1);
	var moviesId_onSkyMovies = cardView.getMovieIdsByCategoryId(2);
	var response = cardView.getJSONResponseByMovieId(moviesId_onSkyMovies[0]);
	cardView.verifyCardDetails(response);
	cardView.openMoviePortalPage();
	cardView.verifyMoviePortalPage(response);
	cardView.verifyReview(moviesId_onSkyMovies[0]);
	cardView.closeMoviePortalPage(); 
	cardView.returnToBaseState();  
	IOS.log_end("END OF TEST :Verify the card and movieportal page contents with feed for On Sky Movies category");
};

MovieCardAndPortalPageTests.prototype.skyStoreCardAndMoviePortalPage = function()
{
	IOS.log_start("Verify the card and movieportal page contents with feed for Sky Store category");
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("Sky Store");
	cardView.waitAction(1.0)
	cardView.navigateCardView();
	cardView.waitAction(2.0)
	cardView.navigateToMovieIndex(1);
	var movies_skyStore = cardView.getMovieIdsByCategoryId(3);
	var response = cardView.getJSONResponseByMovieId(movies_skyStore[0]);
	cardView.verifyCardDetails(response); 
	cardView.openMoviePortalPage();
	cardView.verifyMoviePortalPage(response);
	cardView.verifyReview(movies_skyStore[0]);
	cardView.closeMoviePortalPage();
	cardView.returnToBaseState();
	IOS.log_end("END OF TEST :Verify the card and movieportal page contents with feed for Sky Store category");
};


MovieCardAndPortalPageTests.prototype.comingSoonCardAndMoviePortalPage = function()
{
	IOS.log_start("Verify the card and movieportal page contents with feed for Coming Soon category");
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5);
	cardView.navigateCategory("Coming Soon");
	cardView.waitAction(1.0)
	cardView.navigateCardView();
	cardView.waitAction(2.0)
	cardView.navigateToMovieIndex(1);
	var movies_comingSoon = cardView.getMovieIdsByCategoryId(4);
	var response = cardView.getJSONResponseByMovieId(movies_comingSoon[0]); 
	cardView.verifyCardDetails(response); 
	cardView.openMoviePortalPage();
	cardView.verifyMoviePortalPage(response);
	cardView.verifyReview(movies_comingSoon[0]);
	cardView.closeMoviePortalPage(); 
	cardView.returnToBaseState();
	IOS.log_end("END OF TEST :Verify the card and movieportal page contents with feed for Coming Soon category");
};

MovieCardAndPortalPageTests.prototype.atCinemaCategoryCardAndMoviePortalPage = function()
{
	IOS.log_start("Verify the card and movieportal page contents with feed for At The Cinema category");
	gridView = new MOVIES.GridView();
	cardView = new MOVIES.CardView();
	gridView.returnToBaseState();
	gridView.waitAction(0.5) 
	gridView.navigateCategory("At The Cinema");
	var movies_inCinemas = gridView.getMovieIdsByCategoryId(5);
	var inCinemas_title = gridView.getTitleByMovieId(movies_inCinemas[0]);
	var category_count = gridView.getMoviesCountByCategoryId(5);
	result = gridView.findMovieIngridAndTap(inCinemas_title, category_count);
	gridView.waitAction(0.5) 
	var response = gridView.getJSONResponseByMovieId(movies_inCinemas[0]);
	cardView.verifyCardDetails(response); 
	cardView.openMoviePortalPage();
	cardView.verifyMoviePortalPage(response);
	cardView.verifyReview(movies_inCinemas[0]);
	cardView.closeMoviePortalPage() ;
	cardView.returnToBaseState();
	IOS.log_end("END OF TEST :Verify the card and movieportal page contents with feed for At The Cinema category");
};


