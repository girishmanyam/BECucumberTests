//
//  Movies.m
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import "Movies.h"
#import "Directors.h"
#import "Cast.h"
#import "ViewingWindow.h"
#import "CardImages.h"
#import "KeyArtImages.h"
#import "Videos.h"


@implementation Movies

@synthesize genres = _genres;
@synthesize releaseYear = _releaseYear;
@synthesize synopsis = _synopsis;
@synthesize directors = _directors;
@synthesize movieId = _movieId;
@synthesize checksum = _checksum;
@synthesize title = _title;
@synthesize cast = _cast;
@synthesize quote = _quote;
@synthesize certificate = _certificate;
@synthesize skyMoviesUrl = _skyMoviesUrl;
@synthesize viewingWindow = _viewingWindow;
@synthesize duration = _duration;
@synthesize cardImages = _cardImages;
@synthesize skyGoVideoID = _skyGoVideoID;
@synthesize keyArtImages = _keyArtImages;
@synthesize videos = _videos;


+ (Movies *)modelObjectWithDictionary:(NSDictionary *)dict
{
    Movies *instance = [[Movies alloc] initWithDictionary:dict];
    return instance;
}

- (id)initWithDictionary:(NSDictionary *)dict
{
    self = [super init];
    
    // This check serves to make sure that a non-NSDictionary object
    // passed into the model class doesn't break the parsing.
    if(self && [dict isKindOfClass:[NSDictionary class]]) {
            self.genres = [dict objectForKey:@"genres"];
            self.releaseYear = [dict objectForKey:@"year"];
            self.synopsis = [dict objectForKey:@"synopsis"];
    NSObject *receivedDirectors = [dict objectForKey:@"directors"];
    NSMutableArray *parsedDirectors = [NSMutableArray array];
    if ([receivedDirectors isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedDirectors) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedDirectors addObject:[Directors modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedDirectors isKindOfClass:[NSDictionary class]]) {
       [parsedDirectors addObject:[Directors modelObjectWithDictionary:(NSDictionary *)receivedDirectors]];
    }

    self.directors = [NSArray arrayWithArray:parsedDirectors];
            self.movieId = [dict objectForKey:@"id"];
            self.checksum = [dict objectForKey:@"sum"];
            self.title = [dict objectForKey:@"headline"];
    NSObject *receivedCast = [dict objectForKey:@"cast"];
    NSMutableArray *parsedCast = [NSMutableArray array];
    if ([receivedCast isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedCast) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedCast addObject:[Cast modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedCast isKindOfClass:[NSDictionary class]]) {
       [parsedCast addObject:[Cast modelObjectWithDictionary:(NSDictionary *)receivedCast]];
    }

    self.cast = [NSArray arrayWithArray:parsedCast];
            self.quote = [dict objectForKey:@"quote"];
            self.certificate = [dict objectForKey:@"cert"];
            self.skyMoviesUrl = [dict objectForKey:@"url"];
            self.viewingWindow = [ViewingWindow modelObjectWithDictionary:[dict objectForKey:@"viewingWindow"]];
            self.duration = [[dict objectForKey:@"duration"] intValue];
    NSObject *receivedCardImages = [dict objectForKey:@"cardImages"];
    NSMutableArray *parsedCardImages = [NSMutableArray array];
    if ([receivedCardImages isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedCardImages) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedCardImages addObject:[CardImages modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedCardImages isKindOfClass:[NSDictionary class]]) {
       [parsedCardImages addObject:[CardImages modelObjectWithDictionary:(NSDictionary *)receivedCardImages]];
    }

    self.cardImages = [NSArray arrayWithArray:parsedCardImages];
            self.skyGoVideoID = [dict objectForKey:@"id"];
    NSObject *receivedKeyArtImages = [dict objectForKey:@"keyArtImages"];
    NSMutableArray *parsedKeyArtImages = [NSMutableArray array];
    if ([receivedKeyArtImages isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedKeyArtImages) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedKeyArtImages addObject:[KeyArtImages modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedKeyArtImages isKindOfClass:[NSDictionary class]]) {
       [parsedKeyArtImages addObject:[KeyArtImages modelObjectWithDictionary:(NSDictionary *)receivedKeyArtImages]];
    }

    self.keyArtImages = [NSArray arrayWithArray:parsedKeyArtImages];
    NSObject *receivedVideos = [dict objectForKey:@"videos"];
    NSMutableArray *parsedVideos = [NSMutableArray array];
    if ([receivedVideos isKindOfClass:[NSArray class]]) {
        for (NSDictionary *item in (NSArray *)receivedVideos) {
            if ([item isKindOfClass:[NSDictionary class]]) {
                [parsedVideos addObject:[Videos modelObjectWithDictionary:item]];
            }
       }
    } else if ([receivedVideos isKindOfClass:[NSDictionary class]]) {
       [parsedVideos addObject:[Videos modelObjectWithDictionary:(NSDictionary *)receivedVideos]];
    }

    self.videos = [NSArray arrayWithArray:parsedVideos];

    }
    
    return self;
    
}

