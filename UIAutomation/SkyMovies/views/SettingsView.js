MOVIES.SettingsView = Class.extend(MOVIES.HomeView, {

initialize: function()
	{
		this.parent();
		this.viewName ="SettingsView";
		//this.validateBaseState();
	},
	
	validateBaseState : function()
	{
		IOS.log_trace("TRACE: validdateBaseState" + this.viewName);
		//Assert.assertEquals(this.getNavBar().name(),"SETTINGS", "Settings dialog");
		
	},
	
	closeSettingsDialog : function()
	{
	IOS.log_debug("inside close setting dialog function")	
	  if (this.getSettingsButton().isValid())
		  {  //IOS.log_info("1*****") ;
		     if(this.getSettingsButton().name() == "Settings") {
		    	//IOS.log_info("2*****") ;
			 this.getSettingsButton().tap();
			 this.waitAction(1);
			 this.getCloseButton().tap();		 
		   }else
			 {
			 this.getCloseButton().tap();
			 }
		  }
	  else {
		  IOS.log_trace("TRACE : settings dialog was not opened"); 
		  
	  }
       // return new MOVIES.GridView();
	},
	
	
	navigateToSettings: function(cellName)
	{
		IOS.log_debug("inside navigateToSettings function")	
        if (!typeof cellName =="string") { IOS.log_debug("cell Name should be in string format")  };
        
        
		if (cellName == "Your Profile")
		{	
			this.getTableView().cells()[0].tap();
			this.waitAction(1.0);
			this.verifySettingsTittle(cellName);

			
		}	
		else if (cellName == "FAQs")
		{	
			
			this.getTableView().cells()[1].tap();
			this.waitAction(1.0);
			IOS.log_info ("cellname :" + cellName);
			this.verifySettingsTittle(cellName);
			Assert.assertTrue(this.getSection().webViews()[0].staticTexts()["Frequently Asked Questions"].isVisible(),"FAQs section content")
			this.getSettingsButton().tap();
			
		}
		else if (cellName == "Terms & Conditions")
		{	
			
			this.getTableView().cells()[2].tap();
			this.waitAction(1.0);
			this.verifySettingsTittle(cellName);
			Assert.assertTrue(this.getSection().webViews()[0].staticTexts()["Sky Movies App - Terms & Conditions"].isVisible(),"T & C's section content")
			this.getSettingsButton().tap();
			
		}
		else if (cellName == "Lincenses")
		{	
			
			this.getTableView().cells()[3].tap();
			this.waitAction(1.0);
			this.verifySettingsTittle(cellName);
			Assert.assertTrue(this.getSection().webViews()[0].staticTexts()["This product uses various libraries and resources subject to the licences below."].isVisible(),"Licenese section content")
			this.getSettingsButton().tap();
			
		}
			else if (cellName == "Privacy Policy")
		{	
	
			this.getTableView().cells()[4].tap();
			this.waitAction(1.0);
			this.verifySettingsTittle(cellName);
			Assert.assertTrue(this.getSection().webViews()[0].staticTexts()["Privacy Notice"].isVisible(),"Privcay Notice section content")
			this.waitAction(0.5)
			this.getSettingsButton().tap();
			
		}
	}, 

	verifySettingsTittle :function(cellName)
	{
		var actualCellName = this.getSubNavBar().name();
		IOS.log_info("Settings title:" + actualCellName);
		if (cellName == actualCellName) {
			IOS.log_pass("User in Settings section of  " + cellName);
		}
		else {
			IOS.log_pass("User in Settings section of  " + actualCellName + "and expected was" + cellName );
		} 	

	},

	verifySettingsSectionsHeaders:function()
	{
		for(var i =0 ; i < this.getTableView().groups().length -1 ; i++)
			{
				var actgroup_name = this.getTableView().groups()[i].elements()[0].name()
					Assert.assertEquals(actgroup_name, actgroup_name.match("Information|Calendar Options|Your Profile"),"Matcing the section title " + actgroup_name)
						
			}
	},
	
	verifyCalendarOptions: function()
	{
      var events = new Array("At the start","5 minutes before","15 minutes before","30 minutes before","1 hour before","2 hours before","1 day before","2 days before");
		for (var i=0 ; i < events.length ;i++)
			 {	
					this.getTableView().cells()[5].tap();
					this.getTableView().cells()[events[i]].tap();
					Assert.assertEquals("Remind Me, " + events[i],this.getTableView().cells()[5].name(),"Settings the calendar event of type "+ events[i])
				}
	},

	

	verifySkyPromotionsApp :function()
	{
      
      var app_names = new Array("Sky Go","Sky+","Sky Go","Sky Sports for iPad","Sky News for iPad","Sky Cloud WiFi")
      Assert.assertEquals("Sky Applications",this.getSubNavBar().name(),"Sky Promotions Navigationbar title")
	  Assert.assertEquals("Sky Account",this.getSubNavBar().rightButton().name(),"Sky Account Navbar title");  //Sky Account

			for (var i = 0 ;i < app_names.length; i++)
 				{
				this.getSection().staticTexts()[app_names[i]].tap();
				Assert.assertEquals("Sky Applications",this.getSubNavBar().leftButton().name(),"Leftbutton on Navigation bar of Sky Applications")
				Assert.assertEquals("Go to App Store",this.getSubNavBar().rightButton().name(),"Rightbutton on Navigation bar of Sky Applications")
				this.waitAction(0.5);
				this.getSubNavBar().leftButton().tap();
				 }

	    this.waitAction(0.5)
        this.getCloseButton().tap() 			 

	},


	verifySkyAccountPageSections:function()
	{
            this.getSubNavBar().rightButton().tap();
            this.waitAction(1.0);
			Assert.assertEquals(this.getSubNavBar().name(),"Sky Account","Navigation title bar in Sky Account page"); // Sky Account
			Assert.assertTrue(this.target.frontMostApp().mainWindow().staticTexts()["As a Sky customer, you can manage your account using the links below. For your security, when viewing account details you will be asked to sign in with your Sky iD."].isVisible(),"Sky customer section in accounts page");
			Assert.assertTrue(this.getTableView().cells()["My Package, View your current package"].isVisible(),"My package section in account page");
			Assert.assertTrue(this.getTableView().cells()["My Bill, View your current bill and charges on your next bill"].isVisible(),"My Bill section in account page");
			Assert.assertTrue(this.getTableView().cells()["Remote Record, Record your favourite programmes from your mobile or online"].isVisible(),"Remote record section in account page")
			Assert.assertTrue(this.getTableView().cells()["Service Status, See if there are issues affecting Sky Services"].isVisible(),"Service status in accounts page")																		  
			Assert.assertTrue(this.getTableView().cells()["Configure Sky Remote, Program your remote control to work with your TV"].isVisible(),"Confiure Sky Remote in account page") 
			Assert.assertTrue(this.getTableView().cells()["Sky TV PIN, If you've forgotten your set top box PIN you can reset it here"].isVisible(),"Sky TV Pin section in accounts page") 
			this.getSubNavBar().leftButton().tap();
            this.waitAction(0.5)
            this.getCloseButton().tap() 

	},    

	loginWithSkyID : function(username,password)
	{
		
	if (!typeof username =="string" && !typeof password =="string")
		{
		IOS.log_debug("Username and password are not in string format");
		}
	var element = this.getSignOut();
		 if (element.isVisible())
		{
			this.getSignOut().tap();
			this.waitAction(1);	
		} 
	
	
	//enter the username and password
	//this.setValue(this.getUsername(),username);
	//this.setValue(this.getPassword(),password);
		 
		 this.getUsername().setValue(username);
		 this.getPassword().setValue(password);
		 
	this.getSignIn().tap();
	//wait for the user to login
	this.waitAction(1.5);
	IOS.log_info(this.getMessage());
	actualMessage ="You are signed in as: "+username ;
	
	//check the user is logged in successfully
	Assert.assertEquals(this.getMessage(),actualMessage,"User :"+ username + " has sucessfully logged into Movies app");

	},
	
	
	
	getMessage :function()
	{
		return this.getElementFromView("message","SettingsOptions").value();
	},
	
	getSettingsButton : function()
	{
		return this.getElementFromView("settings","SettingsOptions");
		
	},
	
	getSection: function()
	{
        return this.getElementFromView("sectionScrollview","SettingsOptions");
       
	},

	getSubNavBar: function()
	{
		return this.getElementFromView("navBar","SettingsOptions");
		
	},
	
	getCloseButton : function()
	{
		return this.getElementFromView("close","SettingsOptions");
		
	},  
	
	getTableView : function()
	{
		return this.getElementFromView("tableView","SettingsOptions");
		
	},
	
	getUsername : function()
	{
		return this.getElementFromView("userName","SettingsOptions");
		
	},
	
	getPassword : function()
	{
		return this.getElementFromView("password","SettingsOptions");
		
	},
	
	getSignIn : function()
	{
		return this.getElementFromView("IPAD_signIn","SettingsOptions");
		
	},
	
	getSignOut :function()
	{
		return this.getElementFromView("IPAD_signOut","SettingsOptions");
	},
	
	testSettingsView : function()
	{
	IOS.log_debug("Settings view class is debugged sucessfuly");
	} 
}); 
 




