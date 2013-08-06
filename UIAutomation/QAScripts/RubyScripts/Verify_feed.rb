

require 'faraday'
require 'json'

url ='http://skymovies.sky.com/api'

#url ='http://publisher.qa2.skymovies.bskyb.com/api'
conn = Faraday::Connection.new url
response = nil 
conn.headers[:content_type] ="application/json"
conn.headers[:accept] = "application/json"  
res = conn.get 'movies/categories'
#res = conn.get 'v2/category'
puts "the response status #{res.status.to_i}"
categories_json = JSON.parse res.body


  
  
 @arr_catnames = Array.new
categories_json.each{ |cat|
  @arr_catnames.push cat["title"]
}

puts "gets the json response from categories webservice #{categories_json[0].length}"
puts "Category name = #{categories_json[0]["title"]}"+"  No of movies = #{categories_json[0]["movies"].length }"
puts "Category name = #{categories_json[1]["title"]}"+"  No of movies =  #{categories_json[1]["movies"].length }"
puts "Category name = #{categories_json[2]["title"]}"+"  No of movies =  #{categories_json[2]["movies"].length }"
puts "Category name = #{categories_json[3]["title"]}"+"  No of movies =  #{categories_json[3]["movies"].length }"
puts "Category name = #{categories_json[4]["title"]}"+"  No of movies =  #{categories_json[4]["movies"].length }"

@dp_movies = categories_json[0]["movies"] 
@onSky_movies = categories_json[1]["movies"]   
@onBox_movies = categories_json[2]["movies"] 
@cSoon_movies = categories_json[3]["movies"] 
@iCinemas_movies = categories_json[4]["movies"] 
  


#print the movies with out onNext category and airings object

 categories_json.each{ |categories|
   puts "******** #{categories["title"]} WITHOUT ONNEXT ************"
     categroy = categories["movies"]   
   all_movies = categroy.select{
     |movie| !movie.include?("viewingWindow") }
       #print all the movies
   all_movies.each { |movie| puts movie["title"] }
 }
 
 #duplicate movies in oon Sky movies category
@arr_duplicate_movies = Array.new
total_dulpicate = 0
 categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
  @arr_duplicate_movies.push movies["movieId"] }
total_dulpicate = total_dulpicate + (@arr_duplicate_movies.length.to_i-@arr_duplicate_movies.flatten().compact.uniq.length.to_i)
  @arr_duplicate_movies.clear
  }   
puts "****total duplicate movies across all the category :  #{total_dulpicate}"  

@arr_titles =Array.new
@arr_duplicat_movies = Array.new
@onSky_movies.each{ |movies|  
  @arr_duplicat_movies.push movies["movieId"]
  @arr_titles.push movies["title"]  
  }  
puts "Duplicate Movies on Sky movies category: #{@arr_titles.inject(Hash.new(0)) {|h,i| h[i] += 1; h }.select { |k,v| v > 1 }.map{ |k, v| k}.flatten}"    
   arr_new = @arr_duplicat_movies.flatten().compact.uniq
   puts "***********printing the duplicate movies ************"
   duplicate = @onSky_movies.length.to_i-arr_new.length.to_i
puts "****ACTUAL MOVIES IN on Sky movies:  #{@onSky_movies.length}  *********** DUPLICATED MOVIES :  #{duplicate} "


 
 #print the movies on OnSky movies picks with out airings
 
 daily_movies = categories_json[1]["movies"]
   movies_noairings = daily_movies.select { |movie|
   !movie.include?("airings")
   !movie.include?("viewingWindow")   }
   #print all movie titles without airings
puts "*****Movie with NO AIRINGS AND ONNEXT object in Sky movies category****"
movies_noairings.each {|movie| puts movie["title"] }
  
  #print the movies with flash vedios
  
categories_json.each{ |categories|
  puts "********  #{categories["title"]} FLASH VEDIOS************"
    categroy = categories["movies"]   
  trailer_movies = categroy.select{
    |movie| movie.include?("videos") }
     # puts "printing the movies with trailers"
  trailer_movies.each {|movievedios| 
    movievedios["videos"].each {|vedio| 
    if vedio["videoURL"].end_with?("flv")
      puts  vedio["videoURL"]
    end  } } }
    

#Verify the at cinemas movies doesn't have SVOD movies  
categories_json.each{ |categories|
  #puts "********  #{categories["title"]} SKY-GO/SVOD VEDIOS************"
  if categories["title"] ="At The Cinema" 
    categroy = categories["movies"]   
   svod_movies = categroy.select{
    |movie| movie.include?("skyGoVideoID") }   
    svod_movies.each{ |svod|
      if svod["skyGoVideoID"].length < 40
    puts "Movie title : " +svod["title"] + "  SVOD id ====> " + svod["skyGoVideoID"] + "  length is ===  #{svod["skyGoVideoID"].length}" end}end }
      

 #get the genre's list   
@arr_genre = Array.new
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
    @arr_genre.push movies["genres"] } }      
   arr_new = @arr_genre.flatten().compact.uniq
   puts "***********printing the genre list************"
   puts arr_new.sort
 
 #get list of certificates  
