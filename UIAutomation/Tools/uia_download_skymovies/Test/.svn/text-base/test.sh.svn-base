#! /bin/sh

if [ -f /tmp/testdata.json ] 
then
	rm -rf /tmp/testdata.json
fi

/usr/bin/uia_download download file:///Users/ducrosr/Documents/Code/Popcorn/trunk/PopcornTests/Tools/uia_download/Test/16k+.json test2
/usr/bin/uia_download data test2 1 > /tmp/testdata.json
/usr/bin/uia_download data test2 2 >> /tmp/testdata.json
/usr/bin/uia_download data test2 3 >> /tmp/testdata.json
/usr/bin/uia_download data test2 4 >> /tmp/testdata.json

cksum /Users/ducrosr/Documents/Code/Popcorn/trunk/PopcornTests/Tools/uia_download/Test/16k+.json
cksum /tmp/testdata.json
