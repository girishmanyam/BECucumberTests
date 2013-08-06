#import "AiringManager.h"
#import "WriteJsonResponse.h"
#import "SKMAiring.h"
#import "NSObject+SBJson.h"
#import "ViewingWindow.h"
#import "NSString+Meridian.h"

static CGFloat OneHour = 60.0f*60.0f;
static CGFloat OneDay = 24.0f*60.0f*60.0f;

const int daysInWeek = 7;

@interface AiringManager ()
+ (NSString *)downloadPath;
- (void)saveAiringsToFileNamed:(NSString*)filename;

@property (nonatomic, readonly) int todaysDayIndex;
@end

@implementation AiringManager

+ (void)fetchAiringsIfExistingAiringsAreOlderThan:(double)seconds {
    NSError* error;
    NSDictionary* fileAttribs = [[NSFileManager defaultManager] attributesOfItemAtPath:[AiringManager downloadPath] error:&error];
    NSDate *result = [fileAttribs fileCreationDate];
    double timeInterval = abs([result timeIntervalSinceNow]);
    if ( (timeInterval == 0) ||  (timeInterval > seconds)) {
        AiringManager* airingManager = [[AiringManager alloc] init];
        [airingManager saveAiringsToFileNamed:[AiringManager downloadPath]];
    }
}

+ (void) fetchAiringsForMovieID:(NSString*)movieID {
    
    [AiringManager fetchAiringsIfExistingAiringsAreOlderThan:OneHour];
    AiringManager* airingManager = [[AiringManager alloc] init];
    
    NSArray* allAirings = [SKMAiring loadAiringsFromFileNamed:[AiringManager downloadPath]];
        
    NSArray* airingsForMovie = [SKMAiring airingsForMovieID:movieID fromAiringsArray:allAirings];

    ViewingWindow* viewingWindow = [ViewingWindow fetchForMovieID:movieID];
 
    NSMutableArray* dayResult[daysInWeek] = {nil, nil, nil, nil, nil, nil, nil};
        
    NSTimeInterval nextOnSeconds =8*OneDay;
    SKMAiring* nextOn = nil;
        
    for(SKMAiring* airing in airingsForMovie) {
        
        if ([airing isExpired])
            continue;
        
        NSTimeInterval airingSeconds = [airing airingSeconds];
        
        NSMutableArray* dayCollection = dayResult[[airing startingDateDayIndex]];
        if (dayCollection == nil) {
            dayCollection = [NSMutableArray array];
            dayResult[[airing startingDateDayIndex]] = dayCollection;
        } 
        
        if (airingSeconds < nextOnSeconds) {
            nextOnSeconds = airingSeconds;
            nextOn = airing;
        }
                
        //cut out some unwanted fields
        NSMutableDictionary* mutableDict = [NSMutableDictionary dictionaryWithDictionary:[airing dictionaryRepresentation]];

        NSString* channelName = airing.channelName;
        if (airing.isHD) {
            channelName = [NSString stringWithFormat:@"%@ HD", channelName];
        }

        //purge unused
        [mutableDict removeObjectForKey:@"movieId"];
        [mutableDict removeObjectForKey:@"channelId"];
        [mutableDict removeObjectForKey:@"airingId"];
        [mutableDict removeObjectForKey:@"duration"];
        [mutableDict removeObjectForKey:@"availableOnSkyGo"];
        [mutableDict setValue:channelName forKey:@"channelName"];
        
        NSString* date = [airing prettyStringFromDate:[airing startingDate] showMinutes:YES];
        
        [mutableDict setValue:[date lowerCasedMeridian] forKey:@"startDateTime"];
        [mutableDict setValue:[airing startingDate] forKey:@"date"];
        [dayCollection addObject:mutableDict];
    }
    
    //order by date and hd flag
    for(int i=0;i<daysInWeek;i++) {
        NSMutableArray* dayCollection = dayResult[i];
        if (!dayCollection)
            continue;
        
        
        NSSortDescriptor* descriptorDate = [[NSSortDescriptor alloc] initWithKey:@"date"  ascending:YES];
        NSSortDescriptor* descriptorIsHD = [[NSSortDescriptor alloc] initWithKey:@"isHD"  ascending:NO];
        [dayCollection sortUsingDescriptors:[NSArray arrayWithObjects:descriptorDate, descriptorIsHD, nil]];
        
        //dump hd
        for(NSMutableDictionary* dict in dayCollection) {
            [dict removeObjectForKey:@"isHD"];
            [dict removeObjectForKey:@"date"];
        }
                
        
        dayResult[i] = [dayCollection copy];
        
        //NSLog(@"day %d : %@", i, dayCollection);
    }
    
    //testers want an array as root of json (javascript limitation ?)
    NSMutableArray* array = [NSMutableArray array];
    NSMutableDictionary* op = [NSMutableDictionary dictionary];
    [array addObject:op];
    
    int todayDayIndex =[airingManager todaysDayIndex];
    
    for(int i=0;i<daysInWeek;i++) {
        NSString* key = [SKMAiring dayStringFromIndex:i];
        if (todayDayIndex == i) {
            key = @"Today";
        }
        
        if (dayResult[i]) {
            
             //NSLog(@"day %d : %@", i, dayResult[i]);
            
            [op  setObject:dayResult[i] forKey:key];
        }else {
            [op setObject:[NSDictionary dictionary] forKey:key];
        }
    }
    
    [op setObject:movieID forKey:@"movieId"];
    
    if(nextOn) {

    
        NSDictionary* dogInfo = [NSDictionary dictionaryWithObjectsAndKeys:@"Next On", @"first",
                             [[nextOn prettyStringFromDate:[nextOn startingDate] showMinutes:NO] lowerCasedMeridian], @"middle",
                             nextOn.channelName, @"last",
                             nil];
        
        [op setObject:dogInfo forKey:@"dog"];
    } 
    else if (viewingWindow) {
        [op setObject:[viewingWindow dogInfo] forKey:@"dog"];
    }
    
    NSString* response = (NSString*) [array JSONRepresentation];
    fprintf(stdout, "%s", [response UTF8String]);
}

- (void) saveAiringsToFileNamed:(NSString*)filename {
    NSURL *theURL =  [[NSURL alloc]initWithString:@"http://skymovies.sky.com/api/v3/airings"];
    [SKMAiring saveAiringsIntoFileNamed:filename fromURL:theURL];
}

+ (NSString*) downloadPath {
    return @"/tmp/download_skymovies.airings";
}

-(int) todaysDayIndex{
    NSCalendar *calendar = [NSCalendar currentCalendar];
    int todayDayIndex = (int)[[calendar components:NSWeekdayCalendarUnit fromDate:[NSDate date]] weekday] - 1;
    return todayDayIndex;
}

@end
