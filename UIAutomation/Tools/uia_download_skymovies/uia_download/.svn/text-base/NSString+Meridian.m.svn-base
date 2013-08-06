//
//  NSString+Meridian.m
//  skm_uia_download
//
//  Created by Girish Manyam on 05/02/2013.
//
//

#import "NSString+Meridian.h"

@implementation NSString (Meridian)

- (NSString*)lowerCasedMeridian {
    
    NSRange range = [self rangeOfString:@"Pm"];
    if (range.location != NSNotFound) {
        return [self stringByReplacingOccurrencesOfString:@"Pm" withString:@"pm"];
    }
    
    range = [self rangeOfString:@"Am"];
    if (range.location != NSNotFound) {
        return [self stringByReplacingOccurrencesOfString:@"Am" withString:@"am"];
    }
    
    return self;
}

@end
