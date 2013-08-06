require 'rubygems'
require 'rspec'
require 'rspec/expectations'
require 'cucumber'
require 'faraday'
require 'json'
require 'uri'


Before do
  puts BASE_URL
	@connection = Faraday::Connection.new BASE_URL
	@connection.proxy(ENV['HTTP_PROXY']) if defined? ENV['HTTP_PROXY']
	@response = nil
end

Given /^I send and accept JSON$/ do
	@connection.headers[:content_type] = @connection.headers[:accept] = "application/json"
end

When /^I send a GET request for "([^\"]*)"$/ do |path|
	@response = @connection.get path
end

Then /^the response should be "([^\"]*)"$/ do |status|
	@response.status.should == status.to_i
end

Then /^the response should be successful$/ do
	(200..299).should include @response.status.to_i
end

Then /^the response should be unauthorised$/ do
	@response.status.to_i.should == 401
end

Then /^the response should be not found or gone$/ do
	[404, 410].should include @response.status.to_i
end

Then /^the response should be forbidden$/ do
	@response.status.to_i.should == 403
end

Then /^the response should be JSON/ do
	@response.headers["Content-Type"].should =~(/^application\/json/)
	json = JSON.parse @response.body
	json.should be
end

Then /^the body should be a list$/ do
	list = JSON.parse @response.body
	list.should be_an Array
end

Then /^the body should have authorisation code (\d+)$/ do |authCode|
	user = JSON.parse @response.body
	user["authCode"].should == authCode.to_i
end

Then /^each element of the list should be a index objects$/ do
  categories = JSON.parse @response.body
  categories.each do |category|
    category.should have_string_called("category")
    category.should have_string_called("title")
    ["Daily Picks","On Sky Movies","Sky Store","Coming Soon","At The Cinema","Sky Movies 007","Disney"].should include(category["title"])
    ["featured","onskymovies","skystore","comingsoon","cinema","007","disney"].should include(category["category"])
     category["assets"].length.should_not be_zero
     category.should have_array_called("assets")
     if category.include?("children")
        category.should have_array_called("children")
        category["children"].each { |childItem|
                     childItem.should have_string_called("id")
                     childItem.should have_string_called("sum")
                           }      
     end      
  end
end

Then /^each category index object should contain a list of "([^\"]*)"$/ do |type|
  categories = JSON.parse @response.body
  categories.each do |category|
    category.should have_array_called("assets")
    category["assets"].each do |asset|
			if asset["class"] == type
       		  id = asset["id"]
       		  request_url = "v3/asset?ids=#{id}"
       		  #puts "The request Url is #{request_url} "
       		  @newResponse = createHttpConnection request_url
       		  #puts "The response Url is #{@newResponse} "
       		  if type == "Movie"
      	 	  testMovieObject @newResponse
      	 	  elsif type = "Article" || "Gallery" || "Vedio"
      	 	  testNonMovieObject @newResponse
      	 	  end
			end
    end
  end  
end

Then /^each item in the list should contains airing information$/ do
airings = JSON.parse @response.body
airings.each do |airing|
	testAiringObject(airing)
	end 
end

Then /^each item in the list should contains movieId and checksum$/ do
Category_index = JSON.parse @response.body
Category_index.each do |category|
	category.should have_string_called("category")
    category.should have_string_called("title")
    category.should have_array_called("assets")
    category["assets"].each do |asset|
   			 testCategoryIndex asset
    		end	
	end
end

Then /^each item in the list should contains category and title$/ do
Category_list = JSON.parse @response.body
Category_list.each do |category|
	category.should have_string_called("category")
    category.should have_string_called("title")
    category.should have_string_called("locator")
    ["Daily Picks","On Sky Movies","Sky Store","Coming Soon","At The Cinema","Sky Movies 007","Disney"].should include(category["title"])
		end
end

Then /^each category object should contain a list of article objects$/ do
categories = JSON.parse @response.body
  categories.each do |category|
    category.should have_array_called("items")
    category["items"].each do |article|
    if article["class"] == "Article"
      testNonMovieObject article
    end
    end 
  end  
  
end

