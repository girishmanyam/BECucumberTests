//
//  SkyMovies.h
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>



@interface SkyMovies : NSObject <NSCoding>

@property (nonatomic, retain) NSString *categoryId;
@property (nonatomic, retain) NSString *title;
@property (nonatomic, retain) NSArray *movies;

+ (SkyMovies *)modelObjectWithDictionary:(NSDictionary *)dict;
- (id)initWithDictionary:(NSDictionary *)dict;

@end
