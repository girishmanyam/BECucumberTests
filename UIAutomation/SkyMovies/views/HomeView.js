/***************************************************************************************
 *Home view is a base class for movies app to Navigation elements, settings, search , card and grid view buttons
 *
 ****************************************************************************************/


MOVIES.HomeView = Class.extend(IOS.BaseView, {


	initialize: function()
	{
		this.parent();
		this.viewName = "HomeView" ;
	},


	//////////////////////////// View actions ///////////////////////////////////////////

	tapSettingsIcon : function()
	{	
		try {
			this.getNavBar().tapWithOptions({tapOffset:{x:0.95, y:0.43}});
			this.waitAction(1.5);
			return new MOVIES.SettingsView();	
		}	catch (e)
		{
			IOS.log_fail("Could not able to click on Settings  icon");
		}

	},


	/*tapGridIcon : function()
	{
		if (this.isDeviceiPad()) {
			pointx = 0.03;
			pointy = 0.47;
		}else
		{
			pointx = 0.05 ;
			pointy = 0.42;
		}
		try {
			this.getNavBar().tapWithOptions({tapOffset:{x:pointx, y:pointy}});
			this.waitAction(1.0) ;
		}
		catch(e)
		{
			IOS.log_info("Could not able to click on Grid icon");

		}
	}, */
	
	tapGridIcon :function()
	{
	    this.tapIconsOnNavBar("Grid");	
	},


	clickSearchIcon : function()
	{
		try {
			this.getNavBar().tapWithOptions({tapOffset:{x:0.90, y:0.51}});
			this.waitAction(1.5);
			return new MOVIES.SearchView(); }
		catch (e)
		{
			IOS.log_info("Could not able to click on Search icon");
		}

	},

	navigateCategory : function(title)
	{
		IOS.log_trace("TRACE : Inside the navigateCategory method")
		current_title = this.getNavBar().value();

		if(current_title =="")
		{
			IOS.log_info("Not able to find the Navbar bar");
			return;	
		}	

		//outer_loop:	
			if(current_title.indexOf(title.toUpperCase()) != -1)
			{
				IOS.log_info("User Already in the category");
				IOS.log_info("testing the index")
				return;	
			}	

		try
		{	
			//elem = this.target.frontMostApp().mainWindow().elements().firstWithPredicate("value like '"+ current_title +"'");
			elem = this.target.frontMostApp().mainWindow().elements()["navbar"];
			this.tapWithOptions(elem);
		} catch(e)
		{
			IOS.log_info("Could not able to tap on the navigation bar");
		}	


		var pointY =0;
		var navRect = this.getNavBar().rect();
		var height = navRect.size.height;
		var width = navRect.size.width;

		//set the navigation height by device type	
		if(this.isDeviceiPad())
		{
			HEIGHT_FACTOR = 0; }
		else
		{
			HEIGHT_FACTOR = 1;
		} 	



		pointX = Math.round(width/2);

		//get Y co-ordinate based the category name;	
		switch(title)
		{
		case "Daily Picks":	
			pointY = Math.round(((1-HEIGHT_FACTOR) * height) + (height * 70/100));
			break; 

		case "On Sky Movies":
			pointY = Math.round(((2-HEIGHT_FACTOR) * height) + (height * 70/100));
			break;

		case "Sky Store":
			pointY = Math.round(((3-HEIGHT_FACTOR) * height) + (height * 70/100));
			break;

		case "Coming Soon":
			pointY = Math.round((3 * height) + (height * 90/100));
			break;

		case "At The Cinema":
			pointY = Math.round((4 * height) + (height * 90/100));
			break;	

		case "Oscar Winners":
			pointY = Math.round((5 * height) + (height * 90/100));
			break;	
			
		case "Sky Movies 007":
			pointY = Math.round((6 * height) + (height * 90/100));
			break;			

		case "My Shortlist":
			pointY = Math.round((6.5 * height) + (height * 90/100));	
			break;

		default:
			IOS.log_info(" Invalid category name is passed");
		pointY = Math.round((height * 90/100));
		break;

		}	

		/*var newPointY =0;
		if(this.isDeviceiPad())
		{
			if ((title == "Daily Picks") || (title == "On Sky Movies"))
				{
			      IOS.log_info("Height" + height);
					newPointY = Math.round(height + pointY); 
				} else 
					{
					newPointY = pointY;			
					}					
		}
	    else
	    {
	    	newPointY = pointY;
	    } 	*/





		this.target.delay(1.0);
		try
		{	
			this.target.tap({x:pointX, y:pointY});
			this.target.delay(1.0);
			IOS.log_info( "Now the category title is "   +  this.target.frontMostApp().mainWindow().elements()["navbar"].value())
		} catch(e)
		{
			IOS.log_info("Could not able to navigate to category");
		}	
		title = "";

	},
	

	tapIconsOnNavBar :function(iconType)
	{
		try {
			var positions = this.getNavBar().rect()
			var height = positions.size.height
			var width = positions.size.width
			
			//IOS.log_info("hieght " + height);

		//	IOS.log_info("width " + width);

			var iconHeight ;
			var iconWidth ;

			//to tap settings icon
			switch(iconType)
			{
			case "Settings": 
			iconWidth = (width - (height/2));
			break; 
			case "Search":
				iconWidth = (width -(height/2)) - (1 * height);
				break;
			case "littleMan":
				iconWidth = (width -(height/2)) - (2 * height) + (height/4);
				break;
			case "Grid" || "Close":
				iconWidth = height/2 ; break;
			case "Home":
				iconWidth = (width - (height/2));
				break; 
			default:
				IOS.log_info("None of the iconType is correct");
			break;

			}	

			iconHeight = height/2 ;	
			this.target.tap({x:iconWidth, y:iconHeight})

		} catch (e)
		{

			IOS.log_debug("Not able perfrom the action :" + iconType);
		}

	},
	
	closeChildDialog : function()
	{
	try {
       var index = this.getSettingsOrSearchDailog().rect();
       var height = index.size.height
	   var width = index.size.width
	   
	   var targetPosition = this.target.rect();
       
       var targetHeight = targetPosition.size.height
       var targetWidth  = targetPosition.size.width
       
      // IOS.log_info("targetHeight " + targetHeight); 
     //  IOS.log_info("width " + width); 
       
       var distanceWidth = (targetWidth - width)/2 + height/2;
       IOS.log_info("distanceWidth " + distanceWidth); 
       IOS.log_info("width " + width); 
      this.target().tap({x:distanceWidth, y:height/2})
		
	}
	catch(e)
	{
		
		IOS.log_info("Error occured when closing  child Dialogs")
	}
	},


	isCardView : function()
	{

		return !this.isGridView();

	},

	isGridView : function()
	{
		isGridView = false;
		var element = null;
		try {
			var genreElement = this.getGenreScrollView().staticTexts()["ALL"];
			if (this.getGenreScrollView().isVisible())
			{ 
				isGridView = true;
			} 		
		}catch (e)
		{

			IOS.log_info("Could not able to locate filter element");
			isGridView = false;
		}

		return isGridView;
	}, 

	getCountOnNavBar : function()
	{
		var counter = 0 ;
		hintValue  = this.getNavBar().hint();
		if (hintValue != 0)
		{	//UIALogger.
			counter = hintValue.split("/");
			return counter[1];
		} else 
		{
			return 0; 
		}

	},	

	getCurrentIndex :function()
	{
		var counter = 0 ;
		hintValue  = this.getNavBar().hint();
		if (hintValue !== 0)
		{	
			counter = hintValue.split("/");
			return counter[0];
		} else 
		{
			return 0; 
		}

	},

	isKeyPresent : function(key)
	{
		return (key == undefined) ? false : true;
	},


	waitForActivityAction : function()
	{
		var w = UIATarget.localTarget().frontMostApp().mainWindow();
		this.waitForActivity(w,15);
		return this;
	}, 

	closeAlertIfPresent : function()
	{
		if(this.getAlert().isValid())
		{
			if(this.getAlertCancelButton().isValid())
			{
				this.getAlertCancelButton().tap();
			} else{
				if(this.getAlertDefaultButton().isValid())
				{
					this.getAlertDefaultButton().tap();
				}
			}
		}
	},

	closeAllDialogs : function()
	{
		IOS.log_trace("TRACE : Inside closeAllDailogs method");
		if(this.getSettingsOrSearchDailog().isValid())
		{ 
			do {

				this.getSettingsOrSearchDailog().buttons()[0].tap();
				this.waitAction(0.5);

			}while(this.getSettingsOrSearchDailog().isValid())
		}

	},

	resetFilterBar :function()
	{

////		try { 
////		this.getGenreScrollView().staticTexts()["ALL"].scrollToVisible();
////		IOS.log_info("test")  
////		var elemAll = this.getGenreScrollView().staticTexts()["ALL"]
////		this.tapWithOptions(elemAll);
////		this.waitAction(0.5)
////		this.getCertScrollView().staticTexts()[0].tap() ;
////		this.waitAction(0.5)	
////		cer18 = this.getCertScrollView().staticTexts()[5];
////		if (cer18.isVisible() && (cer18.value() =="18"))
////		{
////		this.tapWithOptions(cer18);
////		}
////		} catch (e)
////		{
////		IOS.log_info("Could not able to resetFilter bar element")
////		}

		try {
			this.getGenreScrollView().staticTexts()["All"].scrollToVisible();
			var elemGenreAll = this.getGenreScrollView().staticTexts()["All"]
			this.tapWithOptions(elemGenreAll);
			this.waitAction(0.5)
			//check ALL Cert is selected
			if(!this.getCertScrollView().staticTexts()["ALL"].isVisible())
			{
				var elemCert = this.getCertScrollView().staticTexts()["Cert"]  
				this.tapWithOptions(elemCert); //tap on any Cert label
				this.waitAction(0.5)
				var elemAll = this.getCertScrollView().staticTexts()["All"] 
				this.tapWithOptions(elemAll); // tap on the ALL Cert label to reset
			}

		} catch(e)
		{
			IOS.log_info("Could not able to resetFilter bar element")

		}

	},

	verifyFilterViewShouldNotBePresent: function()
	{
       
     Assert.assertTrue(!this.isFilterViewIsPresent(), "Filter bar should not be displayed")

	},

    isFilterViewIsPresent: function()
    {
        return this.getGenreScrollView().staticTexts()["All"].isVisible() && this.getCertScrollView().staticTexts()["ALL"].isVisible()
    },

	returnToBaseState :function()
	{
		this.closeAlertIfPresent()
		this.closeAllDialogs()
		this.navigateCategory("Daily Picks");
		if(this.isCardView())
		{
			this.tapGridIcon();
			this.waitAction(0.5);
		}
		this.resetFilterBar();	
		this.waitAction(1.0)
	},


	populateTestData : function()
	{
		var url = this.getCategoriesAllUrl();
		IOS.log_info("url is " + url);
		var target = UIATarget.localTarget();
		
		
		var host = UIATarget.localTarget().host();
		
		
		var result = host.performTaskWithPathArgumentsTimeout("/usr/bin/skm_uia_download", ["download", url, "movies"], 60);
		var response = eval("(" + result.stdout + ")");	
		status = response["status"];
		IOS.log_info("status in populateTestData" + status);
	},


	getCategoriesAllUrl : function()
	{
		return this.getBaseUrl() + IOS.constants.CATEGORY_URL;
	},

	getBaseUrl : function()
	{
		return IOS.constants.PUBLISHER_URL;
	},

	getUrlbyMovieId : function(movieId)
	{
		return this.getBaseUrl() + "asset?ids=" + movieId;

	},
	
    getJSONResponseByMovieId : function(movieId)
	{
		url = this.getUrlbyMovieId(movieId);
		var target = UIATarget.localTarget();
		var host = target.host();
		//IOS.log_info("URL is " + url);
	    var result = host.performTaskWithPathArgumentsTimeout("usr/bin/curl", [url], 60);
	return response = eval("(" + result.stdout + ")");
	},
	
	getReviewByMovieId :function(movieId)
	{
		url = this.getUrlbyMovieId(movieId) + "&include=id,body"
		var target = UIATarget.localTarget();
		var host = target.host();
	    var result = host.performTaskWithPathArgumentsTimeout("usr/bin/curl", [url], 60);
	    response = eval("(" + result.stdout + ")");
	   if (response != null) {
		 return  response[0]["body"];  }
		
		
	},
	
	 getTitleByMovieId : function(movieId)
	{
		result = this.getJSONResponseByMovieId(movieId);
		return (result != null) ? result[0]["headline"]: "Incorrect movie id"; 
	},
	
	 getMoviesCountByCategoryId :function(categoryId)
	{
	/*IOS.log_info("success" + status)	 
	if(status != "success") return; */
	//IOS.log_info("123" + status);
	IOS.log_info("reading the movies.data file" + categoryId);
	var target = UIATarget.localTarget();
	var host = target.host()
	var result = host.performTaskWithPathArgumentsTimeout("/usr/bin/skm_uia_download", ["data", "movies", categoryId], 60);
	IOS.log_info("reading the movies.data file");
	var response = eval("(" + result.stdout + ")");
		return response[0]["movies"].length;	
	},	

	 getMovieIdsByCategoryId : function(categoryId)
	{
		/* IOS.log_info("success" + status)
	if(status != "success") return; */
	//IOS.log_info("123" + status);		
	var target = UIATarget.localTarget();
	var host = target.host()
	var result = host.performTaskWithPathArgumentsTimeout("/usr/bin/skm_uia_download", ["data", "movies", categoryId], 60);
	//IOS.log_info("Response" + result.stdout);	
	var response = eval("(" + result.stdout + ")");
		return response[0]["movies"];
		
	},	
	
	fetchAiringsForMovieId  : function(movieId) 
	{
		var target = UIATarget.localTarget();
		var host = target.host()
		var result = host.performTaskWithPathArgumentsTimeout("/usr/bin/skm_uia_download", ["fetchairingsformovie", movieId], 60);
		var result = eval("(" + result.stdout + ")");	
		return result;	
	},
	
	getActiveAiringDays :function(movieId)
	{
		if(movieId == "") return;
		var response =  this.fetchAiringsForMovieId(movieId);
		if (response =="undefined") return;
		var days =["Today","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
		var new_days = new Array();
		var m = 0;	
		for(var k =0 ; k < days.length; k++)
		{
			if(this.isKeyPresent(response[0][days[k]]))
			{							
				new_days[m] = days[k];
				m = m + 1;
			}							  
		}

		var index = 0	
		var activeDays = new Array();							  
		for(var j =0 ; j < new_days.length; j++ )
		{ 
			for(var i = 0 ; i < response[0][new_days[j]].length ;i++) 
			{
				activeDays[index]	= new_days[j];
				index++	;
				break;

			}

		}
	return activeDays;	
	},

	verifyNavigationTitle : function(title)
	{
		Assert.assertEquals(this.getNavBar().value(),title,"Navigation title for category :"+ title);
	},

	verifyCategoryCount :function(count)
	{
	IOS.log_info(count);
	IOS.log_info(this.getCountOnNavBar());
		Assert.assertEquals(this.getCountOnNavBar(),count,"Number of movies " + this.getNavBar().value() + " in category is " + this.getCountOnNavBar());

	},
	/*getFilterBar : function(type)
	{
		if(this.isDeviceiPad() && (this.getCurrentOrientation() =="landscape") )
			{
			IOS.log_info("condition is OK")
							if(type =="Genre")
								{
								IOS.log_info("condition1 is OK")
									return this.getGenreScrollView(); 
								}
							else if(type =="Cert")
								{		
								  IOS.log_info("condition2 is OK")
									return	this.getScrollView1() ;
							    }
			}				
				else  {
							if (type == "Genre")
							 {	
								 return this.getScrollView1();
							 }
							else if(type =="Cert")
								{
									return this.getScrollView2();	
								} 
					 }	

	}, */

///////////////////// Helper functions //////////////////////////////////////////


	getNavBar : function()
	{
		return this.getElementFromView("navBar","HomeView");
		IOS.log_trace("Navigation element is" + this.getElementFromView("navBar","HomeView") );
		//return this;

	},

	/*getGenreScrollView : function()
	{
		return this.getElementFromView("genreScrollView","GridView");

	}, */

	getGenreScrollView :function()
	{
		return this.getElementFromView("scrollView1","GridView");
	},

	getCertScrollView :function()	
	{
		return this.getElementFromView("scrollView2","GridView");

	},




	getAlert : function()
	{
		return this.getElementFromView("alert","HomeView");
	},	

	getAlertCancelButton : function()
	{
		return this.getElementFromView("alert_cancel","HomeView");

	},

	getAlertDefaultButton : function()
	{
		return this.getElementFromView("alert_default","HomeView");

	},

	getSettingsOrSearchDailog : function()
	{
		return this.getElementFromView("searchNavBar","SearchBar");

	},


	testHomeView : function()
	{
		IOS.log_info("HomeView Class has no errors");

	}  







});
