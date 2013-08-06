require 'faraday'
require 'json'
require 'pry'

url ='http://skymovies.sky.com/api'

#url ='http://publisher.qa2.skymovies.bskyb.com/api'
conn = Faraday::Connection.new url
response = nil 
conn.headers[:content_type] ="application/json"
conn.headers[:accept] = "application/json"  
#res = conn.get 'movies/categories'
res = conn.get 'v3/category/index'
puts "the response status #{res.status.to_i}"
categories_json = JSON.parse res.body
publisher_json =" "
create_json  = " "
asset_json = " "
start_json = "["
end_json = "]"
comma = ","
create_json << start_json
index = 0
categories_json.each { |category| 
index = index + 1
short_title = category["category"]
title = category["title"]
assets = category["assets"]
ids_title = "ids_#{title}".gsub(" ", "").downcase
ids_title  = []
assets.each{ |asset| 
	if asset["class"] == "Movie"
       ids_title  << asset["id"] 
	 end 	
}

ids = ids_title.first(10)

asset_index = 0
asset_json << start_json
ids.each { |id|
	asset_index = asset_index + 1 
 asset_json << {
         :class => "Movie",
         :id => id
 }.to_json
 asset_json << comma if asset_index < 10 
}

assets = asset_json << end_json

asset_json = " "

create_json  << {
	:category => short_title,
	:title => title,
	:assets => assets}.to_json
 
create_json  << comma if index < categories_json.length 
}
publisher_json =  create_json << end_json

puts publisher_json.gsub!("\\","").gsub!("""""","").gsub!(':" ', ':').gsub(']"',']')

