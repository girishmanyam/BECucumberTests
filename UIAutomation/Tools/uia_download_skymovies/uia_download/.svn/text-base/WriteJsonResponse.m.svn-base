#import "WriteJsonResponse.h"
#import "SBJson.h"

@implementation WriteJsonResponse

+ (void) writeStatusResponse:(BOOL)success reason:(NSString*)reason pages:(NSUInteger)pages {
    NSMutableDictionary *output = [NSMutableDictionary dictionary];
    
    [output setObject:success ? @"success" : @"failed" forKey:@"status"];
    [output setObject:reason forKey:@"reason"];
    [output setObject:[NSNumber numberWithUnsignedInteger:pages] forKey:@"pages"];
    
    SBJsonWriter *writer = [[SBJsonWriter alloc] init];
    
    NSString *jsonOutput = [writer stringWithObject:output];
    
    fprintf(stdout, "%s\n", [jsonOutput UTF8String]);
    
}

@end
