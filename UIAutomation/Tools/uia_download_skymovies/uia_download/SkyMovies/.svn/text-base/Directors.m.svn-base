//
//  Directors.m
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import "Directors.h"


@implementation Directors

@synthesize name = _name;


+ (Directors *)modelObjectWithDictionary:(NSDictionary *)dict
{
    Directors *instance = [[Directors alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.name = [dict objectForKey:@"name"];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.name = [aDecoder decodeObjectForKey:@"name"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_name forKey:@"name"];
}

@end
