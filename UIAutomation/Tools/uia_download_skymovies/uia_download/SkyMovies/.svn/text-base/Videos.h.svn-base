//
//  Videos.h
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>



@interface Videos : NSObject <NSCoding>

@property (nonatomic, retain) NSString *videoURL;
@property (nonatomic, retain) NSString *thumbnailURL;
@property (nonatomic, retain) NSString *title;
@property (nonatomic, retain) NSArray *alternatives;
@property (nonatomic, retain) NSString *type;

+ (Videos *)modelObjectWithDictionary:(NSDictionary *)dict;
- (id)initWithDictionary:(NSDictionary *)dict;

@end
