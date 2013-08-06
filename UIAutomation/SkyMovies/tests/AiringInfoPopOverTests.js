#import "../project.js"

var DAILYPICKSINDEX =1;
var AIRINGS_MOVIES_COUNT = 20;


function AiringPopOverTests() 
{
	

};



AiringPopOverTests.prototype.airingPopoverOnCardTests = function() 
{
IOS.log_start("Verify airing information on POP OVER for Daily picks category");
cardView = new MOVIES.CardView();
cardView.navigateCardView();
cardView.waitAction(0.5)
cardView.navigateCategory("Daily Picks")
cardView.waitAction(1.0)
cardView.navigateToMovieIndex(1); 
cardView.waitAction(0.5);
var dailyPicks_count = cardView.getMoviesCountByCategoryId(parseInt(DAILYPICKSINDEX))
var ids = cardView.getMovieIdsByCategoryId(parseInt(DAILYPICKSINDEX))
var totalMovies;
(dailyPicks_count > AIRINGS_MOVIES_COUNT) ? totalMovies = AIRINGS_MOVIES_COUNT : totalMovies =dailyPicks_count

for(var i = 0 ; i < totalMovies ; i++)
	{
	if(!cardView.getAiringsNextOnElement().isVisible())
	{
		var counter = cardView.doScrollRightUntilAiringIsPresentOnCard()
		i += counter;
	}
	UIALogger.logMessage("ids" + ids)
	var movieIndex = cardView.getCurrentIndex()
	UIALogger.logMessage("Movie id " + ids[parseInt(movieIndex-1)])
	if(movieIndex > 0 )
	{
		cardView.verifyAiringsOnPopOverForMovieId(ids[parseInt(movieIndex-1)])
		cardView.tapCenterOftarget();
		cardView.waitAction(0.5);
		cardView.openMoviePortalPage()
		cardView.verifyAiringsOnPopOverForMovieId(ids[parseInt(movieIndex-1)])
		cardView.tapCenterOftarget();
		cardView.waitAction(0.5);
		cardView.closeMoviePortalPage();
		cardView.waitAction(0.5);
		cardView.doScrollRight();
	} 	
		
 }		

cardView.returnToBaseState(); 
IOS.log_end("END OF TEST :Verify airing information on POP OVER for Daily picks category") 
};

		

//cardView.doScrollRightUntilAiringIsPresentOnCard();

	
	//cardView.verifyDOGonCardNew(ids[a])
	//cardView.waitAction(0.5)
	//cardView.doScrollRight();	
//}


//UIALogger.logMessage("count" + dailyPicks_count);
//cardView.doScrollRightUntilAiringIsPresentOnCard();
//cardView.verifyAiringsOnPopOverForMovieId("8a3e8899288c6a5e0128b5d578b65638")
//cardView.tapCenterOftarget();
//cardView.waitAction(0.5);


/*
cardView.tapCenterOftarget();
if(cardView.getAiringsNextOnElement().isVisible())
{
	
//to close any pop over if opened	
cardView.tapCenterOftarget();
cardView.tapWithOptions(cardView.getAiringsNextOnElement());
cardView.waitAction(0.5);


  if(cardView.getAiringPopoverTitleElement().isVisible())
	{ 
		var response = cardView.fetchAiringsForMovieId("8a3e88992e7bd795012e963ceaae5d12");
		UIALogger.logMessage("response" + response);
		/*if (typeof response != "object")
			{
				break ;
			} */
		/*var activeDays  = cardView.getActiveAiringDays("8a3e88992e7bd795012e963ceaae5d12");
		 UIALogger.logMessage("true");
		
		if(activeDays.length > 0 ) 
			{
				for (var k = 0; k < activeDays.length ;k++)
				{
					cardView.getAiringPopoverTable().segmentedControls()[0].buttons()[activeDays[k]].tap();
					cardView.waitAction(0.5);
					
					
					var cellLength = cardView.getAiringPopoverTable().cells().length
					var arr_airings = new Array();	
					var split_airings = new Array();	
						for (var i = 0 ; i < cellLength; i++ )
								{
									arr_airings[i] = cardView.getAiringPopoverTable().cells()[i].name();
								}
					UIALogger.logMessage("arr_airings" + arr_airings);
					
						var airingsCounter  = 0;
							for (var m = 0 ; m < arr_airings.length ; m ++)
									{
	 									var channelNameWithTime = cardView.formatAirings(arr_airings[m]);
											if (channelNameWithTime.length == 2)
												{
													split_airings[airingsCounter] = channelNameWithTime[0]
													airingsCounter++;
													split_airings[airingsCounter] = channelNameWithTime[1]
													airingsCounter++;
												} else 
													{
													split_airings[airingsCounter] = channelNameWithTime[0]
													airingsCounter++;
													}
										}
		
							for(var f = 0 ; f < split_airings.length ; f++)
							{
								UIALogger.logMessage("split_airings" + split_airings[f]);
								var channelWithAiring = split_airings[f].split(",");
								var actualChannelName = channelWithAiring[0].replace(/^\s+|\s+$/g, '');
								var actualAiring = channelWithAiring[1];
								UIALogger.logMessage("actualChannelName  " + actualChannelName );
								UIALogger.logMessage("actualAiring    " + actualAiring );
								var expectedTime = response[0][activeDays[k]][f]["startDateTime"].split(" ")
								UIALogger.logMessage("activeDays[k]" + expectedTime[0]);
								if(expectedTime[0].indexOf(":") < 0)
										{
											expectedTime[0] = expectedTime[0].replace("PM",":00PM").replace("AM",":00AM").replace(/^\s+|\s+$/g, '');
										} 
									//for(var i = 0 ; i < response[0][activeDays[k]].length ;i++) 
									//	{
											Assert.assertEquals(response[0][activeDays[k]][f]["channelName"].toUpperCase(), actualChannelName,"channel Name  ::" + split_airings[f] + "  for the movie " + cardView.getTitleFromTheCard())
											Assert.assertEquals(expectedTime[0], actualAiring.replace(/^\s+|\s+$/g, ''),"Airings time  ::" + expectedTime[0] + " for the movie " + cardView.getTitleFromTheCard() )				
																				
									//	}
								//Do acutal verification here.													  
		
							}
						
						//cardView.tapCenterOftarget();
						//cardView.waitAction(0.5);	
																				  
						}																	
																					  
				} 
	} else 
	{
		//finally to close pop over, if its still open																			  
		cardView.tapCenterOftarget();
		cardView.waitAction(0.5); 	}
} */
