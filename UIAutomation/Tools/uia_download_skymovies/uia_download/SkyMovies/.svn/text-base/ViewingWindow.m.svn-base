//
//  ViewingWindow.m
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import "ViewingWindow.h"
#import "NSObject+SBJson.h"
#import "NSString+Meridian.h"

@implementation ViewingWindow

@synthesize wayToWatch = _wayToWatch;
@synthesize title = _title;
@synthesize endDate = _endDate;
@synthesize startDate = _startDate;


+ (ViewingWindow *)modelObjectWithDictionary:(NSDictionary *)dict
{
    ViewingWindow *instance = [[ViewingWindow alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.wayToWatch = [dict objectForKey:@"wayToWatch"];
            self.title = [dict objectForKey:@"title"];
            self.endDate = [[dict objectForKey:@"endDate"] lowerCasedMeridian];
            self.startDate = [[dict objectForKey:@"startDate"] lowerCasedMeridian];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.wayToWatch = [aDecoder decodeObjectForKey:@"wayToWatch"];
    self.wayToWatch = [aDecoder decodeObjectForKey:@"wayToWatch"] ;
    self.title = [aDecoder decodeObjectForKey:@"title"];
    self.endDate = [[aDecoder decodeObjectForKey:@"endDate"] lowerCasedMeridian];
    self.startDate = [[aDecoder decodeObjectForKey:@"startDate"] lowerCasedMeridian];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_wayToWatch forKey:@"wayToWatch"];
    [aCoder encodeObject:_title forKey:@"title"];
    [aCoder encodeObject:_endDate forKey:@"endDate"];
    [aCoder encodeObject:_startDate forKey:@"startDate"];
}

- (NSDictionary *)dictionaryRepresentation
{
    NSMutableDictionary *mutableDict = [NSMutableDictionary dictionary];
    [mutableDict setValue:self.wayToWatch forKey:@"wayToWatch"];
    [mutableDict setValue:self.title forKey:@"title"];
    [mutableDict setValue:self.endDate forKey:@"endDate"];
    [mutableDict setValue:self.startDate forKey:@"startDate"];    
    return [NSDictionary dictionaryWithDictionary:mutableDict];
}
-(NSDate*) startingDate {
    
    static NSDateFormatter *viewingWindowDateFormatter = nil;
    if (!viewingWindowDateFormatter) {
        viewingWindowDateFormatter = [[NSDateFormatter alloc] init];
        NSLocale *posixLocale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"];
        viewingWindowDateFormatter.locale = posixLocale;
        viewingWindowDateFormatter.timeZone = [NSTimeZone timeZoneWithName:@"UTC"];
        viewingWindowDateFormatter.dateFormat = @"yyyy-MM-dd";
    }
    
    return [viewingWindowDateFormatter dateFromString:self.startDate];
}

- (NSDictionary*) configureFutureViewingWindow:(NSTimeInterval)secondsIntoWindow{
     NSString* section[3];
    
    section[0]= @"Coming Soon";
    section[2]= self.wayToWatch;
    
    NSDateFormatter *dateFormatter = [NSDateFormatter new];
    [dateFormatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
    if ( abs(secondsIntoWindow) > 30 * 3600 * 24 ) {			
        [dateFormatter setDateFormat:@"MMMM yyyy"];
    } else {
        [dateFormatter setDateFormat:@"EEE dd MMMM"];
    }
    
    section[1] = [[dateFormatter stringFromDate:[self startingDate]] lowerCasedMeridian];

    return [NSDictionary dictionaryWithObjectsAndKeys:
            [section[0] capitalizedString], @"first",
            section[1], @"middle",
            [section[2] capitalizedString], @"last",
            nil];
}

- (NSDictionary*)configureNowShowingViewingWindow:(NSTimeInterval)secondsIntoWindow {
    NSString* section[3];
    if (self.title) {
        section[0] = [self.wayToWatch capitalizedString];
        section[2] = self.title;
    } else {
        section[0] = @"Now Showing";
		section[2] = [self.wayToWatch capitalizedString];
    }
    
    section[1] = @"";


    return [NSDictionary dictionaryWithObjectsAndKeys:
        [section[0] capitalizedString], @"first",
        [section[1] capitalizedString], @"middle",
        section[2], @"last",
        nil];
}

-(NSDictionary*) dogInfo {
    NSDate* date =  [self startingDate];
    NSTimeInterval secondsIntoWindow = [date timeIntervalSinceNow];
	if ( secondsIntoWindow > 0 ) {
        return [self configureFutureViewingWindow:secondsIntoWindow];
	}
    return [self configureNowShowingViewingWindow:secondsIntoWindow];
}

+ (ViewingWindow*) fetchForMovieID:(NSString*)movieID {
    
    NSString* request = [NSString stringWithFormat:@"http://skymovies.sky.com/api/v3/asset?ids=%@&include=viewingWindow", movieID];
    NSURL *theURL =  [[NSURL alloc]initWithString:request];
    NSURLRequest *theRequest=[NSURLRequest requestWithURL:theURL
                                              cachePolicy:NSURLRequestUseProtocolCachePolicy
                                          timeoutInterval:60.0];
    
    NSData *data = [NSURLConnection sendSynchronousRequest:theRequest returningResponse:nil error:nil];
    if (!data)
        return nil;
    
    NSString *dataString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];   
    NSArray* viewingWindowArray = [dataString JSONValue];
    
    if ([viewingWindowArray count]) {
        NSDictionary* firstEntry = [viewingWindowArray objectAtIndex:0];
        NSDictionary* viewingWindowDict = [firstEntry objectForKey:@"viewingWindow"];
        ViewingWindow* viewingWindow = [ViewingWindow modelObjectWithDictionary:viewingWindowDict];
        if (!viewingWindow.wayToWatch && !viewingWindow.title && !viewingWindow.endDate && !viewingWindow.startDate) {
        } else {                
            return viewingWindow;
        }
    }
    
    return nil;
}


@end