Then /^each category object should contain a list of gallery objects$/ do
categories = JSON.parse @response.body
  categories.each do |category|
    category.should have_array_called("items")
    category["items"].each do |gallery|
      if gallery["class"] == "Gallery"
        testNonMovieObject gallery
     end
    end 
end
end

Then /^each category object should contain a list of vedio objects$/ do
categories = JSON.parse @response.body
  categories.each do |category|
    category.should have_array_called("items")
    category["items"].each do |videoList|
    	if videoList["class"] == "Video"
      		testNonMovieObject videoList
    	end
    end 
 end
end


Then /^fail$/ do
	throw :untested
end

# Object tests.

def createHttpConnection(uri)
@connection = Faraday::Connection.new BASE_URL
#puts "URL  #{BASE_URL}"
@connection.headers[:content_type] = @connection.headers[:accept] = "application/json"
@response = @connection.get uri
#puts "The response status is #{@response.status}"
	@index_list = JSON.parse @response.body
end

def testNonMovieObject(assetResponse)
assetResponse[0].should be_a Hash
nonMovie = assetResponse[0]
nonMovie.should have_string_called("id")
nonMovie.should have_string_called("class")
  
  if nonMovie.include?("url")
   nonMovie.should have_URL_called("url")
  end
  
  nonMovie.should have_string_called("sum")
  nonMovie.should have_string_called("headline")
  
   if nonMovie.include?("body")
	  nonMovie.should have_string_called("body")
  end
  
  if nonMovie.include?("src")
   nonMovie.should have_URL_called("src")
  end
  
  if nonMovie.include?("cardImages")
  	nonMovie.should have_array_called("cardImages")
  	nonMovie["cardImages"].each do |image|
  	  testImageObject image
    end
  end
  if nonMovie.include?("keyArtImages")
  	nonMovie.should have_array_called("keyArtImages")
  	nonMovie["keyArtImages"].each do |image|
  	  testImageObject image
    end
  end
  
  if nonMovie.include?("galleryImages")
  	nonMovie.should have_array_called("galleryImages")
  	nonMovie["galleryImages"].each do |image|
  	  testImageObject image
    end
  end
  
end



def testCategoryIndex(asset)
	asset.should have_string_called("id")
	asset.should have_string_called("sum")
	asset.should have_string_called("class")
	["Movie", "Gallery", "Article"].should include(asset["class"])
end

def testImageObject(image)
  image.should have_non_negative_integer_called("h")
  image.should have_non_negative_integer_called("w")
  image.should have_URL_called("url")
  if image.include?("heading")
    image.should have_string_called("heading")
  end
  
  if image.include?("caption")
    image.should have_string_called("caption")
  end
  
end

def testAiringObject(airing)
  airing.should have_string_called("movieId")
  airing.should have_string_called("airingId")
  airing.should have_string_called("channelId")
  airing.should have_bool_called("isRecordable")
  # TODO
  if airing.include?("availableOnSkyGo")
    airing.should have_bool_called("availableOnSkyGo")
  end
   if airing.include?("isHD")
        airing.should have_bool_called("isHD")
    end  
  airing.should have_date_called("startDateTime")
  airing.should have_non_negative_integer_called("duration")
  airing.should have_string_called("channelName")
end

def testVideoObject(video)
  video.should have_string_called("type")
  ["trailer", "clip", "interview"].should include(video["type"])
  if video.include?("duration")
    video.should have_non_negative_integer_called("duration")
  end
  if video.include?("title")
    video.should have_string_called("title")
  end
  if video.include?("thumbnailUrl")
   video.should have_URL_called("thumbnailUrl")
  end
  
  if video.include?("url")
   video.should have_URL_called("url")
  end

end

def testActorObject(actor)
  actor.should have_string_called("name")
end

def testDirectorObject(director)
  director.should have_string_called("name")
end

def testOnNextObject(onNext)
    onNext.should have_string_called("startDate")
    onNext["startDate"].should =~(/\d{4}\-\d{2}\-\d{2}/)    
