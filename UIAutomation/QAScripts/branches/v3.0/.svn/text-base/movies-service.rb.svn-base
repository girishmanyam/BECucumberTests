#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'json'
require 'uri'

categories = [ "featured", "onskymovies", "comingsoon", "cinema" ]

all_categories = [
	{
		"categoryId" => "comingsoon",
    "title" => "Coming Soon",
		"movies" => [ "8a3f88993003135501300dbbf44e1920", "8a3e88992dc2f8c5012dcd005d9b7836", "8a3e8899306f3a6f01306f9fe9b11476", "8a3e8899306f3a6f01306f9219961431"]
	},
	{
		"categoryId" => "cinema",
		"title" => "In Cinemas",
		"movies" => [ "8a3e88992dc2f8c5012dcd005d9b7836", "8a3e8899306f3a6f01306f9fe9b11476", "8a3e8899306f3a6f01306f9219961431"]
	},
	{
		"categoryId" => "featured",
		"title" => "Featured",
		"movies" => [
		  "8a3e88991ed140aa011ef0ae6c256419",
		  "8a3e88992dc2f8c5012dcd005d9b7836",
		  "8a3f8899304b32150130655940084e18",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3e8899306f3a6f01306f9219961431",
		  "8a3e88991ed140aa011ef0ae6c256419",
		  "8a3e88992dc2f8c5012dcd005d9b7836",
		  "8a3f8899304b32150130655940084e18",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3e8899306f3a6f01306f9219961431",
		  "8a3e88991ed140aa011ef0ae6c256419",
		  "8a3e88992dc2f8c5012dcd005d9b7836",
		  "8a3f8899304b32150130655940084e18",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3e8899306f3a6f01306f9219961431",
		  "8a3e88991ed140aa011ef0ae6c256419",
		  "8a3e88992dc2f8c5012dcd005d9b7836",
		  "8a3f8899304b32150130655940084e18",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3e8899306f3a6f01306f9219961431",
		  "8a3e88991ed140aa011ef0ae6c256419",
		  "8a3e88992dc2f8c5012dcd005d9b7836",
		  "8a3f8899304b32150130655940084e18",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3e8899306f3a6f01306f9219961431",
		  "8a3e88991ed140aa011ef0ae6c256419",
		  "8a3e88992dc2f8c5012dcd005d9b7836",
		  "8a3f8899304b32150130655940084e18",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3e8899306f3a6f01306f9219961431"
		  ]
	},
	{
		"categoryId" => "onskymovies",
		"title" => "On Sky Movies",
		"movies" => [
		  "8a3e8899306f3a6f01306f9fe9b11476",
      "8a3f88993003135501300dbbf44e1920",
      "8a3e88992dc2f8c5012dcd005d9b7836",
      "8a3e8899306f3a6f01306f9219961431"
		  ]
	}
]

