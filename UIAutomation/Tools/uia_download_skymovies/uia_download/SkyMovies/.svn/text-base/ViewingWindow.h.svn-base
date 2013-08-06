//
//  ViewingWindow.h
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>



@interface ViewingWindow : NSObject <NSCoding>

@property (nonatomic, retain) NSString *wayToWatch;
@property (nonatomic, retain) NSString *title;
@property (nonatomic, retain) NSString *endDate;
@property (nonatomic, retain) NSString *startDate;

+ (ViewingWindow *)modelObjectWithDictionary:(NSDictionary *)dict;
- (id)initWithDictionary:(NSDictionary *)dict;

- (NSDictionary *)dictionaryRepresentation;

+ (ViewingWindow *)fetchForMovieID:(NSString*)movieID;

@property (nonatomic, readonly) NSDictionary* dogInfo;
@property (nonatomic, readonly) NSDate* startingDate;

@end