#pragma mark - NSCoding Methods

- (id)initWithCoder:(NSCoder *)aDecoder
{
    self = [super init];

    self.genres = [aDecoder decodeObjectForKey:@"genres"];
    self.releaseYear = [aDecoder decodeObjectForKey:@"year"];
    self.synopsis = [aDecoder decodeObjectForKey:@"synopsis"];
    self.directors = [aDecoder decodeObjectForKey:@"directors"];
    self.movieId = [aDecoder decodeObjectForKey:@"id"];
    self.checksum = [aDecoder decodeObjectForKey:@"sum"];
    self.title = [aDecoder decodeObjectForKey:@"headline"];
    self.cast = [aDecoder decodeObjectForKey:@"cast"];
    self.quote = [aDecoder decodeObjectForKey:@"quote"];
    self.certificate = [aDecoder decodeObjectForKey:@"cert"];
    self.skyMoviesUrl = [aDecoder decodeObjectForKey:@"url"];
    self.viewingWindow = [aDecoder decodeObjectForKey:@"viewingWindow"];
    self.duration = [aDecoder decodeIntegerForKey:@"duration"];
    self.cardImages = [aDecoder decodeObjectForKey:@"cardImages"];
    self.skyGoVideoID = [aDecoder decodeObjectForKey:@"id"];
    self.keyArtImages = [aDecoder decodeObjectForKey:@"keyArtImages"];
    self.videos = [aDecoder decodeObjectForKey:@"videos"];
    return self;
}

- (void)encodeWithCoder:(NSCoder *)aCoder
{

    [aCoder encodeObject:_genres forKey:@"genres"];
    [aCoder encodeObject:_releaseYear forKey:@"year"];
    [aCoder encodeObject:_synopsis forKey:@"synopsis"];
    [aCoder encodeObject:_directors forKey:@"directors"];
    [aCoder encodeObject:_movieId forKey:@"id"];
    [aCoder encodeObject:_checksum forKey:@"sum"];
    [aCoder encodeObject:_title forKey:@"headline"];
    [aCoder encodeObject:_cast forKey:@"cast"];
    [aCoder encodeObject:_quote forKey:@"quote"];
    [aCoder encodeObject:_certificate forKey:@"cert"];
    [aCoder encodeObject:_skyMoviesUrl forKey:@"url"];
    [aCoder encodeObject:_viewingWindow forKey:@"viewingWindow"];
    [aCoder encodeInteger:_duration forKey:@"duration"];
    [aCoder encodeObject:_cardImages forKey:@"cardImages"];
    [aCoder encodeObject:_skyGoVideoID forKey:@"id"];
    [aCoder encodeObject:_keyArtImages forKey:@"keyArtImages"];
    [aCoder encodeObject:_videos forKey:@"videos"];
}

@end
