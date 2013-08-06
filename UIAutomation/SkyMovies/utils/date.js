
var ISODate = {
convert : function (input){
if (!(typeof input === "string")) throw "ISODate, convert: input must be a string";
 var d = input.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(([+-])(\d{2}):(\d{2})))$/i);
if (!d) throw "ISODate, convert: Illegal format";
 return new Date(
 Date.UTC(d[1],d[2]-1,d[3],d[4],d[5],d[6]|0,(d[6]*1000-((d[6]|0)*1000))|0,d[7]) + (d[7].toUpperCase() ==="Z" ? 0 : (d[10]*3600 + d[11]*60) * (d[9]==="-" ? 1000 : -1000)));
},
 format : function(t,utc){
	 newDate = t;
 if (typeof t === "string") t = this.convert(t);
if (!(t instanceof Date)) throw "ISODate, format: t is not a date object";
t = utc ?
 [t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds()] :
 [t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()];
 

return this.clock12(t[3],t[4]) + " " + this.days(newDate) + " " +  ((t[2] < 10) ? "0"+t[2] :t[2])+ " " + this.month[t[1]]},	
month:["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"],
	 days:function(t) {
var d = new Date(t)
week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
return week[d.getUTCDay()]; }, 
clock12:function(h24,m,s){
 h24%=24;
var h12 = h24 % 12;
if (h12===0) h12=12;
return h12 + ":" +
(m<10 ? "0" + m : m) +
(isFinite(s) ? ":" + (s<10?"0"+s:s): "") +
 (h24<12 ? "AM":"PM");
}
};

//UIALogger.logMessage(" " + (ISODate.format("2011-12-06T18:10:00Z")));

