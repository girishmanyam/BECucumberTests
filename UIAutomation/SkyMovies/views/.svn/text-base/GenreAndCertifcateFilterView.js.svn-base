
MOVIES.GenreAndCertifcateFilterView = Class.extend(MOVIES.HomeView, {

initialize: function()
	{
		this.parent();
		this.viewName ="GenreAndCertifcateFilterView";
	},
	
	
	getTheFilterTitle  : function(title ){
		var filter_title ="";
		if (title.indexOf("\n") != -1)
		{	
			var filter_title =  title.split("\n");
			return filter_title[1];

		}else {
			
			return title;
			
		}
	},	
	
	getGenreTitle  : function()
	{
		var genreTitle = "";
		var title = this.getNavBar().value();
		IOS.log_info("title on Nav bar : getGenreTitle() "   + title);
		genreTitle = this.getTheFilterTitle(title)
		IOS.log_info("title on Nav bar : genreTitle() "   + genreTitle);
		
		if ( genreTitle === "" ) { return genreTitle = ""; }
		if (genreTitle.indexOf(",") != -1)
		{	
			var genreTitle =  genreTitle.split(",");

			return genreTitle[0];

			} else 
			{
				//genreTitle = ""
				return genreTitle;

			}

		},

	getCertTitle  : function()
		{
			try { 
				var certTitle ="";
				var title = this.getNavBar().value();
				certTitle = this.getTheFilterTitle(title);
				IOS.log_info("certTitle"   + certTitle);
				if ( genreTitle = "" ) { return genreTitle = ""; }
				if (certTitle.indexOf(",") != -1)
				{	
					certTitle =  certTitle.split(",");
					return certTitle[1];
				} 
				else {  (certTitle.indexOf("CERT") != -1) ? certTitle : certTitle = " " ;
				return certTitle;
			} 
		}
		catch(err)
		{
			IOS.log_debug("getCertTitle  method of certificateFilterView class  " + err.message);
		}

	},
	
	getGenreList : function()
	{
		var genre_list = this.getGenreFilterElement().length;
		var genres = new Array();
		var index = 0 
		if (!genre_list > 0) { 
			IOS.log_trace("No elements in the genre list"); }

			for(var i = 0 ; i < genre_list-1; i++)
			{
				var genre_type = this.getGenreFilterElement()[i].value();
				if (genre_type != ""  && genre_type.toUpperCase() !== "ALL")
				{
					genres[index] = genre_type;
					IOS.log_debug("genres[index]  "  + genres[index])
					index = index + 1;
				}

			}
			return genres;
		},
		
		
		selectGenreFilterElement : function(index)
		{
			if (index === "")  { return IOS.logDebug("No input to the function :  selectGenreFilterElement "); }
			try {
				   UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[1].staticTexts()[index].scrollToVisible()
					UIATarget.localTarget().delay(0.5);	
					UIATarget.localTarget().frontMostApp().mainWindow().scrollViews()[1].staticTexts()[index].tap();
					UIATarget.localTarget().delay(1.0)
			
				 }
				catch(err)
				{
					IOS.log_debug("unable to select the genre filter element  " + err.message);
	
				}	
			},
			
			
		selectCertificateFilter : function(certLabel)	
			{
				if (certLabel === "")  { return IOS.logDebug("No input to the function :  selectCertificateFilter "); }
				//var certLabel = certElement;		
				try {
               IOS.log_info("certLabel : selectCertificateFilter "    +    certLabel );
					//this.getCertFilterElement()["CERT"].tap();
					this.getElementFromView("scrollView2","GridView").staticTexts()["Cert"].tap();	
					this.waitAction(0.5);	
					//this.getCertFilterElement()[certLabel].tap();
				   this.getElementFromView("scrollView2","GridView").staticTexts()[certLabel].tap();
					//this.tapWithOptions(elem);
				//	this.waitAction(0.5);
					certLabel = "";  }
					catch(err)
					{
						IOS.log_debug("unable to select the certificate filter element  " + err.message);
					}
	   	},
	
			getCertificateList : function()
			{
				var cert_list = this.getCertFilterElement().length;
				var certificates = new Array();
				var index = 0 
				if (!cert_list > 0) { 
					IOS.log_debug("No elements in the genre list"); }

					for(var i = 0 ; i < cert_list; i++)
					{
						var cert_type = this.getCertFilterElement()[i].value();
						//	IOS.log_info("genre_type  "   + genre_type   + "  condition     "   +  (genre_type !== "CERT") );
						if (cert_type !== "CERT" && cert_type.toUpperCase() !== "ALL")
						{
							certificates[index] = cert_type;
							IOS.log_debug("certificates[index]  "  + certificates[index])
							index = index + 1;
						}

					}
					return certificates;
			},
	
	
	getGenreFilterElement :function() 
	{
		return this.getElementFromView("scrollView1","GridView").staticTexts();
	},
	
	getCertFilterElement :function() 
	{
		return this.getElementFromView("scrollView2","GridView").staticTexts();
	},


testCetrificateFilterView : function()
	{
	IOS.log_info("Cetrificate Filter View view is debugged sucessfully");
	}

});