onNext.should have_string_called("onNextCategory")
["Sky Movies","Sky Movies Box Office","At the cinema"].should include(onNext["onNextCategory"])
if onNext.include?("endDate")                                                                       
    onNext.should have_string_called("endDate") 
    onNext["endDate"].should =~(/\d{4}\-\d{2}\-\d{2}/)                                                                      
end                                                                       
    
end

def testMovieObject(assetResponse)
assetResponse[0].should be_a Hash
movie = assetResponse[0]
movie.should have_string_called("id")
  movie.should have_string_called("class")
 movie.should have_string_called("headline")
	
	if movie.include?("url")
  		movie.should have_URL_called("url")
  	end

  movie.should have_string_called("sum")
 
 if movie.include?("synopsis")
 	movie.should have_string_called("synopsis")
 end
 
 if movie.include?("quote")
 	movie.should have_string_called("quote")
 end

=begin	
	if movie.include?("airings")
  	movie["airings"].should be_an Array
  	movie["airings"].each do |airing|
  	  testAiringObject airing
  	end
	end
=end

	
	if movie.include?("cert")
	  movie["cert"].should be_a String
    ["TBC", "Uc", "U", "PG", "12", "15", "18"].should include(movie["cert"])
	end
  if movie.include?("genres")
    genres = movie["genres"]
    genres.should be_an Array
    genres.each do |genre|
      genre.should be_a String
    end
  end
  if movie.include?("cardImages")
  	movie.should have_array_called("cardImages")
  	movie["cardImages"].each do |image|
  	  testImageObject image
    end
  end
  if movie.include?("keyArtImages")
  	movie.should have_array_called("keyArtImages")
  	movie["keyArtImages"].each do |image|
  	  testImageObject image
    end
  end
	if movie.include?("duration")
	  movie.should have_non_negative_integer_called("duration")
	end
	
=begin
  if movie.include?("videos")
    videos = movie["videos"]
    videos.should be_an Array
    videos.each do |video|
      testVideoObject video
    end
  end
=end
  if movie.include?("cast")
    cast = movie["cast"]
    cast.should be_an Array
    cast.each do |actor|
      testActorObject actor
    end
  end
  if movie.include?("directors")
    directors = movie["directors"]
    directors.should be_an Array
    directors.each do |director|
      testDirectorObject director
    end
  end
	movie.should have_string_called("year")
    
    if movie.include?("skyGoId")
      skyGoVideoID = movie["skyGoId"]
        skyGoVideoID.should be_an String
        #skyGoVideoID.to_i.should be <41
    end
    
    if movie.include?("onNext")
        onNext = movie["onNext"]
        onNext.should be_an Hash
        testOnNextObject onNext
     end   
#need to find out the actual key name
  if movie.include?("body")
	  movie.should have_string_called("body")
  end

end

# Custom matchers.

RSpec::Matchers.define :have_URL_called do |expected|
  match do |actual|
    actual.should have_string_called expected
    URI::extract(actual[expected]).should have(1).items
  end
end

RSpec::Matchers.define :have_string_called do |expected|
  match do |actual|
    actual.should be_a Hash
		actual.should have_key(expected)
		actual[expected].should be_a String
  end
end

RSpec::Matchers.define :have_bool_called do |expected|
  match do |actual|
    actual.should be_a Hash
		actual.should have_key(expected)
		actual[expected].should satisfy { |o| o.boolean? }
  end
end

RSpec::Matchers.define :have_array_called do |expected|
  match do |actual|
    actual.should be_a Hash
		actual.should have_key(expected)
		actual[expected].should be_an Array
  end
end

RSpec::Matchers.define :have_date_called do |expected|
  match do |actual|
    actual.should be_a Hash
		actual.should have_key(expected)
    actual[expected].should be_a String
    actual[expected].should =~(/\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}Z/)
  end
end

RSpec::Matchers.define :have_non_negative_integer_called do |expected|
  match do |actual|
    actual.should be_a Hash
		actual.should have_key(expected)
    actual[expected].should be_an Integer
    actual[expected].to_i.should be > 0
  end
end

class Object
  def boolean?
    self.is_a?(TrueClass) || self.is_a?(FalseClass) 
  end
end
