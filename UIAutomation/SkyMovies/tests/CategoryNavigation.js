

//importing the project libraries

#import "../project.js"

IOS.log_start("START:Navigation title and count test")
home.navigateCategory("Daily Picks");
home.waitAction(0.5)
home.verifyNavigationTitle("Daily Picks");
home.verifyCategoryCount(home.getMoviesCountByCategoryId(1));


home.navigateCategory("On Sky Movies");
home.waitAction(0.5)
home.verifyNavigationTitle("On Sky Movies");
home.verifyCategoryCount(home.getMoviesCountByCategoryId(2))

home.navigateCategory("Sky Store");
home.waitAction(0.5)
home.verifyNavigationTitle("Sky Store");
home.verifyCategoryCount(home.getMoviesCountByCategoryId(3))

home.navigateCategory("Coming Soon");
home.waitAction(0.5)
home.verifyNavigationTitle("Coming Soon");
home.verifyCategoryCount(home.getMoviesCountByCategoryId(4))


home.navigateCategory("At The Cinema");
home.waitAction(0.5)
home.verifyNavigationTitle("At The Cinema");
home.verifyCategoryCount(home.getMoviesCountByCategoryId(5))

home.navigateCategory("My Shortlist"); 
home.waitAction(0.5)
home.verifyNavigationTitle("My Shortlist");  














