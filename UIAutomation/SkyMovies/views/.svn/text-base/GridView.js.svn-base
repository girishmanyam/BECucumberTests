
MOVIES.GridView = Class.extend(MOVIES.HomeView, {

initialize: function()
	{
		this.parent();
		this.viewName ="GridView";
	},
	
	 findMovieIngridAndTap : function(title,movies_category)
		{
		title = title.toString() 
		//movies_category = 465
		movies_inwindow = IOS.constants.MOVIES_IN_GRID_IPAD;
		no_of_scrolls = Math.floor(movies_category/movies_inwindow) + 1 
		IOS.log_info("scrolls : " +no_of_scrolls );
		var counter = 0	;
		outerloop:
		do 
		{	
		blnFound = false	
		number_of_movies = this.getScrollViewElement().staticTexts().length
		IOS.log_debug("total number of movies in current view" + number_of_movies)
		
		for (i = 0; i < number_of_movies; i++)
		{
		movie_title = i;	
		var keyart_title = this.getScrollViewElement().staticTexts()[movie_title].name();
		if (keyart_title == title) {
			this.getScrollViewElement().staticTexts()[keyart_title].tapWithOptions({tapOffset:{x:0.36, y:0.67}});
			blnFound = true;
			IOS.log_pass("movie found in the category " + keyart_title);
			break outerloop ;		
			}
		this.waitAction(1.0); 
		}
		if(!blnFound)
	{
			this.getScrollViewElement().scrollRight();
	}	
	counter ++;
	} while(counter < no_of_scrolls)

	if(!blnFound)
	{
	IOS.log_fail("movie title " + title + "  is not found in grid view");
	return false;	
	}	
	},
	
	
	getScrollViewElement :function()
	{
		return this.getElementFromView("gridScrollView","GridView");
	},


testGridView : function()
	{
	IOS.log_info("tester");
	IOS.log_info("test a message");
	}

});

