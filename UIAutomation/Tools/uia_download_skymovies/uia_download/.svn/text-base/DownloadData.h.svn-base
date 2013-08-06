//
//  DownloadData.h
//  uia_download
//
//  Created by Ducros, Ronald on 16/01/2012.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface DownloadData : NSObject {
    @private
    BOOL _downloadCompleted;
}

@property (nonatomic, retain) NSString *downloadURL;
@property (nonatomic, retain) NSString *identifier;
@property (nonatomic, retain) NSMutableData *receivedData;
@property (nonatomic, retain) NSURLConnection *connection;

- (void) download;
- (NSString*) downloadPath;
- (NSUInteger) numberOfPages;

@end