@arr_cert = Array.new
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
    if movies.include?("certificate")
    @arr_cert.push movies["certificate"]  end } }      
   arr_cer = @arr_cert.flatten()
   puts "***********printing the certificates list************"
   puts arr_cer.sort.flatten().compact.uniq.sort
   
   
   #Unique channels names
#@arr_channel = Array.new
#categories_json.each{ |categories|  
#categroy = categories["movies"] 
# categroy.each{ |movies|
#   if movies.include?("airings") 
#     all_airings = movies["airings"]
#     all_airings.each { |airings|
#   @arr_channel.push airings["channelName"]  }    
#   end 
# } }     
#   arr_channel = @arr_channel.flatten()
#   puts "***********printing the Channels list************"
#   puts arr_channel.sort.compact.uniq
   
 #Movies only on Linear channels
#@arr_linear = Array.new
#   categories_json.each{ |categories|  
# categroy = categories["movies"] 
# categroy.each{ |movies|
#   if movies.include?("airings") and (!movies.include?("skyGoVideoID"))
#     all_airings = movies["airings"]
#      all_airings.each { |airings|
#        if (airings["availableOnSkyGo"])
#         @arr_linear.push movies["title"] + "start time ===> " + airings["startDateTime"] + " channel ======>  " + airings["channelName"]
#         # @arr_linear.push airings["channelName"]
#        end
#      }    
#   end 
# } }     
#arr_linear = @arr_linear.flatten()
#puts "****************printing the list movies only linear now***********"
#puts arr_linear.sort.compact.uniq
   

def search_byGenre(category_name,genre_type) 
 #puts "********" + genre_type.to_str()
  @arr_genreSearch = Array.new
  if (category_name == "Daily Picks")
    cat_movies = @dp_movies 
  elsif (category_name == "On Sky Movies")
    cat_movies = @onSky_movies 
elsif (category_name == "Sky Store")
    cat_movies = @onBox_movies  
elsif (category_name == "Coming Soon")
    cat_movies = @cSoon_movies
elsif (category_name == "At The Cinema")
    cat_movies = @iCinemas_movies     
else 
puts "Pls enter the correct category name" 
end          
  cat_movies.each {|movies|
    if movies.include?("genres")
  genres = movies["genres"]
       genres.each{|genre|
        if (genre == genre_type.to_str())
          @arr_genreSearch.push movies["title"]     
        end
       } 
    end   
    }
  puts "*********Category name is ==>" +  category_name  + "  ******genre type is ===> " + genre_type.to_str()
  puts @arr_genreSearch.flatten().compact.uniq()  
  puts "***total number of movies is *** #{@arr_genreSearch.length} " + "\n"  
end
  
    

#genre_name ="Animation"

#@arr_catnames.each{ |name|
# search_byGenre(name,genre_name)
#}

#print the movies with muliple trailers
 
@arr_multiTrailers = Array.new
@counter = 0
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
    categroy.each{ |movies|
      if movies.include?("videos") 
        videos =movies["videos"]
        no_of_videos = videos.length
        if (no_of_videos > 1)
          videos.each {|video|
            type = video["type"]
            if (type =="trailer")
              @counter = @counter + 1
            end
          }
          if (@counter > 1)
            @arr_multiTrailers.push  movies["title"]
          end
      end
      end
    }
  }
    
  puts "************Printing the movies titles for multiple trailers***********"  
 puts  @arr_multiTrailers.flatten().compact.uniq()
 
 
 #Need to add the test that Sky premiere is not available on Sky Go

#print the movies which has not isHDFlag
@arr_notIsHD = Array.new
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
    if movies.include?("airings") 
      all_airings = movies["airings"]
       all_airings.each { |airings|
         if (!airings.include?("isHD"))
          # @arr_linear.push movies["title"] + "start time ===> " + airings["startDateTime"] + " channel ======>  " + airings["channelName"]
           @arr_notIsHD.push movies["title"]
         end
       }    
    end 
  } }     
arr_linear = @arr_notIsHD.flatten()
puts "****************printing the list movies not have isHD flag***********"
puts arr_linear.sort.compact.uniq


#print all the linear  SD and HD channel numbers :

@arr_HDChannel = Array.new
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
    if movies.include?("airings") 
      all_airings = movies["airings"]
       all_airings.each { |airings|
         if (airings["isHD"])
          # @arr_linear.push movies["title"] + "start time ===> " + airings["startDateTime"] + " channel ======>  " + airings["channelName"]
           @arr_HDChannel.push airings["channelId"] << "   " << airings["channelName"]
         end
       }    
    end 
  } }     
arr_linear = @arr_HDChannel.flatten()
puts "****************printing the list HD channel number***********"
puts arr_linear.sort.compact.uniq


@arr_sdChannel = Array.new
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
    if movies.include?("airings") 
      all_airings = movies["airings"]
       all_airings.each { |airings|
         if (!airings["isHD"])
          # @arr_linear.push movies["title"] + "start time ===> " + airings["startDateTime"] + " channel ======>  " + airings["channelName"]
             @arr_sdChannel.push airings["channelId"] << "   " << airings["channelName"]

         end
       }    
    end 
  } }     
arr_linear = @arr_sdChannel.flatten()
puts "****************printing the list SD channel number***********"
puts arr_linear.sort.compact.uniq





    
    
      
