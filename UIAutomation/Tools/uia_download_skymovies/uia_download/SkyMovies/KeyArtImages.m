//
//  KeyArtImages.m
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import "KeyArtImages.h"


@implementation KeyArtImages

@synthesize width = _width;
@synthesize height = _height;
@synthesize imageURL = _imageURL;


+ (KeyArtImages *)modelObjectWithDictionary:(NSDictionary *)dict {

    KeyArtImages *instance = [[KeyArtImages alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.width = [[dict objectForKey:@"width"] intValue];
            self.height = [[dict objectForKey:@"height"] intValue];
            self.imageURL = [dict objectForKey:@"imageURL"];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.width = [aDecoder decodeIntegerForKey:@"width"];
    self.height = [aDecoder decodeIntegerForKey:@"height"];
    self.imageURL = [aDecoder decodeObjectForKey:@"imageURL"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeInteger:_width forKey:@"width"];
    [aCoder encodeInteger:_height forKey:@"height"];
    [aCoder encodeObject:_imageURL forKey:@"imageURL"];
}

@end
