
Assert = { 
 
assertEquals : function(expected, received, message) {
var errMessage = "Expected <" + expected + "> Actual <" + received + ">";
((expected == received)?this.pass(message):this.fail(message + ": " + errMessage));
},

assertArraysAreEqual : function (expected , actual, message)  {
var len  = Math.max(expected.length, actual.length || 0);
for (var i=0; i < len; i++) {
this.assertEquals(expected[i], actual[i], message + " " +  "Values in position " + i );
     }
},

	
assertNotEquals : function (expected, received, message) {
var errMessage = "Expected <" + expected + "> Actual <" + received + ">";
(!(expected == received)?pass(message):fail(message + ": " + errMessage));
},

assertNull : function(object, message) {
var errMessage = "Expected a null object, but received <" + thingie + ">"; 
((object === null || object.toString() == "[object UIAElementNil]")?this.pass(message):this.fail(message + ": " + errMessage));
},


assertNotNull : function(object, message) {
var errMessage = "Expected not null object";
((object !== null && object.toString() != "[object UIAElementNil]")? this.pass(message): this.fail(message + ": " + errMessage)); 
},


 assertTrue :function(expression, message) {
	 var errMessage ="";
	 if (! message) {  errMessage = "Assertion failed"; }
	  (expression) ? this.pass(message) : this.fail(message + ": " + errMessage);
	},


fail : function(message) {
IOS.log_fail(message); 
},

 pass :function(message) {
IOS.log_pass(message); 
}  };


/***


function tapButton(btnName)
{
	
	if(buttons[btnName]==null || buttons[btnName].toString() == "[object UIAElementNil]"||buttons[btnName].isValid()== false) 
{ 
   fail("FAIL:Desired UIButton--" + btnName+ "not found."); 
} 
else 
{ 
	buttons[btnName].tap();
   pass("PASS: Desired UIButton--" + btnName + "is available"); 
} 
	
	} ***/
