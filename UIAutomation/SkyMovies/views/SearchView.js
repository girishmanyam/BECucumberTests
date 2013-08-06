MOVIES.SearchView = Class.extend(MOVIES.HomeView, {

initialize: function()
	{
		this.parent();
		this.viewName ="SearchView";
		this.validateBaseState();
	},
	
	validateBaseState :function()
	{
	  IOS.log_debug("Inside validateBaseState of Search view");
	  Assert.assertEquals(this.getSearchNavBar().staticTexts()["Search"].isVisible(),"1","In the search view")
      Assert.assertEquals(this.getSearchNavBar().staticTexts()[0].name(),"Search","Search dialog is present");	
	  Assert.assertEquals(this.getSearchElement().value(),"Enter a movie title, actor or director","default text is present in search input element");
	  Assert.assertEquals(this.getCancelButton().isVisible(),"1","cancel button is present in search dialog");
	},

enterSearchInput :function(input)
{
	//check the default value in search input element
	try {
		this.setValue(this.getSearchElement(),input)
		this.waitAction(1.0);
	}
	catch (e)
	{
		IOS.log_debug("Could not enter the search input element");
	}
},

typeSearchInput :function(input)
{
	//check the default value in search input element
	try {
		if(this.getKeyboard().isVisible())
			{
				for (var i =0 ; i < input.length ; i++)
				{
					this.getKeyboard().typeString(title[i]);
					this.waitAction(0.5);
				}	
			}
	}
	catch (e)
	{
		IOS.log_debug("Could not type text into search input using key board");
	}
},

clickKeyBoardSearchButton : function()
{
	if(this.getKeyboard().isVisible())
		{
			this.getKeyboard().typeString("\n");
			this.waitAction(1.0);
		}
	else {
		     IOS.log_trace("TRACE :: Keyboars was not visible");						 					 
		}		
},


closeSearchDialog :function()
{
var element = this.getCancelButton();
	try{
		element.tap(); 	
	} catch(e)
	{
		IOS.log_fail("Could not able to tap on the cancel button");	
	}
},


clearSearchInput : function()
{								 
var element = this.getClearButton();
try {
	 if (this.getClearButton().isVisible())
		{ 
		 this.getClearButton().tap();}
	} catch (e)
	{
	IOS.log_fail("Could not able to tap on Search input element");	
	}
	
},	

selectFromSearchList :function(name)
{
var title ="";	
total_cells = this.getTablecells();
outerloop:
for(var i = 0; i < total_cells.length ;i++)
{
		try {
			title =  total_cells[i].name().split(",")
				IOS.log_info("" +title[0])	
			
				if(title[0] ==name)
					{
					total_cells[i].tap();	
					break outerloop ;	
					}
			
		} catch(e)
			{
			    IOS.log_debug("Select Search" + e);	
			}	
}	
	// TO DO :check user in card view 
		
	//swipe thro' in card view if no element is less than 8 
	if (title.length > 1) 
	{	
		movies = title[1]
		IOS.log_debug( "NO. OF SEARCH RESULTS" + movies)	
		no_cards = movies.split(" ")
		return no_cards[1] ;
	}

},


 swipeRight : function(times) 
{
    if (!typeof times == "integer")
		{
			IOS.log_debug("Invalid data to swipeRight function")
			return ;	
		}				   
		if (parseInt(times) > 1)
			{	var counter = 1;
				do {
					IOS.log_info ("looping" + counter)
					this.getSearchScrollView().scrollRight();
					this.waitAction(1.0)
					counter ++;
					} while(counter < times)
			}	
},

selectSearchResultsInGridAndVerifyActorOrDirectors : function(strCast, type)
{

	var keyArtImages = this.getElementFromView("IPAD_mainScrollView","CardView").scrollViews().length
	if (keyArtImages > 9 )
	{
		// tap on the grid image and do the tests in card view for verifying the actors and name and directors name

	}
	IOS.log_info(" keyArtImages " +  keyArtImages )

	IOS.log_info("Starting now 123***********************")	

	for(var i = 0 ; i < keyArtImages; i++)
	{

//		var scrollIndex = i % 2	
		var cgSizeNavBar  = this.getElementFromView("navBar","HomeView").rect()

//		IOS.log_info("I  " + i)
		var navHeight = cgSizeNavBar.size.height
		var navWidth = cgSizeNavBar.size.width


		//IOS.log_info("ScrollView[" + i +"]" + target.frontMostApp().mainWindow().scrollViews()[3].scrollViews()[i].isVisible())

		var cgPoint = "";	
		cgPoint = this.getElementFromView("IPAD_mainScrollView","CardView").scrollViews()[i].rect()

		var xPos = "";
		var yPos = "";
		var width = "";
		var height = "";
		xPos = cgPoint.origin.x
		yPos = cgPoint.origin.y	
     	width = cgPoint.size.width
		height =cgPoint.size.height 
		IOS.log_info("xPos " + xPos + "yPos" +  yPos)
		IOS.log_info("width " + width + "height" +  height)	
		var xCenter = Math.round(xPos + width/4)
		var yCenter = Math.round(yPos + height/2)	
		this.target.tap({x:xCenter, y:yCenter});
		this.target.delay(2.0)	
		this.verifyActorsOrDirectors(strCast, type)
		this.waitAction(0.5);
		//make a call to open the movie portal page and verify the actors and directors name
		this.target.tap({x: navHeight/2, y: navHeight})	
		this.target.delay(2.0)
	}	

	},


	verifyActorsOrDirectors : function(actorOrDirector, type)
	{
		
		var card = "";
		card  = new MOVIES.CardView();
		card.openMoviePortalPage()
		card.waitAction(0.5);
		card.verifyOnlyActorsOrDirectors(actorOrDirector,type)
		card.closeMoviePortalPage()
		
	},

returnToSearch :function()
{

this.getNavigationBar().tapWithOptions({tapOffset:{x:0.99, y:0.33}});	
Assert.assertEquals(this.getSearchNavBar().staticTexts()[0].name(),"SEARCH","Search dialog is present");	
},



getNavigationBar :function ()
{
	return new MOVIES.HomeView().getNavBar();
},


getTablecells :function()
{
	return this.getElementFromView("tablecells","SearchBar");
},

getSearchScrollView   :function()
{
	return this.getElementFromView("searchScrollView","SearchBar");
},

		
getTableView   :function()
{
	return this.getElementFromView("tableView","SearchBar");
},

getSearchElement   :function()
{
	return this.getElementFromView("searchElement","SearchBar");
},

getSearchNavBar   :function()
{
	return this.getElementFromView("searchNavBar","SearchBar");
},


getCancelButton   :function()
{
	return this.getElementFromView("cancelButton","SearchBar");
},

getClearButton :function()
{
return this.getElementFromView("clearButton","SearchBar");	
},

getKeyboard :function()
{
return this.getElementFromView("keyboard","SearchBar");	
},


testSearchView : function()
	{
	IOS.log_debug("Search view class is debugged sucessfully");
	}

});