now = Time.now.gmtime
all_movies = [
  {
      "movieId" => "8a3f8899304b32150130655940084e18",
      "title" => "I Sell The Dead With A Very Long Title that spans several lines",
      "airings" => [
        {"startDateTime" => "2011-09-05T11:05:00Z",
        "channelName" => "Sky Comedy",
        "channelId" => "1002",
	"isHD" => false,
        "airingId" => "394",
        "isRecordable" => true,
  			"availableOnSkyGo" => true,
        "duration" => 7200},
        {"startDateTime" => "2011-09-05T11:05:00Z",
        "channelName" => "Sky Comedy",
        "channelId" => "4019",
	"isHD" => true,
        "airingId" => "394",
        "isRecordable" => true,
  			"availableOnSkyGo" => true,
        "duration" => 7200},
        {"startDateTime" => "2011-08-29T03:15:00Z",
        "channelName" => "Sky Comedy",
        "channelId" => "4019",
	"isHD" => true,
        "airingId" => "331",
        "isRecordable" => true,
  			"availableOnSkyGo" => true,
        "duration" => 5700},
        {"startDateTime" => "2011-08-29T03:15:00Z",
        "channelName" => "Sky Comedy",
        "channelId" => "1002",
	"isHD" => false,
        "airingId" => "331",
        "isRecordable" => true,
  			"availableOnSkyGo" => true,
        "duration" => 5700}],
      "directors" => [{"name" => "Glenn McQuaid"}],
      "cast" => [{"name" => "Dominic Monaghan"},{"name" => "Ron Perlman"},{"name" => "Larry Fessenden"},{"name" => "Angus Scrimm"}],
      "synopsis" => "While awaiting the guillotine, condemned grave robber Arthur (Dominic Monaghan) tells the story of his life among the dead - and undead - to a curious priest (Ron Perlman). The murky backwoods of 19th century Ireland provide the ideal backdrop for ghoulishly amusing episodes involving vampires, zombies, and a family of rival corpse traders. Producer Larry Fessenden plays Arthur's partner-in-crime in what amounts to the memoirs of Burke and Hare - as realised by Tim Burton. Look out for Phantasm bogeyman Angus Scrimm as a blackmailing surgeon.",
      "quote" => "the baddies get away with Russian accents that would put most meerkats to shame",
      "review" => "A fairly grim and unrelenting film about the relationship between Joan Crawford and her adopted daughter Christina.\nThe star is depicted as a vicious, self-serving monster who beat her child for petty reasons. Doubtless many of the actual events are true but, of course, we only see one side of the story - Christina's.\nAlthough one longs for the other point of view, the result is certainly a very effective case history, with hard-driving Faye Dunaway at times looking uncannily like Crawford.\nLittle Mara Hobel offers a very forthright and clearly delineated portrait of Christina as a child but Diana Scarwid's interpretation of the adult Christina is less certain.",
      "videos" => [],
      "certificate" => "15",
      "review" => "I saw this movie as part of the Midnite Madness at Sitges. Set in 18th century England, the plot covers the life of Arthur Blake from his first outing as an apprentice grave robber to his final confession on the eve of his execution.

      The plot moves along via a series of misadventures involving Arthur and his partner encountering various unsavory characters and bizarre situations.

      The first thing that strikes you about this movie is how accurately they managed to capture the look of the Hammer period horrors, the atmosphere is set with lots of fog laden graveyards, rowdy tavern scenes and excellent set/costume design.

      For a movie titled I Sell the Dead, I was expecting the emphasis to be mostly on horror - don't get me wrong there are some jumpy moments and gore, but the tone is very much comedic, driven by the situations the characters get themselves into and their dialog. The closest comparison to the scenes between the two leads (Larry Fessenden and Dominic Monaghan) is the character interaction seen in the classic English comedies Only Fools and Horses, the Two Ronnies and Morecambe and Wise.

      The acting is strong and the casting of very familiar faces in Ron Perlman and Angus Scrimm lift the movie above many of the others on view in Sitges.

      Overall the movie offers something very different to the current crop of mainstream horror and will leave a smile on your face.",
  	  "cardImages" => [
  	    {
      		"imageURL" => "http://varnishqa.entertainment.bskyb.com/image/unscaled/2011/06/20/I-Sell-The-Dead-3.jpg",
      		"width" => 580,
      		"height" => 326
  	    }
	    ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Basil.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Basil_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Basil_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
      "releaseYear" => "2008",
      "genres" => []
    },
  {
      "movieId" => "8a3e88991ed140aa011ef0ae6c256419",
      "title" => "The Sterile Cuckoo",
      "airings" => [
          {
              "startDateTime" => "2011-12-27T12:25:00Z",
              "channelName" => "Sky Classics",
              "isRecordable" => true,
              "availableOnSkyGo" => true,
              "channelId" => "1812",
              "isHD" => false,
              "airingId" => "307",
              "duration" => 7200 }, 
	{
              "startDateTime" => "2011-12-27T12:25:00Z",
              "channelName" => "Sky Classics",
              "isRecordable" => true,
              "availableOnSkyGo" => true,
              "channelId" => "1812",
              "isHD" => false,
              "airingId" => "307",
              "duration" => 7200 },
	{
              "startDateTime" => "2011-12-27T12:25:00Z",
              "channelName" => "Sky Classics",
              "isRecordable" => true,
              "availableOnSkyGo" => true,
              "channelId" => "1812",
              "isHD" => false,
              "airingId" => "307",
              "duration" => 7200 },
          {
              "startDateTime" => "2011-12-27T12:25:00Z",
              "channelName" => "Sky Classics",
              "isRecordable" => true,
              "availableOnSkyGo" => true,
              "channelId" => "4012",
              "isHD" => true,
              "airingId" => "307",
              "duration" => 7200 }, 
	{
              "startDateTime" => "2011-12-27T12:25:00Z",
              "channelName" => "Sky Classics",
              "isRecordable" => true,
              "availableOnSkyGo" => true,
              "channelId" => "4012",
              "isHD" => true,
              "airingId" => "307",
              "duration" => 7200 },
	{
              "startDateTime" => "2011-12-27T12:25:00Z",
              "channelName" => "Sky Classics",
              "isRecordable" => true,
              "availableOnSkyGo" => true,
              "channelId" => "4012",
              "isHD" => true,
              "airingId" => "307",
              "duration" => 7200 }],
      "directors" => [ ],  
      "cast" => [ ],
      "synopsis" => "Comedy drama starring Liza Minnelli as Mary Ann",
      "quote" => "",
      "review" => "Aileen and John Crowley (Russell & Fraser) live life in an American dreamland - they've got a fine clapboard house, he's worked his way up the corporate ladder and they've got three gorgeous kids.\nExcept. Except their two youngest children suffer from the muscle-wasting and ultimately terminal Pompe Disease - a condition for which there is no known cure.\nAfter a brush with death when their nine-year-old daughter Megan (Droeger) almost dies after catching a seemingly innocuous cold, John decides drastic action is necessary.\nHe heads off from Portland to remote Nebraska to track down unconventional scientist Dr Robert Stonehill, a maverick who has his own pet theories about dealing with the disease.\nBearing a close resemblance to 1992's Lorenzo's Oil, this drama - based loosely on a true story - is the classic families-against-the-system yarn that sees John giving up his hard-fought corporate position to set up his own self-funded biotech company with the irascible Stonehill.\nOn the plus side, there's a disturbing insight into the capitalist machinations of industro-chemical corporations that put profit in front of the simple human desire to save lives.",
      "videos" => [ ],
      "certificate" => "PG",
  	  "cardImages" => [
  	    {
      		"imageURL" => "http://varnishqa.entertainment.bskyb.com/image/unscaled/2011/06/21/sterile-cuckoo-03.jpg",
          "width" => 580,
      		"height" => 326
  	    }
	    ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Ponyo.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Ponyo_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Ponyo_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
      "duration" => 108*60,
      "releaseYear" => "1969",
      "genres" => []
  } ,
	{
		"movieId" => "8a3f88993003135501300dbbf44e1920",
		"title" => "Up",
		"airings" => [
			#now
			{
			"airingId" => "12345",
			"channelId" => "4015",
			"isHD" => true,
			"isRecordable" => true,
			"availableOnSkyGo" => true,
			"startDateTime" => (now-600).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Modern Greats"
			},{
			"airingId" => "12345",
			"channelId" => "1815",
			"isHD" => false,
			"isRecordable" => true,
			"availableOnSkyGo" => true,
			"startDateTime" => (now-600).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Modern Greats"
			}
		],
		"genres" => [
		  "Western",
		  "SciFi"
		],
	  "cardImages" => [
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/Point-Blank-landscape-iPhone.jpeg",
    		"width" => 580,
    		"height" => 326
	    },
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/Point-Blank-landscape.jpeg",
    		"width" => 1366,
    		"height" => 768
	    },
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/Point-Blank-portrait-iPhone.jpeg",
    		"width" => 360,
    		"height" => 480
	    },
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/Point-Blank-portrait.jpg",
    		"width" => 770,
    		"height" => 1024
	    }
	  ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Tron_Legacy.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Tron_Legacy_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Tron_Legacy_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
		"duration" => 84*60,
		"synopsis" => "Parisian hospital nurse and dad-to-be Samuel (Gilles Lellouche) forges an unlikely alliance with safecracker Startet (Roschdy Zem) when they're framed for the murder of an industrialist. To make matters worse the real killers have taken Samuel's pregnant wife hostage and have instructed him to hand Startet over...or she dies. Anything For Her director Fred Cavaye piles on the action in a slick, heart-pounding thriller that will inevitably face the Hollywood remake treatment.",
      "quote" => "this time he's added a creepy cold steel to his customary day-glo melodrama",
      "review" => "British cinema works best when filmmakers go for big ideas rather than big budgets and Kill List is a salutary lesson for aspiring filmmakers that magic can be woven with the most modest means (well, half a million quid here).\nJay (Maskell) is ex-army, traumatised by alluded to events in Iraq and Kiev, spending beyond his means and in a stormy marriage with his ex-Swedish army wife Shel (Burning).",
		"videos" => [
			# Editorial ordering. First trailer in list will be playable from card.
			{ 
				"type" => "trailer", 
				"duration" => 180,
				"title" => "Point Blank Trailer", 
				"thumbnailURL" => "http://thumbnail.com/pointblank.png", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			},
			{ 
				"type" => "interview", 
				"duration" => 300,
				"title" => "Point Blank Interview", 
				"thumbnailURL" => "http://thumbnail.com/pointblank.png", 
				"videoURL" => "http://interview.mp4" 
			}
	  ],
		"cast" => [
		  { "name" => "Tom Hanks" },
		  { "name" => "Winona Ryder" },
		  { "name" => "Christina Ricci" },
		  { "name" => "Kevin Spacey" }
		],
    "directors" => [  
      { "name" => "Stephen Spielberg" },
      { "name" => "George Lucas" }
    ],
		"releaseYear" => "2010"
	},
	{
		"movieId" => "8a3e88992dc2f8c5012dcd005d9b7836",
		"title" => "The Guard",
		"airings" => [
			# tomorrow, tonight
			{
			"airingId" => "12346",
			"channelId" => "1814",
			"isHD" => false,
			"isRecordable" => false,
			"availableOnSkyGo" => true,
			"startDateTime" => now.strftime("%Y-%m-%dT20:00:00Z"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			},
			{
			"airingId" => "12347",
			"channelId" => "1814",
			"isHD" => false,
			"isRecordable" => true,
			"availableOnSkyGo" => false,
			"startDateTime" => (now+86400).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			},
			# tomorrow, tonight HD
			{
			"airingId" => "12346",
			"channelId" => "4033",
			"isHD" => true,
			"isRecordable" => false,
			"availableOnSkyGo" => true,
			"startDateTime" => now.strftime("%Y-%m-%dT20:00:00Z"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			},
			{
			"airingId" => "12347",
			"channelId" => "4033",
			"isHD" => true,
			"isRecordable" => true,
			"availableOnSkyGo" => false,
			"startDateTime" => (now+86400).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			}
		],
		"videos" => [
 			{ 
				"type" => "trailer", 
				"duration" => 47,
				"title" => "",
				"thumbnailURL" => "http://dan.worldjourney.com/images/guard-trailer-1.jpg", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			},
 			{ 
				"type" => "trailer", 
				"title" => "The Guard Trailer is very good indeed", 
				"thumbnailURL" => "http://dan.worldjourney.com/images/guard-trailer-2.jpg", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			},
 			{ 
				"type" => "trailer", 
				"duration" => 10,
				"title" => "Teaser", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			},
 			{ 
				"type" => "trailer", 
				"duration" => 120,
				"thumbnailURL" => "http://dan.worldjourney.com/images/guard-trailer-2.jpg", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			},
 			{ 
				"type" => "trailer", 
				"duration" => 1382,
				"title" => "Interview", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			},
 			{ 
				"type" => "trailer", 
				"duration" => 61,
				"thumbnailURL" => "http://example.com/thumbnail.jpg", 
				"videoURL" => "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8" 
			}
		],
		"cast" => [
		  { "name" => "Tom Hanks" },
		  { "name" => "Winona Ryder" }
		],
		"directors" => [  
			{ "name" => "George Lucas" }
		],
		"certificate" => "TBC",
		"genres" => [
		  "Western"
		],
	  "cardImages" =>	[
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/iPhonePortrait.jpeg",
    		"width" => 320,
    		"height" => 480
	    },
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/iPhonePortraitRetina.jpeg",
    		"width" => 640,
    		"height" => 960
	    },
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/iPadPortrait.jpeg",
    		"width" => 768,
    		"height" => 1024
	    }
	  ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Condorman.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Condorman_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Condorman_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
		"duration" => 96*60,
		"synopsis" => "In writer-director John Michael McDonagh's debut feature The Guard, an unorthodox, small-town Irish policeman with a confrontational manner and a weakness for prostitutes (Brendan Gleeson) is teamed up with an uptight FBI agent (Don Cheadle) to investigate an international drug-smuggling ring. McDonagh - brother of In Bruges director Martin - shows the family way for a sharp script and a fondness for Gleason's enticing world weariness.",
      "quote" => "",
      "review" => "",
		"releaseYear" => "2011"
	},
	{
		"movieId" => "8a3e8899306f3a6f01306fb2c92b14e0",
		"title" => "Middle Men",
		"airings" => [
			# today + 2
			{
			"airingId" => "12348",
			"channelId" => "1814",
			"isHD" => false,
			"startDateTime" => (now+172800).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"isRecordable" => false,
			"availableOnSkyGo" => true,
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			},
			# today + 2
			{
			"airingId" => "12348",
			"channelId" => "4033",
			"isHD" => true,
			"startDateTime" => (now+172800).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"isRecordable" => false,
			"availableOnSkyGo" => true,
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			}
		],
		"certificate" => "18",
		"genres" => [
		  "SciFi"
		],
	  "cardImages" => [
	    {
    		"imageURL" => "http://media.entertainment.sky.com/image/unscaled/2011/06/08/Middle-Men-1-1.jpg",
    		"width" => 580,
    		"height" => 326
	    }
	  ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Up.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Up_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Up_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
		"duration" => 107*60,
		"synopsis" => "When straight-as-a-dye web entrepreneur Jack Harris (Luke Wilson) builds up an online billing empire for the adult entertainment business he finds himself morally adrift in a sordid sea of conmen, Russian mobsters, drug addicts and exotic performers. Before long Jack and his two partners are making $200,000 a day...but it's not to last. When a pushy young porn star (Laura Ramsey) muscles in and the FBI begin to take an interest, Jack starts to question his apparently foolproof plan to get rich quick.",
		"releaseYear" => "2009"
	},
	{
		"movieId" => "8a3e8899306f3a6f01306f9fe9b11476",
		"title" => "The Eagle Path",
		"airings" => [
			# today + 3
			{
			"airingId" => "12349",
			"channelId" => "1814",
			"isHD" => false,
			"isRecordable" => true,
			"availableOnSkyGo" => false,
			"startDateTime" => (now+86400*3).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Movies"
			},
			# today + 3
			{
			"airingId" => "12349",
			"channelId" => "4033",
			"isHD" => true,
			"isRecordable" => true,
			"availableOnSkyGo" => false,
			"startDateTime" => (now+86400*3).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Movies"
			}
		],
		"cast" => [
		  { "name" => "Winona Ryder" },
		  { "name" => "Christina Ricci" }
		],
		"directors" => [  
			{ "name" => "Stephen Spielberg" }
		],
		"certificate" => "15",
		"genres" => [],
	  "cardImages" => [
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/iPadLandscape.jpeg",
    		"width" => 1024,
    		"height" => 768
	    },
	    {
    		"imageURL" => "http://dan.worldjourney.com/images/iPadPortrait.jpeg",
    		"width" => 768,
    		"height" => 1024
	    }
	  ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Goonies.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Goonies_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Goonies_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
		"duration" => 84*60,
		"synopsis" => "Only Jean-Claude Van Damme's second directorial effort after 1996's The Quest, this sees the \"Muscles from Brussels\" playing Frenchy, a traumatised ex-soldier making a living driving a taxi in Thailand. One fateful night he picks up - and falls for - the mysterious Sophia (Claudia Bassols), a beauty who is running the risk of becoming a high class call girl.",
      "quote" => "",
      "review" => "The brainchild of pushy new employee Natalie Keener (Kendrick), the scheme is so abhorrent to Bingham that he agrees to take her out on the road to demonstrate why the human touch is crucial in professional sacking.\nAs Natalie gets a startling glimpse of the messy emotional complexities inherent in the job, Bingham embarks on a passionate affair with another frequent flier, businesswoman Alex (Farmiga).\nSlowly warming to Natalie and pressured to become involved in the preparations for his younger sister's upcoming wedding, Bingham begins to rethink his life of solitude and considers opening up to Alex.\nWhile it may sound like humdrum romcom fare mixed with the first 20 minutes of Fight Club, this modern world-weary tale of loneliness, social dislocation and dehumanising corporate culture is anything but trite.\nAlong with a fine screenplay that sidesteps cliche at every turn, Reitman's real coup is the strength of the actors he's brought on-board to make cameos as the workers facing a firing.",
		"releaseYear" => "2011"
	},
	{
		"movieId" => "8a3e8899306f3a6f01306f9219961431",
		"title" => "Greetings To The Devil",
		"airings" => [
			# today + 4,5,6
			{
			"airingId" => "12350",
			"channelId" => "1814",
			"isHD" => false,
			"isRecordable" => true,
			"availableOnSkyGo" => false,
			"startDateTime" => (now+86400*4).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Movies"
			},
			{
			"airingId" => "12351",
			"channelId" => "1814",
			"isHD" => false,
			"isRecordable" => false,
			"availableOnSkyGo" => true,
			"startDateTime" => (now+86400*5).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Movies"
			},
			{
			"airingId" => "12352",
			"channelId" => "1814",
			"isHD" => false,
			"isRecordable" => true,
			"availableOnSkyGo" => true,
			"startDateTime" => (now+86400*6).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Movies"
			},
			# today + 4,5,6
			{
			"airingId" => "12350",
			"channelId" => "4033",
			"isHD" => true,
			"isRecordable" => true,
			"availableOnSkyGo" => false,
			"startDateTime" => (now+86400*4).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			},
			{
			"airingId" => "12351",
			"channelId" => "4033",
			"isHD" => true,
			"isRecordable" => false,
			"availableOnSkyGo" => true,
			"startDateTime" => (now+86400*5).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			},
			{
			"airingId" => "12352",
			"channelId" => "4033",
			"isHD" => true,
			"isRecordable" => true,
			"availableOnSkyGo" => true,
			"startDateTime" => (now+86400*6).strftime("%Y-%m-%dT%H:%I:%MZ"),
			"duration" => 120*60,
			"channelName" => "Sky Showcase"
			}
		],
		"cast" => [
		  { "name" => "Tom Hanks" }
		],
		"directors" => [
		],
		"certificate" => "TBC",
	  "cardImages" => [
	    {
    		"imageURL" => "http://media.entertainment.sky.com/image/unscaled/2011/06/08/Greetings-To-The-Devil-3-1.jpg",
    		"width" => 580,
    		"height" => 326
	    }
	  ],
	  "keyArtImages" => [
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Madagascar.png",
    		"width" => 114,
    		"height" => 169
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Madagascar_x2.png",
    		"width" => 228,
    		"height" => 338
	    },
	    {
    		"imageURL" => "http://commandlineninja.ca/sky/keyart/Madagascar_ipad.png",
    		"width" => 160,
    		"height" => 237
	    }
	  ],
		"duration" => 84*60,
		"synopsis" => "The Colombian Orozco brothers write and direct this visceral drama featuring The Bourne Ultimatum's Edgar Ramirez as Angel, a former guerrilla fighter seeking a fresh start after turning in his arms and giving up his violent ways in exchange for amnesty. But after a victim from his former life kidnaps his daughter, he's given just 72 hours to track down and murder the members of his former rebel unit.",
      "quote" => "",
      "review" => "For Buck, read schmuck. That's how bulbous John Candy's cast in this simplistic but rather enjoyable comedy.\nFat, out-of-work and 40, and forever evading marriage to his long-suffering girlfriend (Amy Madigan), Buck suddenly finds himself temporarily in charge of his brother's kids, two wild juveniles and Tia, a teenager who shows all the signs of getting herself pregnant at an early age.\nBuck is a sausage-fingers who breaks everything and cooks enormous breakfasts consisting of eggs on onions, but the kids' problems appeal in no time to his innate sense of adulthood and, in a few weeks, he proves himself a better parent than his brother ever was.\nIt all sounds too predictable to be much fun, but in fact it works well, giving Candy a chance to show what he can do, playing a variant on the slob who comes good that he played in Planes, Trains and Automobiles.\nReview from IPC.",
		"releaseYear" => "2011",
    "genres" => []
	}
]

