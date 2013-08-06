
/***
*Base class for all the view class and this class contain all methods to validate to base state
class, element validation methods.

***/


IOS.BaseView = Class.create({

/****
* The constructor called when invoking "new on this class object".
***/

initialize: function()
{
 this.viewName = "";
 this.target = null;
 this.app = null;
 this.mainWin = null;
 this.refreshAppContext();							
IOS.log_trace("Base view initialized:" + this.target + "" + this.app +  "" + this.mainWin);
},

/**
*This will refresh the target,app and mainWin variables to current context of the application
*/

refreshAppContext: function()
{
this.target = UIATarget.localTarget();
this.app = this.target.frontMostApp();
this.mainWin = this.app.mainWindow();
}, 

validateState: function(stateName,view,validatorFunc,args)
{
var validationLogMessage = "VALIDATE" + this.viewName + ";" + stateName + "state.";
IOS.log_debug(validationLogMessage);
this.target.captureScreenWithName("Screen:"  + validationLogMessage + " " + new Date());
try {
	if (typeof args =="undefined") {
		validatorFunc(view);
	} else {
		validatorFunc(view,args);
	}
} catch (e) {

		IOS.log_debug("Exception is being ignored." + e);
		
	}
	
	IOS.log_trace("Validation on" + this.viewName + ":"  + stateName + "state passed.");
},

dismissKeyboard: function(buttonName, throttle)
{
	try { 
		if (typeof throttle =="undefined")
		{
			throttle = 0.5;
		}
		this.target.pushTimeOut(throttle);
		this.app.keyboard().withValueForKey(1,"isVisible");
		this.app.keyboard().buttons.firstWithName(buttonName).tap();
		this.app.keyboard().waitForInvalid();
		this.taget.popTimeOut();
		
	} catch(e)
	{
		IOS.log_debug("could not dismiss keyboard");
	}
		},
	
/***
_retriveElement: function(elementID,viewID)
{
	var element = UIAElementNil;
	{
	
	IOS.log_trace("view name is:" + this.viewName + "viewID is:" + viewID);
	if(!viewID) {
		viewID = this.viewName;
	}	
	this.target.pushTimeout(5);
	var locator = IOS.viewMap[viewID][elementID];
	IOS.log_trace("the view map returned the following locator:" + locator);
	if (typeof locator =="string") {
		//IOS.log_trace("Locator for " + elementID + "was a string");
		IOS.log_trace("Locator for " + IOS.viewMapPrefix + locator );
		element = eval(IOS.viewMapPrefix + locator)  
		
	}	
	IOS.log_debug("found" + element + "when searching for " + elementID)
	this.target.popTimeout();
}
return element;
},  

getElementFromView: function(elementID, viewID)
{
	var element = this._retriveElement(elementID,viewID)
	if (element instanceof UIAElementNil) {
		
		IOS.log_warning("Could not locate the element:" + elementID + "in view:" + this.viewName)
	}
	return element;
}, 

****/
_retrieveElement: function(elementID, viewID) {
		var element = UIAElementNil;
        if (IOS.viewMap && IOS.viewMapPrefix)
        {
            IOS.log_trace("View name is: " + this.viewName + " viewID is: " + viewID);
            IOS.log_trace("Finding element: " + elementID);
            if (!viewID) {
                viewID = this.viewName;
            }
            this.target.pushTimeout(5);
            var locator = IOS.viewMap[viewID][elementID];
            IOS.log_trace("the view map returned the following locator: " + locator);
            if (typeof locator == "function") {
            	IOS.log_trace("Locator for " + elementID + " was a function.");
            	locatorArgs = [];
            	for (var argInd = 2; argInd < arguments.length; argInd++) {
            		locatorArgs.push(arguments[argInd]);
            	}
            	element = locator.apply(this, locatorArgs);
            } else if (locator instanceof Array) {
            	IOS.log_trace("Locator for " + elementID + " was an array.");
            	var tempElement = undefined;
            	var i = 0;
            	for (i = 0; i < locator.length; i++) {
            		IOS.log_trace("evaluating: " + IOS.viewMapPrefix + locator[i]);
                    tempElement = eval(IOS.viewMapPrefix + locator[i]);
            		if (tempElement && !(tempElement instanceof UIAElementNil)){
            			element = tempElement;
            			break;
            		}
                    IOS.log_trace("array locator not found in loop: " + IOS.viewMapPrefix + locator[i]);
            	}
            } else if (typeof locator == "string") {
            	IOS.log_trace("Locator for " + elementID + " was a string.");
            	element = eval(IOS.viewMapPrefix + locator);
            }
            this.target.popTimeout();
            IOS.log_debug("Found " + element + " when searching for " + elementID);
        } else {
            IOS.log_warning("Both IOS.viewMap and IOS.viewMapPrefix must be defined to " +
            	"use IOS.BaseView.getElement(). Cannot get element.");
        }
        return element;
	},
    

getElementFromView: function(elementID, viewID){
		var element = this._retrieveElement.apply(this, arguments);
        if (element instanceof UIAElementNil) {
        	IOS.log_trace("Could not locate element: " + elementID + 
        		" in view: " + this.viewName);
        }
        return element;
	},  
	
	
getElement: function(elementID)
{
locatorArgs =[elementID,this.viewName];
 for(var i = 1; i< arguments.length; i++)
	{
	locatorArgs.push(arguments[i]); }
	IOS.log_trace("Passing the following Locator Args to " + "getElementFromView([" + locatorArgs + "])");
	return this.getElementFromView.apply(this,locatorArgs);
},	

isElementFromViewPresent: function(elementID,viewID)
{
	var isElementFromViewPresent = false;
	var element = undefined;
	try {
		element = this._retrieveElement.apply(this, arguments);
		if (!(element instanceof UIAElementNil) && element.isVisible()) {
			isElementFromViewPresent = true;
		}
	} catch(e) {
		IOS.log_info("An expection was thrown when trying to get element:" + " " + elementID + "from view" + viewID);
	}
	return isElementFromViewPresent;
},

 isElementPresent : function(elementName)
 {
	 var isElementPresent = false;
	IOS.log_info("Printing the element name " + elementName)	
		
	if(!(elementName ==null && elementName.toString() == "[object UIAElementNil]") && elementName.isVisible()) 
	{ 
	 isElementVisible = true;
	 }
	return isElementPresent; 
	
 },	





/***
* Do nothing for the desire number of secounds
*
***/

waitAction: function(seconds) {
	if (typeof seconds =="string")
	//var givenSecounds = seconds;
	secounds = parseInt(seconds,10);
	if (isNaN(seconds))
	{
		secounds = 0;
		IOS.log_warning("While calling waitAction, the given number of " +  "secounds could not be parsed from string into number");
	}	
	this.target.delay(seconds);
	return this;	
		
	},

	
setValue :function(element,value)	
{
		element.tap();
		this.waitAction(1.0)
		element.setValue(value);
	},


isDeviceiPad: function(target) 
{
return this.target.model().match(/^iPad/) !== null;
},


isDeviceiPhone: function(target) {
return this.target.model().match(/^iPhone/) !== null;
},

tapButton: function(btnName)
{
	
	if(buttons[btnName]==null || buttons[btnName].toString() == "[object UIAElementNil]"||buttons[btnName].isValid()== false) 
	{ 
	   IOS.log_fail("FAIL:Desired UIButton--" + btnName+ "not found."); 
	} 
	else 
	{ 
	 buttons[btnName].tap();
	   IOS.log_pass("PASS: Desired UIButton--" + btnName + "is available"); 
	} 
	
},


tapCenterOftarget:function()
{
var target = UIATarget.localTarget();
var origin = target.rect();
var targetWidth = origin.size.width/2
var targetHeight = origin.size.height/2;
target.tap({x:targetWidth, y:targetHeight});	
target.delay(1.0);
},


 tapWithOptions: function(elem)
{	 
	var hitPoint = elem.hitpoint();
	var hitPointY =  hitPoint.y;
	var hitPointX = hitPoint.x;
	elem.tapWithOptions({x:hitPointX, y:hitPointY});
	return this;	
},


setDeviceOrientation :function(type)
{
	 if(typeof type == "string")
		   {
			   switch(type)
				   {
				   case "landscape":
				   this.target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_LANDSCAPELEFT);
				   IOS.Orientation =3;
				   break;
				   
				   case "portrait":
				   this.target.setDeviceOrientation(UIA_DEVICE_ORIENTATION_PORTRAIT);
				   IOS.Orientation =1;
				   break;
				   
				   default:
					//set the orientation to unknown type when invalid input is sent   
				   IOS.Orientation = 0;   
				   IOS.log_info("Invalid orientation type is called");
				   break;	   
				
				   }  
		}
	
},

 keepIdle:function(milliSeconds)
{
	var startTime = new Date().getTime(); // get the current time
	while (new Date().getTime() < startTime + milliSeconds); // hog cpu
	UIALogger.logMessage("Keeping idel for " + milliSeconds + "secs")
},

getCurrentOrientation:function()
{
	switch(IOS.Orientation)
	{
	case 1:
	return "portrait";
	break;
	
	case 3:
	return "landscape"
	break;
	
	case 0:
	return "Unknown"
	break;
	
	default :
	break;	
	
	}	
},

//test method to check BaseView class is working
testingBaseView :function()
{
IOS.log_trace("accesing testingBaseView function");
},

} );