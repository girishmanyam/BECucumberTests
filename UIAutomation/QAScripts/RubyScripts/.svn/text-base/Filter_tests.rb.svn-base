require 'faraday'
require 'json'

#url ='http://publisher.skymovies.bskyb.com/api'
#movies API version 1.2
url  ='http://skymovies.sky.com/api/v2'
conn = Faraday::Connection.new url
response = nil 
conn.headers[:content_type] ="application/json"
conn.headers[:accept] = "application/json"  
res = conn.get 'category/all'
puts "the response status #{res.status.to_i}"
categories_json = JSON.parse res.body


  
  
 @arr_catnames = Array.new
categories_json.each{ |cat|
  @arr_catnames.push cat["title"]
}

@dp_movies = categories_json[0]["movies"] 
@onSky_movies = categories_json[1]["movies"]   
@onBox_movies = categories_json[2]["movies"] 
@cSoon_movies = categories_json[3]["movies"] 
@iCinemas_movies = categories_json[4]["movies"] 
  
  
#Sudo logo for certificate 
  
#Certificates U,PG,12,12A,15,18 
def searchBy_certificate(certificate,category_name)
  @arr_certSearch = Array.new
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
   # if movies.include?("certificate")
      if (certificate == "U")
        @condition = (movies["certificate"] == "U")
      elsif (certificate == "PG")
        @condition =  (movies["certificate"] == "PG")
      elsif (certificate == "12")
          @condition = ((movies["certificate"] == "12") or (movies["certificate"] == "12A"))
     elsif (certificate == "15")
        @condition = (movies["certificate"] == "15")
      elsif (certificate == "18")
          @condition = (movies["certificate"] == "18")    
      elsif (certificate == "ALL")
      @condition = ( (!movies.include?("certificate")) or movies["certificate"] == "U" or movies["certificate"] == "PG" or movies["certificate"] == "12" or movies["certificate"] == "12A" or condition = movies["certificate"] == "U" or movies["certificate"] == "PG" or movies["certificate"] == "12" or movies["certificate"] == "12A" or movies["certificate"] == "15" or movies["certificate"] == "18" or  movies["certificate"] == "TBC")
   # puts "Pls send the correct certificate name " + certificate
      end
      
      if(@condition)
        @arr_certSearch.push movies["title"]   
      end  
   # end 
    
  }
  
  puts "*********Category name is ==>" +  category_name  + "  ******certificate type is ===> " + certificate.to_str()
    puts @arr_certSearch.flatten().compact.uniq()  
    puts "***total number of movies is *** #{@arr_certSearch.length} " + "\n"  
end
  
#cert_name ="PG"   

#@arr_catnames.each{ |name|
 # puts "categort name " + name
  #searchBy_certificate(cert_name,name) 
#}



#print movies with certificate object

@arr_noCertificate = Array.new
    categories_json.each{ |categories|  
  categroy = categories["movies"] 
  categroy.each{ |movies|
    if (!movies.include?("certificate"))
      @arr_noCertificate.push movies["title"]
         end
       }     
  }   
arr_noCert = @arr_noCertificate.flatten()
puts "****************printing movies with certifiate***********"
puts arr_noCert.sort.compact.uniq

#Search by Certificate and genre

def isGenrePresent(genres,type)
 result = genres.detect{ |genre|
    genre == type
  }
  if (result == type)
    return true
  else
    return false
  end
end



def searchBy_certificateWithGenre(certificate,category_name,genre)
  @arr_certGenreSearch = Array.new
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
        if (isGenrePresent(movies["genres"],genre))
          if (certificate == "U")
             condition = (movies["certificate"] == "U")
          elsif (certificate == "PG")
             condition = (movies["certificate"] == "PG")
          elsif (certificate == "12")
             condition =  ((movies["certificate"] == "12") or (movies["certificate"] == "12A"))
          elsif (certificate == "15")
              condition =  (movies["certificate"] == "15")
          elsif (certificate == "18")
              condition =  (movies["certificate"] == "18")    
          elsif (certificate == "ALL")
                condition = ((isGenrePresent(movies["genres"],genre)) and  ((!movies.include?("certificate")) or movies["certificate"] == "U" or movies["certificate"] == "PG" or movies["certificate"] == "12" or movies["certificate"] == "12A" or condition = movies["certificate"] == "U" or movies["certificate"] == "PG" or movies["certificate"] == "12" or movies["certificate"] == "12A" or movies["certificate"] == "15" or movies["certificate"] == "18" or  movies["certificate"] == "TBC"))
    #puts "Pls send the correct certificate name " + certificate
         end
        end    
     end  
     
    if(condition)
        @arr_certGenreSearch.push movies["title"]  
    end  
       
      
   # end 
    
  }
  
 puts "*********Category name is ==>" +  category_name  + "  ******certificate type is ===> " + certificate.to_str() + "  ******Genre type is ===> " + genre
  puts @arr_certGenreSearch.flatten().compact.uniq()  
    puts "***total number of movies is *** #{@arr_certGenreSearch.length} " + "\n"  
end


#Set the inputs for the tests
cert_name ="12"  
genre ="Family" 

@arr_catnames.each{ |name|
  puts "categort name " + name
    #searchBy_certificateWithGenre(cert_name,name,genre) 
     searchBy_certificate(cert_name,name)
}