def deepcopy(obj)
  Marshal::load(Marshal::dump(obj))
end

$accounts={ "admin" => "password" };

helpers do
	def protected!(user_path)
		unless authorized? user_path
			response['WWW-Authenticate'] = %(Basic realm="Restricted")
			halt 401
		end
	end

	def authorized?(user_path)
		@auth ||= Rack::Auth::Basic::Request.new(request.env)
		@auth.provided? and @auth.basic? and @auth.credentials and
			(@auth.credentials == ["admin", $accounts["admin"]] or
			@auth.credentials == [user_path, $accounts[user_path]])
	end
end


### CATEGORIES

# A list of all categories
# E.g., curl --verbose -H "Accept: application/json" -H "Content-Type: application/json" https://movies-service.heroku.com/categories/

get '/movies/categories/?' do
	cache_control :no_cache
	content_type 'application/json'
	categories.map { |id|
		category = deepcopy(all_categories.detect { |category|
			category["categoryId"] == id })

		movies = category["movies"].map { |movieId|
		  all_movies.detect { |movie|
		    movie["movieId"] == movieId
		  }}

		category["movies"]=movies
		category}.to_json
end

# category self
get '/categories/:categoryId' do
	cache_control :no_cache
	content_type 'application/json'
	categoryId = URI.unescape(params[:categoryId])
	category = deepcopy(all_categories.detect { |category|
	    category["categoryId"] == categoryId
	  })
	halt 404 unless category

	movies = category["movies"].map { |id|
	  all_movies.detect { |movie|
	    movie["movieId"] == id
	  }}
        category["movies"]=movies
#	category["nofCards"] = category["movies"].count
#	category["nofTrailers"] = category["movies"].inject(0) do |sum,movie|
#		movie["videos"].nil??sum:movie["videos"].count + sum
#	end
	category.to_json
end


### MOVIE DETAIL	  

# Detail for a particular movie.
get '/movies/:movieId' do
  cache_control :no_cache
  content_type 'application/json'
	movieId = URI.unescape(params[:movieId])
  movie = all_movies.detect { |movie|
    movie["movieId"] == movieId
  }
  halt 404 unless movie
  movie.to_json
end


### REMOTE RECORD

#:TODO http status code should be an error where rr fails
post '/users/:userid/recordings/:channelId/:airingId' do
	protected!('changeme_path')
        cache_control :no_cache
        content_type 'application/json'
	{
		"status" => "0"
	}.to_json
end

get '/users/:userid' do
	protected!('changeme_path')
        cache_control :no_cache
        content_type 'application/json'
	{}.to_json
end

