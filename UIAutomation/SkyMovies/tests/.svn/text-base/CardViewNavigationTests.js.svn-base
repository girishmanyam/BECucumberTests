
var category_titles = new Array("Daily Picks", "On Sky Movies","Sky Store","Coming Soon","At The Cinema","Oscar Winners","Sky Movies 007","My Shortlist");

function CategoryNavigationTests() 
{


};

CategoryNavigationTests.prototype.InGridView = function()
{

  IOS.log_start("Verify the navigation in grid view between the categories");
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5)
	for (var i = 0; i < category_titles.length ; i++) {
		cardView.navigateCategory(category_titles[i]);
		cardView.waitAction(1.0)
		cardView.verifyNavigationTitle(category_titles[i])
	 if (!category_titles[i].match("Sky Movies 007|Harry Potter")) {
			Assert.assertTrue(cardView.isGridView(), "User is in grid view") }
	 else { cardView.verifyFilterViewShouldNotBePresent()  }

	};
	
},


CategoryNavigationTests.prototype.InCardiew = function()
{
	IOS.log_start("Verify the navigation in card view between the categories");
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("Daily Picks");
	for (var i = 1; i < category_titles.length - 1 ; i++) {
		cardView.navigateCategory(category_titles[i]);
		cardView.waitAction(1.0)
		cardView.navigateCardView(); 
		cardView.verifyNavigationTitle(category_titles[i])
		Assert.assertTrue(!cardView.isGridView(), "User is in cardView ") 
	};
  

},


CategoryNavigationTests.prototype.withInCategory = function()
{
	IOS.log_start("Verify the navigation in card view between the categories");
	cardView = new MOVIES.CardView();
	cardView.waitAction(0.5)
	cardView.navigateCategory("Daily Picks");
	cardView.waitAction(0.5)
	cardView.verifyNavigationTitle("Daily Picks")
	Assert.assertTrue(cardView.isGridView(), "User remains in grid view ") 


}



