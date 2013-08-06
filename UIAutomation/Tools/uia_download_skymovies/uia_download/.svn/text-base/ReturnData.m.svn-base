#import "ReturnData.h"
#import "WriteJsonResponse.h"
#import "SkyMovies.h"
#import "Movies.h"
#import "NSObject+SBJson.h"

@implementation ReturnData

@synthesize identifier = _identifier;
@synthesize pageToReturn = _pageToReturn;
@synthesize downloadData = _downloadData;

- (id) init {
    self = [super init];
    
    if (self) {
        
    }
    
    return self;
}

- (void) returnPageData {

    NSString* strData = [NSString stringWithContentsOfFile:[self downloadPath] 
                              encoding:NSUTF8StringEncoding 
                                 error:nil];
    
    NSArray* categories = [strData JSONValue];
    


    if (self.pageToReturn < [categories count]) {
    
        NSDictionary* categoryDict = [categories objectAtIndex:self.pageToReturn];
        NSArray* assets = [categoryDict objectForKey:@"assets"];


        NSMutableDictionary* op = [NSMutableDictionary dictionary];
        NSMutableArray* movieData = [NSMutableArray array];
        
        int maxItems = 256;
        for(NSDictionary* entry in assets) {
            [movieData addObject:[entry objectForKey:@"id"]];
            
            if (maxItems-- == 0)
                break;
        }
        
        
        [op setValue:[categoryDict objectForKey:@"category"] forKey:@"categoryId"];
        [op setValue:movieData forKey:@"movies"];
        
        NSMutableArray* array = [NSMutableArray array];
        [array addObject:op];

        NSString* response = [array JSONRepresentation];
        
        fprintf(stdout, "%s", [response UTF8String]);
    }
}

- (NSString*) downloadPath {
    return [NSString stringWithFormat:@"/tmp/download_%@.data", self.identifier];
}

- (NSUInteger) numberOfPages {
    NSUInteger dataSize = [self.downloadData length];
    NSUInteger numberPages = dataSize / BUFFER_SIZE;
    
    if (dataSize % BUFFER_SIZE > 0)
        numberPages++;
    
    return numberPages;
}

@end
