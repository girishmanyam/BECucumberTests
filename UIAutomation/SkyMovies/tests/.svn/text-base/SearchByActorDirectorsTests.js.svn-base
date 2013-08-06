
//#import "../project.js"

//IOS.settings.logLevel = IOS.logLevels.LOG_INFO


var SEARCH_ICON ="Search";
var HOME_ICON ="Home";
var SEARCH_BY_ACTOR = "Actor";
var SEARCH_BY_DIRECTOR = "Director";

function SearchTests() 
{
	this.TITLE_SEARCH_COUNT = 1;
	this.byDirector = "Tom Dey"
	this.byActor = "Tom Berenger";
}	
	
SearchTests.prototype.searchByMovieTitle = function() {
    IOS.log_start("START:Test for search by Actor")
home = new MOVIES.HomeView();	
home.tapIconsOnNavBar(SEARCH_ICON);
search = new MOVIES.SearchView();
var title = search.getTitleByMovieId(search.getMovieIdsByCategoryId(1)[0])
if(title != "undefined")
	{ search.enterSearchInput(title)
		results = search.selectFromSearchList(title)
		search.waitAction(2.0)
		//UIALogger.logMessage( "results" + results)
		Assert.assertEquals(new MOVIES.CardView().getTitleFromTheCard(), title,"Search results for move title");
		Assert.assertEquals(new MOVIES.CardView().getCountOnNavBar(), this.TITLE_SEARCH_COUNT,"Search results count for move title");
		search.tapIconsOnNavBar(HOME_ICON)
	} else {  IOS.log_info("Unable to reterive the title from uia downloader"); }
search.waitAction(0.5)
search.closeSearchDialog();
search.waitAction(2.0);

};


SearchTests.prototype.searchByActor = function() {
IOS.log_start("START:Test for search by Director")
home = new MOVIES.HomeView();
home.tapIconsOnNavBar(SEARCH_ICON);
search = new MOVIES.SearchView();
search.enterSearchInput(this.byActor)
search.selectFromSearchList(this.byActor)
search.waitAction(2.0)
search.selectSearchResultsInGridAndVerifyActorOrDirectors(this.byActor, SEARCH_BY_ACTOR);
search.waitAction(0.5)
search.tapIconsOnNavBar(HOME_ICON)
search.waitAction(0.5)
search.closeSearchDialog(); 
search.waitAction(1.0)
	
};

SearchTests.prototype.searchDirector = function() {
IOS.log_start("START:Test for search by Director")
home = new MOVIES.HomeView();
home.tapIconsOnNavBar(SEARCH_ICON);
search = new MOVIES.SearchView();
search.enterSearchInput(this.byDirector)
search.selectFromSearchList(this.byDirector)
search.waitAction(2.0)
search.selectSearchResultsInGridAndVerifyActorOrDirectors(this.byDirector,SEARCH_BY_DIRECTOR);
search.waitAction(0.5)
search.tapIconsOnNavBar(HOME_ICON)
search.waitAction(0.5)
search.closeSearchDialog();  
search.waitAction(1.0)
};

/*
function SearchByActorDirectorMovieTitleTests() 
{
	var searchTests = new SearchTests();
	
	//searchTests.searchByMovieTitle();
	searchTests.searchByActor();
	//searchTests.searchDirector();
	
}


SearchByActorDirectorMovieTitleTests() */ 


