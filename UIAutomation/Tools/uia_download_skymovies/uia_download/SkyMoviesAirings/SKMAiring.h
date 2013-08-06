#import <Foundation/Foundation.h>

@interface SKMAiring : NSObject <NSCoding>

@property (nonatomic, retain) NSString *airingId;
@property (nonatomic, retain) NSString *channelId;
@property (nonatomic, assign) BOOL isHD;
@property (nonatomic, retain) NSString *movieId;
@property (nonatomic, retain) NSString *channelName;
@property (nonatomic, retain) NSString *startDateTime;
@property (nonatomic, assign) NSInteger duration;
@property (nonatomic, assign) BOOL availableOnSkyGo;
@property (nonatomic, assign) BOOL isRecordable;

+ (SKMAiring *)modelObjectWithDictionary:(NSDictionary *)dict;
- (id)initWithDictionary:(NSDictionary *)dict;
- (NSDictionary *)dictionaryRepresentation;

+ (void) saveAiringsIntoFileNamed:(NSString*)filename fromURL:(NSURL*) theURL;
+ (NSArray*) loadAiringsFromFileNamed:(NSString*)fileName;


+ (NSArray*)airingsForMovieID:(NSString*)movieID fromAiringsArray:(NSArray*)allAirings;

- (NSDate*)dateFromString:(NSString*)dateString;
- (NSString*) prettyStringFromDate:(NSDate*)aDate showMinutes:(BOOL)showMinutes;
+ (NSString*) dayStringFromIndex:(int)dayNumber;

@property (nonatomic, readonly) BOOL isExpired;
@property (nonatomic, readonly) int startingDateDayIndex;
@property (nonatomic, readonly) NSDate* startingDate;
@property (nonatomic, readonly) NSTimeInterval airingSeconds;

@end
