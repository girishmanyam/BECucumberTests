//
//  main.m
//  uia_download
//
//  Created by Ducros, Ronald on 16/01/2012.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

/* example usage:
 ~/bin/uia_download download file:///Users/ducrosr/Documents/Code/Popcorn/trunk/PopcornTests/Tools/uia_download/Test/16k+.json test2
 --> {"status":"success","pages":4,"reason":""}
 --> test2 is the identifier to identify this file (re-using will overwrite old data)
 ~/bin/uia_download data test2 1
 ~/bin/uia_download data test2 2
 ~/bin/uia_download data test2 3
 ~/bin/uia_download data test2 4
 --> combine the 4 pages to get the full downloaded file
 */

#import <Foundation/Foundation.h>
#import "DownloadData.h"
#import "WriteJsonResponse.h"
#import "ReturnData.h"
#import "AiringManager.h"

void DownloadURLData (NSString *url, NSString *identifier);
void ReturnURLData (NSString *identifier, NSString *page);

int main (int argc, const char * argv[]) {
    @autoreleasepool {
        
        if (argc < 2) {
            NSLog(@"usage: uia_download download /url/to/download identifier --> {\"status\":\"success/failed\", \"pages\":4, \"reason\":\"failure reason\"}");
            NSLog(@"usage: uia_download data identifier [page #] --> {data}");
            return 0;
        }
        
        NSString *command = [NSString stringWithFormat:@"%s", argv[1]];
        
        if ([[command lowercaseString] isEqualToString:@"fetchairings"]) {
            [AiringManager fetchAiringsIfExistingAiringsAreOlderThan:1.0];
            return 0;
        }
        
        if ([[command lowercaseString] isEqualToString:@"fetchairingsformovie"]) {
            if (argc != 3) {
                [WriteJsonResponse writeStatusResponse:NO reason:@"invalid number of arguments" pages:0];
                return 0;
            }
            
             NSString *arg = [NSString stringWithFormat:@"%s", argv[2]];
            [AiringManager fetchAiringsForMovieID:arg];
            return 0;
            
        }
        
                
        if ([[command lowercaseString] isEqualToString:@"download"]) {
            if (argc != 4) {
                [WriteJsonResponse writeStatusResponse:NO reason:@"invalid number of arguments" pages:0];
                return 0;
        }
            
            NSString *url = [NSString stringWithFormat:@"%s", argv[2]];
            NSString *identifer = [NSString stringWithFormat:@"%s", argv[3]];
            
            if (!url || !identifer) {
                [WriteJsonResponse writeStatusResponse:NO reason:@"invalid arguments" pages:0];
                return 0;
            }
            
            DownloadURLData (url, identifer);
            
            [AiringManager fetchAiringsIfExistingAiringsAreOlderThan:60.0*60.0];
            
            return 0;
        }
        
        if ([[command lowercaseString] isEqualToString:@"data"]) {
            if (argc != 4) {
                [WriteJsonResponse writeStatusResponse:NO reason:@"invalid number of arguments" pages:0];
                return 0;
            }
            
            NSString *identifer = [NSString stringWithFormat:@"%s", argv[2]];
            NSString *pageNumber = [NSString stringWithFormat:@"%s", argv[3]];

            if (!identifer || !pageNumber) {
                [WriteJsonResponse writeStatusResponse:NO reason:@"invalid arguments" pages:0];
                return 0;
            }
            
            ReturnURLData(identifer, pageNumber);
            
            return 0;
        }

        [WriteJsonResponse writeStatusResponse:NO reason:@"invalid command specified" pages:0];
    }
    
    return 0;
}

void DownloadURLData (NSString *url, NSString *identifier) {
    DownloadData *downloadData = [[DownloadData alloc] init];
    
    downloadData.downloadURL = url;
    downloadData.identifier = identifier;
    
    [downloadData download];
}

void ReturnURLData (NSString *identifier, NSString *page) {
    ReturnData *returnData = [[ReturnData alloc] init];
    
    NSUInteger pageToReturn = [page intValue] - 1; // page range starts at page 1
    
    returnData.identifier = identifier;
    returnData.pageToReturn = pageToReturn;
    
    [returnData returnPageData];    
}

