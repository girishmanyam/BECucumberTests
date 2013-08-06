//
//  Movies.h
//
//  Created by Joe Crowley on 08/04/2012
//  Copyright (c) 2012 BSkyB Ltd. All rights reserved.
//

#import <Foundation/Foundation.h>

@class ViewingWindow;

@interface Movies : NSObject <NSCoding>

@property (nonatomic, retain) NSArray *genres;
@property (nonatomic, retain) NSString *releaseYear;
@property (nonatomic, retain) NSString *synopsis;
@property (nonatomic, retain) NSArray *directors;
@property (nonatomic, retain) NSString *movieId;
@property (nonatomic, retain) NSString *checksum;
@property (nonatomic, retain) NSString *title;
@property (nonatomic, retain) NSArray *cast;
@property (nonatomic, retain) NSString *quote;
@property (nonatomic, retain) NSString *certificate;
@property (nonatomic, retain) NSString *skyMoviesUrl;
@property (nonatomic, retain) ViewingWindow *viewingWindow;
@property (nonatomic, assign) NSInteger duration;
@property (nonatomic, retain) NSArray *cardImages;
@property (nonatomic, retain) NSString *skyGoVideoID;
@property (nonatomic, retain) NSArray *keyArtImages;
@property (nonatomic, retain) NSArray *videos;

+ (Movies *)modelObjectWithDictionary:(NSDictionary *)dict;
- (id)initWithDictionary:(NSDictionary *)dict;

@end
