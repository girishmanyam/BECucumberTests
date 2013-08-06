

var NO_OF_GENRES = 7;
var NO_FILTERS_TO_SELECT = 3

function GenreAndCertificateTests() 
{
	//IOS.log_start("START:Certificate and Genre filter tests");
};


GenreAndCertificateTests.prototype.genreFilterView = function()
{
	IOS.log_start("START: Genre filter tests")
	filter = new MOVIES.GenreAndCertifcateFilterView()
	filter.navigateCategory("Daily Picks");
	filter.waitAction(1.0)
	filter.resetFilterBar();	
	filter.waitAction(0.5)
	genresList = filter.getGenreList()
	IOS.log_info("genresList  " + genresList)
	var genreLength = ((genresList.length > NO_OF_GENRES) ? NO_OF_GENRES : genresList.length)
	IOS.log_debug("genreLength " + genreLength);

	if (genresList != "")
	{
		for (var i = 0 ; i < genreLength ; i++)
		{
			filter = new MOVIES.GenreAndCertifcateFilterView(); 
			filter.selectGenreFilterElement(parseInt(i+1));
			filter.waitAction(1.0);
			var expectedGenre = genresList[i]
			var actualGenre = filter.getGenreTitle();
			IOS.log_info("actualGenre*******   "  + actualGenre);
			Assert.assertEquals(expectedGenre, actualGenre,"Navigation title bar should contain genre in Grid view: " + genresList[i]);
			var genreCount = filter.getCountOnNavBar();
			if (genreCount > 0 )
			{
				cardView = new MOVIES.CardView();	
				cardView.navigateCardView();
				cardView.waitAction(1.0);
				Assert.assertEquals(expectedGenre,actualGenre,"Navigation title bar should contain genre in card view : " + genresList[i]);
				cardView.openMoviePortalPage();
				cardView.waitAction(0.5)
				Assert.assertTrue(cardView.getCardScrollView().staticTexts().firstWithPredicate("value Contains '" + expectedGenre + "'").isValid(),"Genre  " + genresList[i] + " filters the movie with the ' " + expectedGenre)	
				cardView.closeMoviePortalPage();
				cardView.waitAction(2.0)	
				cardView.tapGridIcon()
				cardView.waitAction(2.0)
				cardView = null;
				filter = null;	

			} 	
		} 
	} 

},



GenreAndCertificateTests.prototype.certificateFilterView = function()
{
	IOS.log_start("START: Certificate filter tests")
	filter = new MOVIES.GenreAndCertifcateFilterView()
	filter.navigateCategory("On Sky Movies");
	filter.waitAction(1.0)
	filter.resetFilterBar();	
	filter.waitAction(0.5)
	var certList = filter.getCertificateList();
	IOS.log_debug("certList  " + certList)

		if (certList != "")
		{
			for (var i = 0 ; i < certList.length - 1 ; i++)
			{
				IOS.log_debug("certList[i] " + certList[i]);
				filter.selectCertificateFilter(i)
				filter.waitAction(1.0);
				var actualCert = "CERT "+  certList[i];
				var expectedCert = filter.getCertTitle();
				IOS.log_info("expectedCert"  + expectedCert);
				Assert.assertEquals(expectedCert, actualCert,"Navigation title bar should contain Certificate filter in grid view : " + certList[i]);   
				var certCount = filter.getCountOnNavBar();
				if (certCount > 0 )
				{
					cardView = new MOVIES.CardView();	
					cardView.navigateCardView();
					cardView.waitAction(1.0);
					Assert.assertEquals(expectedCert, actualCert,"Navigation title bar should contain Certificate filter in card view : " + certList[i]);	
					Assert.assertTrue(cardView.getCardScrollView().staticTexts().firstWithPredicate("value Contains '" + certList[i] + "'").isValid(), "Certificate on is present on the card:" + certList[i]);
					cardView.waitAction(2.0)	
					cardView.tapGridIcon()
					cardView.waitAction(2.0)	

				} 	

			}	

		} 

		}, 
	   
	   
GenreAndCertificateTests.prototype.genreAndCertificateFilterView = function()
{
	IOS.log_start("START: Certificate and  Genre filter tests")
	filter = new MOVIES.GenreAndCertifcateFilterView()
	filter.navigateCategory("On Sky Movies");
	filter.waitAction(1.0)
	filter.resetFilterBar();	
	filter.waitAction(0.5)
	var certList = filter.getCertificateList();
	var genresList = filter.getGenreList();
	UIALogger.logMessage("CERTLIST" + genresList);

		for(var m = 0 ; m < NO_FILTERS_TO_SELECT ; m++)
		{
			filter.selectGenreFilterElement(parseInt(m+1));
			filter.waitAction(1.0);
			filter.selectCertificateFilter(m)
			filter.waitAction(1.0);
			var expectedGenre = genresList[m]
			var actualGenre = filter.getGenreTitle();
			var actualCert = "CERT "+  certList[m];
			var expectedCert = filter.getCertTitle().replace(/^\s+|\s+$/g, '');
			Assert.assertEquals(expectedGenre, actualGenre,"Navigation title bar should contain Genre in Grid view: " + genresList[m]);
			Assert.assertEquals(expectedCert, actualCert,"Navigation title bar should contain Certificate filter in grid view : " + certList[m]);   
			var filterCount = filter.getCountOnNavBar();
					if (filterCount > 0 )
					{
						cardView = new MOVIES.CardView();	
						cardView.navigateCardView();
						cardView.waitAction(1.0);

						Assert.assertEquals(expectedGenre, actualGenre,"Navigation title bar should contain Genre in Card view: " + genresList[m]);
						Assert.assertEquals(expectedCert, actualCert,"Navigation title bar should contain Certificate filter in Card view : " + certList[m]);	
						Assert.assertTrue(cardView.getCardScrollView().staticTexts().firstWithPredicate("value Contains '" + certList[m] + "'").isValid(), "Certificate on is present on the card:" + certList[m]);
						cardView.openMoviePortalPage();
						cardView.waitAction(0.5)
						Assert.assertTrue(cardView.getCardScrollView().staticTexts().firstWithPredicate("value Contains '" + expectedGenre + "'").isValid(),"Genre  " + genresList[m] + " filters the movie with the ' " + expectedGenre)	
						cardView.closeMoviePortalPage();
						cardView.waitAction(2.0)	
						cardView.tapGridIcon()
						cardView.waitAction(2.0)		
					}

			}
	
	}



