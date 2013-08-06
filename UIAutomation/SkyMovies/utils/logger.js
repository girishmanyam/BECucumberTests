/************************************************************************
 *
 *  This class contains list of wrapper functions for UIALogger methods
 * 
 **************************************************************************/




IOS.log_error = function(message)
{

 if (IOS.settings.logLevel >= IOS.logLevels.LOG_ERROR)
 {
 
    UIALogger.logError(message);    
    
 }   

};


IOS.log_warning = function(message)
{
if (IOS.settings.logLevel >= IOS.logLevels.LOG_WARN)
 {
    UIALogger.logWarning(message);  
    
  }  
    
};


IOS.log_info = function(message)
{
if (IOS.settings.logLevel >= IOS.logLevels.LOG_INFO)
 {
    
    UIALogger.logMessage(message); }
};

IOS.log_debug = function(message)
{
if (IOS.settings.logLevel >= IOS.logLevels.LOG_DEBUG)
 {
    
    UIALogger.logDebug("DEBUG: " + message);  }
};

IOS.log_trace =function(message)
{

if (IOS.settings.logLevel >= IOS.logLevels.LOG_TRACE)
 {
    
    UIALogger.logDebug("TRACE:" + message);  }
};

IOS.log_start =function(message)
{
    UIALogger.logStart(message);
};

IOS.log_end =function(message)
{
    UIALogger.logMessage(message);
};


IOS.log_pass = function(message)
{
    UIALogger.logPass(message);
};

IOS.log_fail = function(message)
{
    UIALogger.logFail(message);
};



IOS.log_issue =function(message)
{
    UIALogger.logIssue(message);
};


