//
//  DownloadData.m
//  uia_download
//
//  Created by Ducros, Ronald on 16/01/2012.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import "DownloadData.h"
#import "WriteJsonResponse.h"

@implementation DownloadData

@synthesize downloadURL = _downloadURL;
@synthesize identifier = _identifier;
@synthesize receivedData = _receivedData;
@synthesize connection = _connection;

- (id) init {
    self = [super init];
    
    if (self) {
        
    }
    
    return self;
}

- (void) download {
    NSURL *url = [NSURL URLWithString:self.downloadURL];
    
    if (!url) {
        [WriteJsonResponse writeStatusResponse:NO reason:@"invalid url" pages:0];
        return;
    }
    
    NSURLRequest *theRequest = [NSURLRequest requestWithURL:url
                                              cachePolicy:NSURLRequestUseProtocolCachePolicy
                                          timeoutInterval:60.0];

    self.connection = [[NSURLConnection alloc] initWithRequest:theRequest delegate:self];
    
    if (self.connection) {
        self.receivedData = [NSMutableData data];
    } else {
        [WriteJsonResponse writeStatusResponse:NO reason:@"invalid url connection" pages:0];
        return;
    }
    
    // need to wait for download to complete (or fail)
    while (!_downloadCompleted) {
        [[NSRunLoop currentRunLoop] runUntilDate:[NSDate dateWithTimeIntervalSinceNow:1.0]];
    }
}

- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response {
    [_receivedData setLength:0];
}

- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
    [_receivedData appendData:data];
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    self.connection = nil;
    self.receivedData = nil;    
    
    [WriteJsonResponse writeStatusResponse:NO reason:@"connection failed" pages:0];

    _downloadCompleted = YES;
}

- (void)connectionDidFinishLoading:(NSURLConnection *)connection {    
    if ([_receivedData writeToFile:[self downloadPath] atomically:YES] ){
        [WriteJsonResponse writeStatusResponse:YES reason:@"" pages:[self numberOfPages]];
    }
    else {
        [WriteJsonResponse writeStatusResponse:NO reason:@"saving to temp file" pages:0];
    }
    
    self.connection = nil;
    self.receivedData = nil;
    
    _downloadCompleted = YES;
}

- (NSString*) downloadPath {
    return [NSString stringWithFormat:@"/tmp/download_%@.data", self.identifier];
}

- (NSUInteger) numberOfPages {
    NSUInteger dataSize = [_receivedData length];
    NSUInteger numberPages = dataSize / BUFFER_SIZE;
    
    if (dataSize % BUFFER_SIZE > 0)
        numberPages++;
    
    return numberPages;
}

@end
