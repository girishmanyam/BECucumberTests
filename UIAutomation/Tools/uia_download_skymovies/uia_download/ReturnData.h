//
//  ReturnData.h
//  uia_download
//
//  Created by Ducros, Ronald on 16/01/2012.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ReturnData : NSObject

@property (nonatomic, retain) NSString *identifier;
@property (nonatomic) NSUInteger pageToReturn;
@property (nonatomic, retain) NSString *downloadData;

- (void) returnPageData;
- (NSString*) downloadPath;
- (NSUInteger) numberOfPages;

@end
