

function SettingsTests() 
{
	//IOS.log_start("START:Certificate and Genre filter tests");
};


SettingsTests.prototype.informationGroup = function()
{
IOS.log_start("Settings - information group");
settings = new MOVIES.SettingsView();
settings.tapIconsOnNavBar("Settings")
settings.waitAction(1)
settings.verifySettingsSectionsHeaders()
settings.navigateToSettings("FAQs")
settings.waitAction(1)
settings.navigateToSettings("Terms & Conditions")
settings.waitAction(1)
settings.navigateToSettings("Lincenses")
settings.waitAction(1)
settings.navigateToSettings("Privacy Policy") 
settings.waitAction(2)
settings.closeSettingsDialog(); 
settings.waitAction(2) 

};

SettingsTests.prototype.calanderGroup = function()
{
IOS.log_start("Settings - Calander group");
settings = new MOVIES.SettingsView();
settings.tapIconsOnNavBar("Settings")
settings.waitAction(1)
settings.verifyCalendarOptions()
settings.waitAction(3)
settings.closeSettingsDialog();
settings.waitAction(2)

};


SettingsTests.prototype.skyPromotionsApps = function()
{
IOS.log_start("Little man - Sky Promotions");
 settings = new MOVIES.SettingsView();
 settings.tapIconsOnNavBar("littleMan")
 settings.waitAction(1)
 settings.verifySkyPromotionsApp();
 settings.waitAction(2);
 //settings.closeSettingsDialog();

};


SettingsTests.prototype.skyAccountPage = function()
{
 IOS.log_start("Little man - Sky Accounts page section");
 settings = new MOVIES.SettingsView();
 settings.tapIconsOnNavBar("littleMan")
 settings.waitAction(1)
 settings.verifySkyAccountPageSections();
 settings.waitAction(2);
 //settings.closeSettingsDialog();
 //settings.waitAction(1);

};







