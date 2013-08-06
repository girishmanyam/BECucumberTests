

//global variables 
var NUMBERS_OF_MOVIE_FOR_AIRING =15;
var DAILYPICKSINDEX = 1;
var ONSKYMOVIESINDEX = 2;
var SKYSTOREINDEX = 3;
var COMMINGSOONINDEX = 4;
var ATCINEMAINDEX = 5;


function AiringInfoOnCardTests() {


};

AiringInfoOnCardTests.prototype.airingInfoForDailyPicksCategory = function()
{
	IOS.log_start("Verify airing information on card view for Daily picks category");
	cardView = new MOVIES.CardView();
	cardView.navigateCardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("Daily Picks")
	cardView.waitAction(1.0)
	cardView.navigateToMovieIndex(1); 
	cardView.waitAction(0.5);
	var dailyPicks_count = cardView.getMoviesCountByCategoryId(parseInt(DAILYPICKSINDEX))
	UIALogger.logMessage("count" + dailyPicks_count);

	var totalMovies;
	(dailyPicks_count > NUMBERS_OF_MOVIE_FOR_AIRING) ? totalMovies = NUMBERS_OF_MOVIE_FOR_AIRING : totalMovies =dailyPicks_count;
	UIALogger.logMessage("totalMovies" + totalMovies);
	var ids = cardView.getMovieIdsByCategoryId(parseInt(DAILYPICKSINDEX))

	for(var a =0 ; a < totalMovies ; a++)
	{
		cardView.verifyDOGonCardNew(ids[a])
		cardView.waitAction(0.5)
		cardView.doScrollRight();	
	}
	cardView.returnToBaseState(); 
	IOS.log_end("END OF TEST :Verify airing information on card view for Daily picks category") 
	
};


	AiringInfoOnCardTests.prototype.airingInfoForOnSkyMoviesCategory = function()
	{
		IOS.log_start("Verify airing information on card view for On Sky Movies category");
		cardView = new MOVIES.CardView();
		cardView.navigateCardView();
		cardView.waitAction(0.5)
		cardView.navigateCategory("On Sky Movies")
		cardView.waitAction(1.0)
		cardView.navigateToMovieIndex(1); 
		cardView.waitAction(0.5);
		var onSkyMovies_count = cardView.getMoviesCountByCategoryId(parseInt(ONSKYMOVIESINDEX))
		var totalOnSkyMovies;
		(onSkyMovies_count > NUMBERS_OF_MOVIE_FOR_AIRING) ? totalOnSkyMovies = NUMBERS_OF_MOVIE_FOR_AIRING : totalOnSkyMovies = onSkyMovies_count;
		var skyMoviesids = cardView.getMovieIdsByCategoryId(parseInt(ONSKYMOVIESINDEX))
		for(var s = 0 ; s < skyMoviesids ; s++)
		{
			UIALogger.logMessage("test");
			cardView.verifyDOGonCardNew(skyMoviesids[s])
			cardView.waitAction(0.5)
			cardView.doScrollRight();	
		}
		cardView.returnToBaseState(); 
		IOS.log_end("END OF TEST :Verify airing information on card view for On Sky Movies category") };

		AiringInfoOnCardTests.prototype.airingInfoForSkyStoreCategory = function()
		{
			IOS.log_start("Verify airing information on card view for Sky Store category");
			cardView = new MOVIES.CardView();
			cardView.waitAction(0.5)
			cardView.navigateCategory("Sky Store")
			cardView.waitAction(1.0)
			cardView.navigateCardView();
			cardView.waitAction(0.5)
			cardView.navigateToMovieIndex(1); 
			cardView.waitAction(0.5);
			var skyStore_count = cardView.getMoviesCountByCategoryId(parseInt(SKYSTOREINDEX))
			var totalSkyStoreMovies;
			(skyStore_count > NUMBERS_OF_MOVIE_FOR_AIRING) ? totalSkyStoreMovies = NUMBERS_OF_MOVIE_FOR_AIRING : totalSkyStoreMovies = skyStore_count;
//			UIALogger.logMessage("totalMovies" + totalMovies);
			var skyStoreids = cardView.getMovieIdsByCategoryId(parseInt(SKYSTOREINDEX))
			for(var a =0 ; a < totalSkyStoreMovies ; a++)
			{
				cardView.verifyDOGonCardNew(skyStoreids[a])
				cardView.waitAction(0.5)
				cardView.doScrollRight();	
			}
			cardView.returnToBaseState(); 
			IOS.log_end("END OF TEST :Verify airing information on card view for Sky Store category") 
			};
			
			

			AiringInfoOnCardTests.prototype.airingInfoForComingSoonCategory = function()
			{
				IOS.log_start("Verify airing information on card view for Coming Soon category");
				cardView = new MOVIES.CardView();
				cardView.waitAction(0.5)
				cardView.navigateCategory("Coming Soon")
				cardView.waitAction(1.0)
				cardView.navigateCardView();
				cardView.waitAction(0.5)
				cardView.navigateToMovieIndex(1); 
				cardView.waitAction(0.5);
				var comingSoon_count = cardView.getMoviesCountByCategoryId(parseInt(COMMINGSOONINDEX))
//				UIALogger.logMessage("count" + dailyPicks_count);

				var totalCommingSoonMovies;
				(comingSoon_count > NUMBERS_OF_MOVIE_FOR_AIRING) ? totalCommingSoonMovies = NUMBERS_OF_MOVIE_FOR_AIRING : totalCommingSoonMovies = comingSoon_count;
//				UIALogger.logMessage("totalMovies" + totalMovies);
				var commingSoonids = cardView.getMovieIdsByCategoryId(parseInt(COMMINGSOONINDEX))
				for(var a =0 ; a < totalCommingSoonMovies ; a++)
				{
					cardView.verifyDOGonCardNew(commingSoonids[a])
					cardView.waitAction(0.5)
					cardView.doScrollRight();	
				}
				cardView.returnToBaseState(); 
				IOS.log_end("END OF TEST :Verify airing information on card view for Coming Soon category") };
				
				
				

				AiringInfoOnCardTests.prototype.airingInfoForAtTheCinemaCategory = function()
				{
					IOS.log_start("Verify airing information on card view for At The Cinema category");
					gridView = new MOVIES.GridView();
					cardView = new MOVIES.CardView();
					gridView.returnToBaseState();
					gridView.waitAction(0.5) 
					gridView.navigateCategory("At The Cinema");
					var movies_inCinemas = gridView.getMovieIdsByCategoryId(parseInt(ATCINEMAINDEX));
					var inCinemas_title = gridView.getTitleByMovieId(movies_inCinemas[0]);
					var category_count = gridView.getMoviesCountByCategoryId(parseInt(ATCINEMAINDEX));
					var result = gridView.findMovieIngridAndTap(inCinemas_title, category_count);
					gridView.waitAction(0.5) 
					var atTheCinema_count = cardView.getMoviesCountByCategoryId(parseInt(ATCINEMAINDEX))
					var totalCinemaMovies;
					(atTheCinema_count > NUMBERS_OF_MOVIE_FOR_AIRING) ? totalCinemaMovies = NUMBERS_OF_MOVIE_FOR_AIRING : totalCinemaMovies = atTheCinema_count;
					var cinemaids = cardView.getMovieIdsByCategoryId(parseInt(ATCINEMAINDEX))
					for(var a =0 ; a < totalCinemaMovies ; a++)
					{
						cardView.verifyDOGonCardNew(cinemaids[a])
						cardView.waitAction(0.5)
						cardView.doScrollRight();	
					}
					cardView.returnToBaseState(); 
					IOS.log_end("END OF TEST :Verify airing information on card view for At The Cinema category")  };




