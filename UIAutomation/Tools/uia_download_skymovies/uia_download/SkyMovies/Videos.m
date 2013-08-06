//
//  Videos.m
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import "Videos.h"
#import "Alternatives.h"


@implementation Videos

@synthesize videoURL = _videoURL;
@synthesize thumbnailURL = _thumbnailURL;
@synthesize title = _title;
@synthesize alternatives = _alternatives;
@synthesize type = _type;


+ (Videos *)modelObjectWithDictionary:(NSDictionary *)dict
{
    Videos *instance = [[Videos alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.videoURL = [dict objectForKey:@"videoURL"];
            self.thumbnailURL = [dict objectForKey:@"thumbnailURL"];
            self.title = [dict objectForKey:@"title"];
    NSObject *receivedAlternatives = [dict objectForKey:@"alternatives"];
    NSMutableArray *parsedAlternatives = [NSMutableArray array];
    if ([receivedAlternatives isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedAlternatives) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedAlternatives addObject:[Alternatives modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedAlternatives isKindOfClass:[NSDictionary class]]) {
       [parsedAlternatives addObject:[Alternatives modelObjectWithDictionary:(NSDictionary *)receivedAlternatives]];
    }

    self.alternatives = [NSArray arrayWithArray:parsedAlternatives];
            self.type = [dict objectForKey:@"type"];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.videoURL = [aDecoder decodeObjectForKey:@"videoURL"];
    self.thumbnailURL = [aDecoder decodeObjectForKey:@"thumbnailURL"];
    self.title = [aDecoder decodeObjectForKey:@"title"];
    self.alternatives = [aDecoder decodeObjectForKey:@"alternatives"];
    self.type = [aDecoder decodeObjectForKey:@"type"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_videoURL forKey:@"videoURL"];
    [aCoder encodeObject:_thumbnailURL forKey:@"thumbnailURL"];
    [aCoder encodeObject:_title forKey:@"title"];
    [aCoder encodeObject:_alternatives forKey:@"alternatives"];
    [aCoder encodeObject:_type forKey:@"type"];
}

@end
