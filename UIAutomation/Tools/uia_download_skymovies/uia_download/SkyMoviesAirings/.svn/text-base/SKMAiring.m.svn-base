#import "SKMAiring.h"
#import "NSObject+SBJson.h"

@interface SKMAiring ()
- (id)objectOrNilForKey:(id)aKey fromDictionary:(NSDictionary *)dict;
@end

@implementation SKMAiring

@synthesize airingId = _airingId;
@synthesize channelId = _channelId;
@synthesize isHD = _isHD;
@synthesize movieId = _movieId;
@synthesize channelName = _channelName;
@synthesize startDateTime = _startDateTime;
@synthesize duration = _duration;
@synthesize availableOnSkyGo = _availableOnSkyGo;
@synthesize isRecordable = _isRecordable;

+ (SKMAiring *)modelObjectWithDictionary:(NSDictionary *)dict
{
    SKMAiring *instance = [[SKMAiring alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.airingId = [self objectOrNilForKey:@"airingId" fromDictionary:dict];
            self.channelId = [self objectOrNilForKey:@"channelId" fromDictionary:dict];
            self.isHD = [[dict objectForKey:@"isHD"] boolValue];
            self.movieId = [self objectOrNilForKey:@"movieId" fromDictionary:dict];
            self.channelName = [self objectOrNilForKey:@"channelName" fromDictionary:dict];
            self.startDateTime = [self objectOrNilForKey:@"startDateTime" fromDictionary:dict];
            self.duration = [[dict objectForKey:@"duration"] intValue];
            self.availableOnSkyGo = [[dict objectForKey:@"availableOnSkyGo"] boolValue];
            self.isRecordable = [[dict objectForKey:@"isRecordable"] boolValue];
    }
    
    return self;
}

- (NSDictionary *)dictionaryRepresentation
{
    NSMutableDictionary *mutableDict = [NSMutableDictionary dictionary];
    [mutableDict setValue:self.airingId forKey:@"airingId"];
    [mutableDict setValue:self.channelId forKey:@"channelId"];
    [mutableDict setValue:[NSNumber numberWithBool:self.isHD] forKey:@"isHD"];
    [mutableDict setValue:self.movieId forKey:@"movieId"];
    [mutableDict setValue:self.channelName forKey:@"channelName"];
    [mutableDict setValue:self.startDateTime forKey:@"startDateTime"];
    [mutableDict setValue:[NSNumber numberWithInt:(int)self.duration] forKey:@"duration"];
    [mutableDict setValue:[NSNumber numberWithBool:self.availableOnSkyGo] forKey:@"availableOnSkyGo"];
    [mutableDict setValue:[NSNumber numberWithBool:self.isRecordable] forKey:@"isRecordable"];

    return [NSDictionary dictionaryWithDictionary:mutableDict];
}

- (NSString *)description 
{
    return [NSString stringWithFormat:@"%@", [self dictionaryRepresentation]];
}

#pragma mark - Helper Method
- (id)objectOrNilForKey:(id)aKey fromDictionary:(NSDictionary *)dict
{
    id object = [dict objectForKey:aKey];
    return [object isEqual:[NSNull null]] ? nil : object;
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.airingId = [aDecoder decodeObjectForKey:@"airingId"];
    self.channelId = [aDecoder decodeObjectForKey:@"channelId"];
    self.isHD = [aDecoder decodeBoolForKey:@"isHD"];
    self.movieId = [aDecoder decodeObjectForKey:@"movieId"];
    self.channelName = [aDecoder decodeObjectForKey:@"channelName"];
    self.startDateTime = [aDecoder decodeObjectForKey:@"startDateTime"];
    self.duration = [aDecoder decodeIntegerForKey:@"duration"];
    self.availableOnSkyGo = [aDecoder decodeBoolForKey:@"availableOnSkyGo"];
    self.isRecordable = [aDecoder decodeBoolForKey:@"isRecordable"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_airingId forKey:@"airingId"];
    [aCoder encodeObject:_channelId forKey:@"channelId"];
    [aCoder encodeBool:_isHD forKey:@"isHD"];
    [aCoder encodeObject:_movieId forKey:@"movieId"];
    [aCoder encodeObject:_channelName forKey:@"channelName"];
    [aCoder encodeObject:_startDateTime forKey:@"startDateTime"];
    [aCoder encodeInteger:_duration forKey:@"duration"];
    [aCoder encodeBool:_availableOnSkyGo forKey:@"availableOnSkyGo"];
    [aCoder encodeBool:_isRecordable forKey:@"isRecordable"];
}

+ (void)saveAiringsIntoFileNamed:(NSString *)filename fromURL:(NSURL *)theURL{
    
    NSURLRequest *theRequest=[NSURLRequest requestWithURL:theURL cachePolicy:NSURLRequestUseProtocolCachePolicy timeoutInterval:60.0];
    NSData *data = [NSURLConnection sendSynchronousRequest:theRequest returningResponse:nil error:nil];
    NSAssert(data, @"failed to get airing data");
    [data writeToFile:filename atomically:YES];
}

+ (NSArray *)loadAiringsFromFileNamed:(NSString *)fileName {
    NSString* strData = [NSString stringWithContentsOfFile:fileName encoding:NSUTF8StringEncoding error:nil];
    NSArray* result = [strData JSONValue];
    NSMutableArray* airingResults = [NSMutableArray arrayWithCapacity:[result count]];
    for(id entry in result) {
        SKMAiring* airing = [SKMAiring modelObjectWithDictionary:entry];
        [airingResults addObject:airing];
    }
    
    return airingResults;
}

+ (NSArray *)airingsForMovieID:(NSString*)movieID fromAiringsArray:(NSArray*)allAirings{
    NSMutableArray* movieAirings = nil; 
    for(SKMAiring* airing in allAirings) {
        if ([airing.movieId isEqualToString:movieID]) {
            if (movieAirings == nil) {
                movieAirings = [NSMutableArray array];
            }
            
            [movieAirings addObject:airing];
        }
    }
    return movieAirings;
}


-(NSDate*) startingDate {
    return [self dateFromString:self.startDateTime];
}

-(BOOL) isExpired {
    //dang .. its seven days from the start of today, adjust end time
    NSDate* now = [NSDate date];
    NSCalendar *calendar = [NSCalendar currentCalendar];
    NSInteger units = NSHourCalendarUnit | NSMinuteCalendarUnit | NSSecondCalendarUnit;
    NSDateComponents* components =  [calendar components:units fromDate:now];
    NSTimeInterval secondsOffsetIntoToday = ([components hour] * 60 * 60) + ([components minute] * 60) + [components second];

    static double sevenDaysInSeconds = (7*24*60*60);
    NSTimeInterval airingSeconds = [self airingSeconds];
    if (((airingSeconds + self.duration) < 0) || (airingSeconds > (sevenDaysInSeconds-secondsOffsetIntoToday)))
        return YES;
    
    return NO;
}

-(NSTimeInterval) airingSeconds {
    return [[self startingDate] timeIntervalSinceNow];
}

-(int) startingDateDayIndex {
    NSCalendar *calendar = [NSCalendar currentCalendar];
    return (int)[[calendar components:NSWeekdayCalendarUnit fromDate:[self dateFromString:self.startDateTime]] weekday] - 1;
}

+ (NSString*) dayStringFromIndex:(int)dayNumber {
    static NSString* days[7] = {@"Sun", @"Mon", @"Tue", @"Wed", @"Thu", @"Fri", @"Sat"};
    return days[dayNumber];
}

- (NSDate*)dateFromString:(NSString*)dateString {
	if (!dateString)
        return nil;
    
    static NSDateFormatter *dateFormatter = nil;
    if (!dateFormatter) {
        dateFormatter = [[NSDateFormatter alloc] init];
        [dateFormatter setLenient:NO];
        [dateFormatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
        [dateFormatter setTimeZone:[NSTimeZone timeZoneWithName:@"UTC"]];
        [dateFormatter setDateFormat:@"yyyy-MM-dd'T'HH:mm:ss'Z'"];
    }
    
    
    
    return [dateFormatter dateFromString:dateString];
}

- (NSString*) prettyStringFromDate:(NSDate*)aDate showMinutes:(BOOL)showMinutes{
    
    static NSDateFormatter *dateFormatter = nil;
    if (!dateFormatter) {
        dateFormatter = [[NSDateFormatter alloc] init];
        [dateFormatter setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"]];
    }
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
	NSDateComponents *components = [gregorian components:NSMinuteCalendarUnit fromDate:aDate];
	NSInteger minutes = [components minute];
	if (0 == minutes) {
        [dateFormatter setDateFormat:@"ha EEE dd MMMM"];
        if (showMinutes == YES) {
            [dateFormatter setDateFormat:@"h.mma EEE dd MMMM"];
        }
	} else {
    
        [dateFormatter setDateFormat:@"h.mma EEE dd MMMM"];
	}
    
    return [NSString stringWithFormat:@"%@", [[dateFormatter stringFromDate:aDate] capitalizedString]];
}


@end
