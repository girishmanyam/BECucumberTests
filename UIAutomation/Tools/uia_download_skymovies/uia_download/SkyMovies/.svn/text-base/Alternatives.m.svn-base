//
//  Alternatives.m
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import "Alternatives.h"


@implementation Alternatives

@synthesize quality = _quality;
@synthesize videoURL = _videoURL;


+ (Alternatives *)modelObjectWithDictionary:(NSDictionary *)dict
{
    Alternatives *instance = [[Alternatives alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.quality = [dict objectForKey:@"quality"];
            self.videoURL = [dict objectForKey:@"videoURL"];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.quality = [aDecoder decodeObjectForKey:@"quality"];
    self.videoURL = [aDecoder decodeObjectForKey:@"videoURL"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_quality forKey:@"quality"];
    [aCoder encodeObject:_videoURL forKey:@"videoURL"];
}

@end
