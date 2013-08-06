
MOVIES.CardView = Class.extend(MOVIES.HomeView, {

initialize: function()
	{
		this.parent();
		this.viewName ="CardView";
		this.validateBaseState();
	},
	

	
validateBaseState :function()
	{
	  IOS.log_debug("Inside validateBaseState of Card view ");
	 // Assert.assertEquals("true",this.isCardView(),"In the card view");
	},


isMovieShortlisted : function()
{
	isMovieInShortlist = null;	
	//check shortlist button is visible
		if(this.getShotlistIndicator().isVisible())
		{
			isMovieInShortlist = true;
		} 
		else {
               isMovieInShortlist = false;
				IOS.log_info("Movie is not shortlisted");
		    }	
		return isMovieInShortlist;

},

getCardScrollView :function()
{
	if(this.isDeviceiPad())
	{
		return this.getElementFromView("IPAD_scrollView","CardView"); 
		}
	else
		{
			return this.getElementFromView("IPHONE_scrollView","CardView"); 
	    }
},



getHomeView : function()
{
	return new MOVIES.HomeView();
},


/*navigateCardView : function()
{
	try {
			if(!this.isCardView())
				{
					this.tapGridIcon();
				}		
	}catch (e)
	  {	
			IOS.log_debug("Could not able to navigate to card view from grid");
	  }

},*/

navigateCardView : function()
{
 var counter = 0;
 do {
	 this.tapGridIcon();
	 counter++;
	 this.waitAction(2.0);
    }while(this.isGridView() && counter < 5 )
},

navigateToMovieIndex :function(index)
{
	current_index = this.getCurrentIndex();
	IOS.log_info("Nav title" + current_index + "test" + this.getNavBar().value() );
	IOS.log_info("Nav titles" + (current_index ==1 && this.getNavBar().value() == "At The Cinema") );
	
	if (current_index == index)
	{
	IOS.log_info("Already in correct movie index");
	return;
	}
	
	/*(current_index ==1 && this.getNavBar().value() == "At The Cinema") ? UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[3].scrollRight():"Do nothing"
		
	this.waitAction(0.5);*/
	
	if(current_index > index)
		{
		 do{
			 this.getCardScrollView().scrollLeft();
			 this.waitAction(0.5);
			 //IOS.log_info("printing the current index"  + this.getCurrentIndex() )
			 
			}while(this.getCurrentIndex() > index)
		
		}
		
    if (current_index < index)		
    {
		 do{
			 this.getCardScrollView().scrollRight();
			 this.waitAction(0.5);
			}while(this.getCurrentIndex() < index)
		
		} 
},

verifyCardDetails : function(movieObject)
{
	if(!typeof movieObject == "object")
		{
		IOS.log_trace("Please send the JSON object in verify CardDetails");
		return;
		}
	IOS.log_info("Object in the verify card details" + movieObject);
	title = this.getMovieTitle(movieObject[0]["headline"]);
	duration = this.getDuration(movieObject[0]["duration"]);
	releaseYear = this.getKeyValue(movieObject[0]["year"])
	certLabel = this.getCertLabel(movieObject[0]["cert"])
	videos = this.isVideoPresent(movieObject[0]["videos"])
	svod = this.isKeyPresent(movieObject[0]["skyGoId"])
	shortlisted = this.isMovieShortlisted(); 
	Assert.assertEquals(this.getTitleFromTheCard(),title,"Title for the movie :" + title);
	Assert.assertEquals(this.getCardScrollView().staticTexts()[this.getIndexOfElement(duration)].value(),duration,"Duration on the card for movie :" + title);
	Assert.assertEquals(this.getCardScrollView().staticTexts()[this.getIndexOfElement(certLabel)].value(),certLabel,"Certificate on the card for movie :" + title);
	Assert.assertEquals(this.getCardScrollView().staticTexts()[this.getIndexOfElement(releaseYear)].value(),releaseYear,"Release Year on the card for movie :" + title);
	Assert.assertEquals(this.isTrailerIconPresent(),videos,"Trailer for the movie :" + title);
	Assert.assertEquals(this.isWatchButtonPresent(),svod,"SVOD for the movie :" + title); 
},

getIndexOfElement : function(value)
{
	getIndexOfElement = 0;
  elements = this.getCardScrollView().staticTexts().length
  IOS.log_info("elements" + elements);
	  for(var i = 0 ; i < elements ; i++ )
	     {
		 elemValue = this.getCardScrollView().staticTexts()[i].value()
		 if(elemValue == value)
			 {
			 getIndexOfElement = i;
			 return getIndexOfElement;
			 }
	    }
},

getDuration :function(key)
{
	if(this.isKeyPresent(key))
		{
		return  (key/60)+ " Min";	
		}
	else
		{
		return null;
		}
},

getKeyValue :function(key)
{
	if(this.isKeyPresent(key))
	{
	return key;	
	}
	else {
		return false;
	}
	
},


getCertLabel :function(key)
{
		try {			
			//return (this.isKeyPresent(key)) ? "CERT: " + key.toUpperCase() :null }
			return (this.isKeyPresent(key)) ? "Cert: " + key :null }
			catch(e)
			{
				return null;
			}	

},



getMovieTitle : function(key)
{
	
	if(this.isKeyPresent(key))
		{
		//return key.toUpperCase();
		return key.toString();
	
		}
	else
		{
		IOS.log_info("title key is present in the movie object");
		}
},

isVideoPresent : function(videos)
{
	blnFound = false
	if(this.isKeyPresent(videos))
	  {
	   no_of_videos = videos.length
	   outerLoop:
	   for (i = 0 ; i <=videos.length ; i++)
	   {
	   		if (videos[i]["type"] =="trailer")
	   		{
	   			blnFound = true;
	   			break outerLoop;
	   		}	   
	   
	   }

	   }
	 return blnFound;
},	


isTrailerIconPresent : function()
{
	return this.getTrailerIcon().isVisible() ? true :false


},

isTrailerIconNotPresent : function()
{
	return !(this.getTrailerIcon().isVisible()) ? true :false


},

navigateToMovieWithTrailer :function()
{
	if (this.isGridView()) { 
		
		this.tapIconsOnNavBar("Grid");
		this.waitAction(0.5)   };
	
	var result = this.isTrailerIconNotPresent()
	while(result)
		{
		this.getChildScrollView().scrollRight();
		this.waitAction(0.5)
		 result = this.isTrailerIconNotPresent();
		}
	Assert.assertTrue(this.isTrailerIconPresent(),"Trailer icon")

},

isWatchButtonPresent :function()
{
	return this.getWatchButton().isVisible() ? true :false

},


playAndVerifyTrailerFromPortalPage : function(categoryId,index)
{
   
	var moviesIds =this.getMovieIdsByCategoryId(categoryId)
	 var movieId = moviesIds[parseInt(index-1)];
	IOS.log_info( "card Number is " + moviesIds[parseInt(index-1)]);
	var response = this.getJSONResponseByMovieId(movieId)
	IOS.log_info("response" + response[0]["videos"]);
	var trailer_title = this.getTrailerTitleFromFeed(response[0]["videos"]);
	IOS.log_info("trailer title" + trailer_title + "trailer element " + this.getTrailersScrollViewInPortalPage());
	 trailerElement =  this.getTrailersScrollViewInPortalPage().staticTexts()[trailer_title];
	 if (typeof trailerElement != "undefined" && trailerElement.isVisible()) {
		//this.tapWithOptions(trailerElement);
		trailerElement.tap()
		this.waitAction(1.0)
		this.verifyTrailer();
	} else 
	  {
 		IOS.log_warning("Not able to selected the trailer in movie portal page  ");
     
	}

},

getTrailerTitleFromFeed :function(videoKey)
{
	if(this.isKeyPresent(videoKey))
	{
		IOS.log_info("test" + videoKey.length);
		for (i = 0 ; i <= videoKey.length ; i++)
		{ 
			if (videoKey[i]["type"] =="trailer")
			{
				//return videoKey[i]["title"].toUpperCase();
				return videoKey[i]["title"].toString();
				
			}	   

		}

	}
},


openMoviePortalPage : function()
{
	if(this.getInfoButton().isVisible())
	{
		IOS.log_info("Already in the movie portal page");
		
	} else
		{
		   if (this.getDetailsButton().isVisible())
		   {
			   
			   this.getDetailsButton().tap();
			   this.waitAction(0.5);
			   Assert.assertTrue(this.getDetailsButton().value(),"Movie portal page is displayed");
		   }
		
		
		}
},

closeMoviePortalPage : function()
{
  try {
	  
	/*if(this.getDetailsButton().isVisible())
	{
		IOS.log_info("Already in the card page");
		
	} else
		{ */
		   if (this.getDetailsButton().value())
		   {
			   
			   this.getDetailsButton().tap();
			   this.waitAction(0.5);
			   Assert.assertTrue(this.isPortalPageClosed(),"Movie portal page is closed");
		   }
		} // }
     catch (e)
     {
    	 IOS.log_debug("Unable to locate the details or info button")
    	 
     }
},

isPortalPageClosed : function()
{

    return  this.getDetailsButton().value() ? isPortalPageClosed = false : isPortalPageClosed = true;

},


addMoviesToShortList :function(times)
{
	var arr_titles = new Array();
	if(!typeof times == "integer")
	{
		IOS.log_debug("Please input the numbers for adding the movies to shorlist");
		return;
	}
	for(var i =0;i< times ; i++)
	{ 
		if(!this.isMovieShortlisted())
		{
			this.tapShortlistButton();
			this.waitAction(5.0);
			Assert.assertTrue(this.isMovieShortlisted(),"Movie ::" + this.getTitleFromTheCard() + " is added to Shortlist")
			arr_titles[i] = this.getTitleFromTheCard();
			if (i < (times -1))
			{
				this.getCardScrollView().scrollRight();
				this.waitAction(1.0); 
			} 
		} else
		{
			this.getCardScrollView().scrollRight();
			this.waitAction(1.0); 
			times = times +1;
		}


	}
	return arr_titles;

},

emptyShortlistCategory:function()
{
	IOS.log_info("Empty Shortlist Category");
	//this.navigateCategory("My Shortlist"); 
	this.waitAction(0.5)
	while(this.getCardScrollView().buttons()["More"].isVisible())
	{
		this.tapShortlistButton();
		this.waitAction(2.0);

	}
},


verifyOnlyActorsOrDirectors : function(cast ,type)
{
	IOS.log_info("type " + type)
	var blnFound  = false
	var strActors ="";
	switch(type)
	{
	case "Actor": 
		strActors = this.getActorsElement().value();
	break; 
	case "Director":
		strActors = this.getDirectorsElement().value();
		break;
	default:
		IOS.log_info("Input the type as Actor or Director");
	break;

	}	

	//(type =="Actor")  ? strActors = this.getActorsElement().value() : strActors = this.getDirectorsElement().value();
	IOS.log_info("strActors  " + strActors);
	//if (strActors == "undefined") { return }
	var arrActorOrDirectors =  this.formatActualActorsOrDirectors(strActors)
	//IOS.log_info("cast:: " + cast)
//	IOS.log_info("arrActorOrDirectors"  + arrActorOrDirectors);
	for(var i = 0 ; i < arrActorOrDirectors.length ; i++)
		{
			//if(arrActorOrDirectors[i] == cast.toUpperCase())
			if(arrActorOrDirectors[i] == cast)
			{
				blnFound = true
				break;
			}
		}	

Assert.assertTrue(blnFound,"Search by actor or Director " + cast );
},

verifyShortlistedMoviesInOrder : function(arr_titles)
{
	if (arr_titles.length == 0)
	{
		Assert.assertEquals(arr_titles[0].toString(),this.getTitleFromTheCard(),"Movie:" + this.getTitleFromTheCard() + "in the shortlist")
	}
	else {
		for (var i = 0 ; i < arr_titles.length ;i++)
		{
			Assert.assertEquals(arr_titles[i].toString(),this.getTitleFromTheCard(),"Movie :" + this.getTitleFromTheCard() + " in the shortlist")
			if(i != arr_titles.length) {
				this.getCardScrollView().scrollRight();
				this.waitAction(0.5);
			}

		}
	}
},



doScrollRight :function()
{
	this.getCardScrollView().scrollRight();
	this.waitAction(0.5);

},

doScrollRightUntilAiringIsPresentOnCard : function()
{
	var times = 0;
	while(this.getAiringsNextOnElement().isVisible() == false)
	{
		this.doScrollRight();
		times++;
	}
	return times;			
},

verifyDeletingMoviesFromShorlist : function()
{
	var count = this.getCountOnNavBar();
	var current_index = this.getCurrentIndex();
	if(current_index > 0)
	{   var i = 1;
		this.navigateToMovieIndex(1);
		do {
			
			this.tapShortlistButton();
			this.waitAction(2.0);
			
			Assert.assertEquals(parseInt(count-i), this.getCountOnNavBar(),"Count On Nav.Bar after removing the shorlist")
			i++;
		 }while (this.getCountOnNavBar() > 0)

	}

},

/*
formatExpectedActorsDirectors :function(arrObj)
{
IOS.log_info("format Expected Actors Directors " + arrObj);	
var arrActors = "";	
	if (arrObj.length > 1 )
	{	
		for (var i = 0 ; i < arrObj.length ; i++)
		{ 
			arrActors += arrObj[i]["name"].toUpperCase()
			if(i < (arrObj.length-1))
			{
			
				arrActors += " ,"
				
			}
			
		}	
			return arrActors;
	 }
	
	else {
	
			return arrObj[0]["name"].toUpperCase()
	
		} 	
	
},	
*/

formatExpectedActorsDirectors :function(arrObj)
{
	IOS.log_info("format Expected Actors Directos " + arrObj);	
	var arrActors = new Array();	
	for (var i = 0 ; i < arrObj.length ; i++)
	{ 
		//arrActors[i] = arrObj[i]["name"].toUpperCase()
		arrActors[i] = arrObj[i]["name"]
	}
	return arrActors;		

},	


formatActualActorsOrDirectors :function(actors)
{
	if (actors == null) return ;	
	var formattedActors = new Array();
	if (actors.indexOf("\n") != -1)
	{	
		var arrActors = "";	
		arrActors =  actors.split("\n");
		for(var i = 0 ; i < arrActors.length ; i++ )
		{
			formattedActors[i]= arrActors[i].replace(/>/,'').replace(/^\s+|\s+$/g, '');
		}
	}
	else {
		formattedActors[0] = actors.replace(/>/,'').replace(/^\s+|\s+$/g, '');
	}
	return formattedActors;
},

/*
formatActualActorsOrDirectors :function(actors)
{
 if (actors == null) return ;	
	
if (actors.indexOf("\n") != -1)
 {	
	var arrActors = "";
	var formattedActors ="";
	arrActors =  actors.split("\n");
	for(var i = 0 ; i < arrActors.length ; i++ )
	{

	if (arrActors[i].indexOf(">") != -1)
	{
	 	(i < (arrActors.length-1)) ? formattedActors += arrActors[i].replace(/>/,"") + "," : formattedActors += arrActors[i].replace(/>/,"");
	} 
		else {
				(i < (arrActors.length-1)) ? formattedActors  += arrActors[i] + "," :formattedActors  += arrActors[i];
				
		}
			}
	 }
	 else 
	 {
		 formattedActors = actors.replace(/>/,'').replace(/^\s+|\s+$/g, '');
	 }
return formattedActors;
}, */

getTitleFromTheCard : function()
{
	return 	this.getChildScrollView().elements()["titleLabel"].hint();
},

formatGenres :function(keys)
{
	if(keys.length > 1)
	{
		//var arrList = keys.sort().toString().toUpperCase()
		var arrList = keys.sort().toString()
		//arrList = arrList.sort()
		return arrList.replace(/,/g, "\n")

	} else
	{
		return keys  }

},


formatAirings :function(cellvalue)
{
	var arr_formatAiring = new Array();	
	var cellsValue = cellvalue.split(",");

	if (cellsValue.length == 3 ) {

		var splitCellValue1 = cellsValue[0] +","  + cellsValue[1] ;
		var splitCellValue2 = cellsValue[2] +"," +  cellsValue[1] ;
		arr_formatAiring[0] = splitCellValue1;
		arr_formatAiring[1] = splitCellValue2;	
	} else 
	{
		var splitCellValue3 = cellsValue[1] +"," + cellsValue[0]
		arr_formatAiring[0] = splitCellValue3;
	}  
	return 	arr_formatAiring;
},


verifyTrailer : function()
{  
		try {
				if (this.getTrailerSilders().isVisible()) {
					this.getTrailerSilders().dragToValue(0.30);
					this.tapCenterOftarget();
					this.tapCenterOftarget();	
				}
				if (this.getPauseButton().isVisible()) {
					this.getPauseButton().tap();
					this.tapCenterOftarget() ;
					Assert.assertTrue(this.getPlayElement().isVisible(),"Play button");	
				}
				if(this.getPlayElement().isVisible())
				{
					this.getPlayElement().tap();
					this.tapCenterOftarget(); 
					Assert.assertTrue(this.getForwardButton().isVisible(),"Forward button");
				}

				if(this.getForwardButton().isVisible())
				{
					this.getForwardButton().tap();
					this.tapCenterOftarget();
					this.getForwardButton().tapWithOptions({tapCount:5});
					this.tapCenterOftarget()
					Assert.assertTrue(this.getRewindButton().isVisible(),"Rewind button");

				} 
				if(this.getRewindButton().isVisible())
				{
					this.getRewindButton().tapWithOptions({tapCount:5});
					this.tapCenterOftarget();
					Assert.assertTrue(this.getDoneButton().isVisible(),"Done button");
				}
         
				//this.tapCenterOftarget();
				//this.waitAction(0.5);
				
                     this.target.deactivateAppForDuration(10);
				    this.waitAction(1.0);
		}
		catch(err)
		{
				IOS.log_Info("Error occured while playing trailer");
				// force fully closing the trailer on failure.
				this.target.deactivateAppForDuration(10);
				this.waitAction(1.0);

		}
},


verifyAiringsOnPopOverForMovieId :function(movieId)
{
	
	//var isCard = this.getAiringsNextOnElement().isVisible();
	// to ensure pop over is closed
	this.tapCenterOftarget();
	if(this.getAiringsNextOnElement().isVisible() || this.getPortalAiringsNextOnElement().isVisible())
	{
		var isCard = this.getAiringsNextOnElement().isVisible();
		//to close any pop over if opened	
		this.tapCenterOftarget();
		
		if(isCard) {
				this.tapWithOptions(this.getAiringsNextOnElement())
		} else
			{
			 this.tapWithOptions(this.getPortalAiringsNextOnElement())
			}
		this.waitAction(0.5);


		if(this.getAiringPopoverTitleElement().isVisible())
		{ 
			var response = this.fetchAiringsForMovieId(movieId);
			var activeDays  = this.getActiveAiringDays(movieId);

			if(activeDays.length > 0 ) 
			{
				for (var k = 0; k < activeDays.length ;k++)
				{
					this.getAiringPopoverTable().segmentedControls()[0].buttons()[activeDays[k]].tap();
					this.waitAction(0.5);


					var cellLength = this.getAiringPopoverTable().cells().length
					var arr_airings = new Array();	
					var split_airings = new Array();	
					for (var i = 0 ; i < cellLength; i++ )
					{
						arr_airings[i] = this.getAiringPopoverTable().cells()[i].name();
					}
					IOS.log_info("arr_airings" + arr_airings);

					var airingsCounter  = 0;
					for (var m = 0 ; m < arr_airings.length ; m ++)
					{
						var channelNameWithTime = this.formatAirings(arr_airings[m]);
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
						//IOS.log_info("split_airings" + split_airings[f]);
						var channelWithAiring = split_airings[f].split(",");
						var actualChannelName = channelWithAiring[0].replace(/^\s+|\s+$/g, '');
						var actualAiring = channelWithAiring[1];
						//IOS.log_info("actualChannelName  " + actualChannelName );
						//IOS.log_info("actualAiring    " + actualAiring );
						var expectedTime = response[0][activeDays[k]][f]["startDateTime"].split(" ")
						//IOS.log_info("activeDays[k]" + expectedTime[0]);
						if(expectedTime[0].indexOf(":") < 0)
						{
							expectedTime[0] = expectedTime[0].replace("Pm","pm").replace("Am","am").replace(/^\s+|\s+$/g, '');
						} else {

							expectedTime[0] = expectedTime[0].replace("pm",".00pm").replace("am",".00pm").replace(/^\s+|\s+$/g, '');
						}

						//for(var i = 0 ; i < response[0][activeDays[k]].length ;i++) 
						//	{
						Assert.assertEquals(response[0][activeDays[k]][f]["channelName"], actualChannelName,"channel Name  ::" + split_airings[f] + "  for the movie " + cardView.getTitleFromTheCard())
						Assert.assertEquals(expectedTime[0], actualAiring.replace(/^\s+|\s+$/g, ''),"Airings time  ::" + expectedTime[0] + " for the movie " + cardView.getTitleFromTheCard() )				
					}
				}																	

			} 
		} 
		
	}	
		
		/*else 
		{
			//finally to close pop over, if its still open																			  
			this.tapCenterOftarget();
			this.waitAction(0.5); 
			
		}*/

},


verifyMoviePortalPage : function(movieObject)
{
	IOS.log_info("Inside the verify Movie portal page function");
	if(!typeof movieObject == "object")
	{
		IOS.log_info("Please send the JSON object in verifyMoviePortalPage");
		return;
	}

	title = this.getMovieTitle(movieObject[0]["headline"]);
	if( this.isKeyPresent(movieObject[0]["synopsis"]) ) {
		var synopsis =  movieObject[0]["synopsis"];
		Assert.assertEquals(synopsis,this.getCardScrollView().staticTexts()[this.getIndexOfElement(synopsis)].value(),"Synopsis is present for movie  :" + title); 
	}

	if(this.isKeyPresent(movieObject[0]["quote"]) )  {			
		var quote =	movieObject[0]["quote"];
		Assert.assertEquals(quote,this.getCardScrollView().staticTexts()[this.getIndexOfElement(quote)].value(),"Quote for movie  :" + title) }

	if(this.isKeyPresent(movieObject[0]["genres"]) ) {
		var genres = this.formatGenres(movieObject[0]["genres"]);
		Assert.assertEquals(genres,this.getCardScrollView().staticTexts()[this.getIndexOfElement(genres)].value(),"Genres for movie  :" + title)
	}

	if(this.isKeyPresent(movieObject[0]["cast"])) {
		var cast = this.formatExpectedActorsDirectors(movieObject[0]["cast"]);
		var actualCast = this.formatActualActorsOrDirectors(this.getActorsElement().value());
		if (cast.length > 1) {
			Assert.assertArraysAreEqual(cast, actualCast,"Cast for movie  :" + title); } 
		else
		{
			Assert.assertEquals(cast, actualCast,"Cast for movie  :" + title); } 
		//Assert.assertEquals(cast,actualCast,"Cast for movie  :" + title)
	}

	if(this.isKeyPresent(movieObject[0]["directors"])) {
		var director = this.formatExpectedActorsDirectors(movieObject[0]["directors"]);
		var actualDirector = this.formatActualActorsOrDirectors(this.getDirectorsElement().value());
		//Assert.assertEquals(director,actualDirector,"Director for movie  :" + title)
		if (director.length > 1) {
			Assert.assertArraysAreEqual(director, actualDirector,"Director for movie  :" + title); } 
		else
		{
		//	IOS.log_info("director " +  director.toString().replace(/^\s+|\s+$/g, ''));
		//	IOS.log_info("actualDirector " + actualDirector.toString().replace(/^\s+|\s+$/g, ''))
			Assert.assertEquals(director.toString().replace(/^\s+|\s+$/g, ''), actualDirector.toString().replace(/^\s+|\s+$/g, ''),"Director for movie  :" + title); } 
	}

},


verifyReview :function(movieId)
{
	var review = this.getReviewByMovieId(movieId)
	IOS.log_info("review" + review);
	if(review != undefined)
	{
		expectedReview = review.slice(0,100);
		//Assert.assertEquals(expectedReview,this.getCardScrollView().staticTexts()[this.getIndexOfElement(review)].value().slice(0,100),"review for movie ");
		//Assert.assertTrue(tthis.getCardScrollView().staticTexts(),"Rewind button");
	}

},



 verifyDOGonCard : function(movieId)
{
	var target = UIATarget.localTarget();
	if (movieId =="") return;
	var response = this.fetchAiringsForMovieId(movieId);
	
	var firstSection= "";
	var secoundSection= "";
	var thirdSection ="";
	if(response == "undefined") return ;

	if(this.isKeyPresent(response[0]["dog"]))
	{
		firstSection =   response[0]["dog"]["first"].replace(/^\s+|\s+$/g, '');
		//IOS.log_info("firstSection" +  firstSection);
		secoundSection =  response[0]["dog"]["middle"].replace(/^\s+|\s+$/g, '');
		//IOS.log_info("secoundSection" +  secoundSection);
		thirdSection  = response[0]["dog"]["last"].replace(/^\s+|\s+$/g, '');
		//IOS.log_info("thirdSection" +  thirdSection);
	}
	if (firstSection != "") Assert.assertTrue(this.getChildScrollView().staticTexts().firstWithPredicate("value like '"+ firstSection +"'").isVisible(),"DOG first section for movie title :: " + this.getTitleFromTheCard())
	if (secoundSection != "") Assert.assertTrue(this.getChildScrollView().staticTexts().firstWithPredicate("value like '"+ secoundSection +"'").isVisible(),"DOG Secound section for movie title :: " + this.getTitleFromTheCard())
	//IOS.log_info("result " + this.getChildScrollView().staticTexts().firstWithPredicate("value like '"+ secoundSection +"'").isVisible())
	if(thirdSection != "") Assert.assertTrue(this.getChildScrollView().staticTexts().firstWithPredicate("value like '" + thirdSection + "'").isVisible(),"DOG third section for for movie title :: " + this.getTitleFromTheCard())
},



verifyDOGonCardNew : function(movieId)
{
	var target = UIATarget.localTarget();
	if (movieId =="") return;
	var response = this.fetchAiringsForMovieId(movieId);
	
	var firstSection= "";
	var secoundSection= "";
	var thirdSection ="";
	
	var firstSectionActual ="";
	var secoundSectionActual= "";
	var thirdSectionActual ="";
	
	
	
	if(response == "undefined") return ;

	if(this.isKeyPresent(response[0]["dog"]))
	{
		firstSection =   response[0]["dog"]["first"].replace(/^\s+|\s+$/g, '');
		//IOS.log_info("firstSection" +  firstSection);
		secoundSection =  response[0]["dog"]["middle"]
		IOS.log_info("secoundSection" +  secoundSection);
		IOS.log_info("secoundActual" + this.getChildScrollView().staticTexts()["ViewingWindowDate"].value())
		thirdSection  = response[0]["dog"]["last"].replace(/^\s+|\s+$/g, '');
		IOS.log_info("thirdSection" +  thirdSection);
	}
	
	if (this.getChildScrollView().staticTexts()["ViewingWindowNextOn"].isVisible()) 
		{
			(this.getChildScrollView().staticTexts()["ViewingWindowNextOn"].isVisible()) ? firstSectionActual = this.getChildScrollView().staticTexts()["ViewingWindowNextOn"].value() :firstSectionActual = ""
			this.waitAction(0.1); // delay bcoz some times test fails	
			(this.getChildScrollView().staticTexts()["ViewingWindowDate"].isValid()) ? secoundSectionActual= this.getChildScrollView().staticTexts()["ViewingWindowDate"].value() : secoundSectionActual= "";
			IOS.log_info("secoundSectionActual : ViewingWindowDate"  + secoundSectionActual + " is visible " + this.getChildScrollView().staticTexts()["ViewingWindowDate"].value());
			(this.getChildScrollView().staticTexts()["ViewingWindowChannelName"].isVisible()) ?  thirdSectionActual = this.getChildScrollView().staticTexts()["ViewingWindowChannelName"].value() : thirdSectionActual= "";
		}
	
	if (this.getChildScrollView().staticTexts()["Card_AiringNextOn"].isVisible())
		{
		(this.getChildScrollView().staticTexts()["Card_AiringNextOn"].isVisible()) ? firstSectionActual = this.getChildScrollView().staticTexts()["Card_AiringNextOn"].value() :firstSectionActual = "";
		(this.getChildScrollView().staticTexts()["Card_AiringDate"].isVisible()) ? secoundSectionActual= this.getChildScrollView().staticTexts()["Card_AiringDate"].value() : secoundSectionActual= "";
		IOS.log_info("Actual value from the app" + secoundSectionActual);
		(this.getChildScrollView().staticTexts()["Card_AiringChannelName"].isVisible()) ? thirdSectionActual = this.getChildScrollView().staticTexts()["Card_AiringChannelName"].value() : thirdSectionActual= "";
		}
	
	
	if (this.getChildScrollView().staticTexts()["Portal_AiringNextOn"].isVisible())
	{
	(this.getChildScrollView().staticTexts()["Portal_AiringNextOn"].isVisible()) ? firstSectionActual = this.getChildScrollView().staticTexts()["Portal_AiringNextOn"].value() :firstSectionActual = "";
	(this.getChildScrollView().staticTexts()["Portal_AiringDate"].isVisible()) ? secoundSectionActual= this.getChildScrollView().staticTexts()["Portal_AiringDate"].value() : secoundSectionActual= "";
	IOS.log_info("Actual value from the app" + secoundSectionActual);
	(this.getChildScrollView().staticTexts()["Portal_AiringChannelName"].isVisible()) ? thirdSectionActual = this.getChildScrollView().staticTexts()["Portal_AiringChannelName"].value() : thirdSectionActual= "";
	}

	if (firstSection != "") Assert.assertEquals(firstSection,firstSectionActual,"DOG first section for movie title :: " + this.getTitleFromTheCard())
	if (secoundSection != "") Assert.assertEquals(secoundSection.toString(),secoundSectionActual.toString(),"DOG Secound section for movie title :: " + this.getTitleFromTheCard())
	if (thirdSection != "") Assert.assertEquals(thirdSection,thirdSectionActual,"DOG third section for movie title :: " + this.getTitleFromTheCard())
},




doRemoteRecordRequest : function()
{
	try {

		var isAlert = false
		var title = ""
		var remoteRecordErrMessage = "";	

			UIATarget.onAlert = function onAlert(alert) { 

			title = alert.name()
			if(title == "Remote Record")
			{
				isAlert = true;
				remoteRecordErrMessage = alert.staticTexts()[1].name()
				alert.buttons()["OK"].tap()
				return true;
			} 

			return false;

		};

		if (!this.getRecordedIndicator().isVisible())
		{
			
			this.tapRecordButton();
			this.target.delay(2.0);
			
			
			if (this.getElementFromView("navBar","SettingsOptions").isVisible())
			{
				this.getElementFromView("userName","SettingsOptions").setValue(IOS.constants.USERNAME);
				this.getElementFromView("password","SettingsOptions").setValue(IOS.constants.PASSWORD);
				this.getElementFromView("IPAD_signIn","SettingsOptions").tap();
				//wait for the user to login
			
				this.getElementFromView("navBar","SettingsOptions").waitForInvalid()
				this.waitAction(2.0);
				
			}
			
		}
	}catch(err)
	{
		IOS.log_info("Error message for doRemoteRecordRequest call :" + err.message);
	}
	if (isAlert)
	{
		Assert.assertEquals(this.getRecordedIndicator().isVisible(), true, "Movie :" + this.getTitleFromTheCard() + " " + "is not recorded for error message   Title :: " + title +  "      Error message  :: " + remoteRecordErrMessage )

	}
	else {
		Assert.assertEquals(this.getRecordedIndicator().isVisible(), true, "Movie :" + this.getTitleFromTheCard() + " " + "is remoted recorded");
	} 
},

/*
handleAlert : function()
{
	
	UIATarget.onAlert = function onAlert(alert) {
		IOS.log_info("test on alert");
//		var title = alert.name();
//		if(title == "Remote Record")
//		{
//			alert.buttons()["OK"].tap();
//			return true
//		}

		return false;
	}

},  */

scrollUntillMovieIsOnSky :function()
{
	IOS.log_info("Record button " + this.getRecordButton().isVisible())
	var times = 0;
	while(this.getRecordedIndicator().isVisible())
		{
		   this.doScrollRight();
		   times++;
		
		}

	return times
},


tapShortlistButton :function()
{

  if (this.getCardScrollView().buttons()["More"].isVisible())
       {
         
             this.getCardScrollView().buttons()["More"].tap();
             this.waitAction(0.1);
             if (this.getAddShortlistButton().isVisible()) {
             	this.getAddShortlistButton().tap();
             } else
             {
             	this.getRemoveShortlistButton().tap();
             }

             
       }

},

tapRecordButton :function()
{

  if (this.getCardScrollView().buttons()["More"].isVisible())
       {  
             this.getCardScrollView().buttons()["More"].tap();
             this.waitAction(0.1);
             if (this.getRecordButton().isVisible()) {
             	this.getRecordButton().tap();
             } else
             {
             	this.tapCenterOftarget();
             }

             
       }

},





isMovieTitlePresent : function(name)
{
	return this.getCardScrollView().elements()[name].isVisible()

},

isInfoButtonPresent :function()
{
	return this.getInfoButton().isVisible() ? true : false;
},


isDetailsButtonPresent :function()
{
	return this.getDetailsButton().isVisible() ? true : false;
},


getAddShortlistButton :function()
{
	
return this.getElementFromView("cardWindow","CardView").popover().buttons()["Add to shortlist"];
	
},

getRemoveShortlistButton :function()
{
	
		return this.getElementFromView("cardWindow","CardView").popover().buttons()["Remove from shortlist"];
	
},


getDetailsButton :function()
{
	return this.getChildScrollView().buttons()["Details"];

},

getInfoButton :function()
{
	return this.getChildScrollView().buttons()["Close"];

},


getTrailerIcon :function()
{
	if(this.isDeviceiPad())
	{
		return this.getChildScrollView().buttons()["Trailer"];
	}

},

getShotlistIndicator:function()
{
   return this.getChildScrollView().images()["marked-shortlist"];

},

getRecordedIndicator :function()
{
return this.getChildScrollView().images()["Recorded"];
},


getWatchButton :function()
{
	if(this.isDeviceiPad())
	{
		return this.getElementFromView("IPAD_watch","CardView");
	}

},

getTrailersScrollViewInPortalPage :function()
{
	return this.getChildScrollView().scrollViews()[0];

},


getActorsElement :function()
{
	return this.getChildScrollView().staticTexts()["actorsLabel"];

},

getDirectorsElement :function() 
{
	return this.getChildScrollView().staticTexts()["directorsLabel"]
},

getRecordButton : function()
{
	return this.getElementFromView("cardWindow","CardView").popover().buttons()["Record"];

},

getRecordedButton : function()
{
	
	return this.getChildScrollView().buttons()[" Sent"]

},

getChildScrollView :function()
{
	var parentScrollView =	this.getMainScrollView();
	var scrollViewList = this.getMainScrollView().scrollViews();
	for(var i = 0 ; i < scrollViewList.length; i++)
	{
		if(scrollViewList[i].rect().origin.x == 0)
		{
			return scrollViewList[i];
		} 
	}
},

getAiringsNextOnElement :function()
{
return this.getCardScrollView().staticTexts()["Card_AiringNextOn"];
},

getPortalAiringsNextOnElement :function()
{
return this.getCardScrollView().staticTexts()["Portal_AiringNextOn"];
},

getMainScrollView :function()
{
	return this.getElementFromView("IPAD_mainScrollView","CardView");
},


getAiringPopoverTable : function()
{
	return this.getElementFromView("airingPopoverTable","CardView");
},

getAiringPopoverTitleElement : function()
{
	return this.getAiringPopoverTable().staticTexts()["AiringPopoverTitle"]

},


getTrailerSilders :function() 
{
	return this.getElementFromView("trailerSilders","Trailer");
},

getFullScreenButton : function() 
{
	return this.getElementFromView("fullScreenButton","Trailer");
},

getPauseButton :function() 
{
	return this.getElementFromView("pauseButton","Trailer");
},

getPlayElement :function() 
{
	return this.getElementFromView("playElement","Trailer");
},
getForwardButton :function() 
{
	return this.getElementFromView("forwardButton","Trailer");
},

getRewindButton :function() 
{
	return this.getElementFromView("rewindButton","Trailer");
},

getDoneButton :function() 
{
	return this.getElementFromView("doneButton","Trailer");
},



getCardScrollView :function()
{
	/*if(this.isDeviceiPad())
		{
		return this.getElementFromView("IPAD_scrollView","CardView");
		}
	else {

		return this.getElementFromView("IPHONE_scrollView","CardView");
	  } */
	return this.getElementFromView("IPAD_scrollView","CardView");

}


});

