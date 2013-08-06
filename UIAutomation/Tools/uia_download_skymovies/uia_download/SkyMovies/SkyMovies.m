#import "SkyMovies.h"
#import "Movies.h"


@implementation SkyMovies

@synthesize categoryId = _categoryId;
@synthesize title = _title;
@synthesize movies = _movies;


+ (SkyMovies *)modelObjectWithDictionary:(NSDictionary *)dict
{
    SkyMovies *instance = [[SkyMovies alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.categoryId = [dict objectForKey:@"category"];
            self.title = [dict objectForKey:@"title"];
    
        NSArray* allMovies = [dict objectForKey:@"movies"];
        NSArray* receivedMovies = [allMovies objectAtIndex:0];
        
        
    NSMutableArray *parsedMovies = [NSMutableArray array];
    if ([receivedMovies isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedMovies) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedMovies addObject:[Movies modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedMovies isKindOfClass:[NSDictionary class]]) {
       [parsedMovies addObject:[Movies modelObjectWithDictionary:(NSDictionary *)receivedMovies]];
    }

    self.movies = [NSArray arrayWithArray:parsedMovies];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.categoryId = [aDecoder decodeObjectForKey:@"categoryId"];
    self.title = [aDecoder decodeObjectForKey:@"title"];
    self.movies = [aDecoder decodeObjectForKey:@"movies"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_categoryId forKey:@"categoryId"];
    [aCoder encodeObject:_title forKey:@"title"];
    [aCoder encodeObject:_movies forKey:@"movies"];
}

@end
