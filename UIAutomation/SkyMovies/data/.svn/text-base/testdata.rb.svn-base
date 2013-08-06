require 'json'
require 'faraday'
require 'open-uri'


class Publisher
  
  def initialize(url)
    @url = url
    @conn = Faraday::Connection.new @url
    @res = nil 
  end
  
  def getResponseInJSON()
    @categories_json =nil
    @conn.headers[:content_type] ="application/json"
    @conn.headers[:accept] = "application/json"  
    @res = @conn.get 'movies/categories'    
    if (@res.status == 200)
      @categories_json = JSON.parse @res.body
    end
    @categories_json
  end
  
  def getJSON
    @categories_json
  end  
  
  def dailyPicks
    @dailyPicks = @categories_json[0]["movies"] 
     @dailyPicks 
  end
  
  def onSkyMovies  
    @onSky_movies = @categories_json[1]["movies"]  
    @onSky_movies  
end  

def onBoxOffice
  @onBox_movies = @categories_json[2]["movies"]  
  @onBox_movies   
end 

def commingSoon
  @cSoon_movies = @categories_json[3]["movies"] 
  @cSoon_movies  
end   

def inCinemas
@iCinemas_movies = @categories_json[4]["movies"] 
  @iCinemas_movies
end 

def getTitles(categoryName)
  @getTitles = Array.new
  categoryName.each{ |movies|
   title = movies["title"].to_s
  @getTitles.push title } 
  @getTitles.flatten().compact;
end

def getActors()
  @arr_actors =Array.new()
response = self.getJSON()
response.each {|categories|
  category = categories["movies"]
  category.each{ |movies| 
  if movies.include?("cast")
    movies["cast"].each {|cast|
      @arr_actors.push cast["name"].to_s
    }
  end  } }
 @arr_actors.flatten.compact.uniq.sort.slice!(0,10)
end   


def getDirectors()
  @arr_directors =Array.new()
  response = self.getJSON()
  response.each {|categories|
    category = categories["movies"]
    category.each{ |movies| 
    if movies.include?("directors")
      movies["directors"].each {|director|
        @arr_directors.push director["name"].to_s
      }
    end  } }
    @arr_directors.flatten.compact.uniq.sort.slice!( 0, 10 )  
end

def getGenreList()
  @arr_genre = Array.new
  @arr_newGenre =Array.new
  response = self.getJSON()
  response.each{ |categories|  
    categroy = categories["movies"] 
    categroy.each{ |movies|
      @arr_genre.push  movies["genres"]} }      
  @arr_genre.flatten.compact.uniq.sort.each { |genre|
        @arr_newGenre.push genre.to_s
      }
     @arr_newGenre
end

def getMultipleTrailers(category)
  @arr_multiTrailers = Array.new()
  @counter = 0
  category.each{ |movies|
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
              @arr_multiTrailers.push  movies["title"].to_s.upcase
            end
        end
        end
      }
  @arr_multiTrailers.flatten().compact.uniq()
end 
 
  
end

class WriteToFile

  def initialize(filepath)
    @fio = File.new(filepath, 'w')
  end
  
  def write(content)
    @fio.write(content)
  end

  def blankLine(times=1)
    1.upto(times) { @fio.write("\n") }
  end
  
  def close
    @fio.close
  end
end

publisher = Publisher.new('http://skymovies.sky.com/api/')
data = publisher.getResponseInJSON()

filename = '../utils/test_data.js';
puts Dir.pwd
if data != nil
file = WriteToFile.new(filename) ;
file.write("var count = {" ) #+ "#{categories_json}")
file.blankLine(2);
file.write("dailyPicks : #{publisher.dailyPicks.length},");
file.blankLine();
file.write("onSkyMovies : #{publisher.onSkyMovies.length},");
file.blankLine();
file.write("onBoxofice : #{publisher.onBoxOffice.length},");
file.blankLine();
file.write("comingSoon : #{publisher.commingSoon.length},");
file.blankLine();
file.write("inCinemas : #{publisher.inCinemas.length}");
file.write("  } ;");
file.blankLine(2);
file.write("var titles_dailyPicks = #{publisher.getTitles(publisher.dailyPicks)}");   
file.blankLine(2);
file.write("var titles_onSkyMovies =  #{publisher.getTitles(publisher.onSkyMovies)};");  
file.blankLine(2);
file.write("var titles_onBoxOffice = #{publisher.getTitles(publisher.onBoxOffice)};");   
file.blankLine(2);
file.write("var titles_onCommingSoon = #{publisher.getTitles(publisher.commingSoon)};");   
file.blankLine(2);
file.write("var titles_intheCinemas = #{publisher.getTitles(publisher.inCinemas)};");   
file.blankLine(3);
file.write("var genre_list = #{publisher.getGenreList()};");   
file.blankLine(2);
file.write("var trailers_DailyPicks = #{publisher.getMultipleTrailers(publisher.dailyPicks)};");
file.blankLine(2);
file.write("var actors =#{publisher.getActors()};")
file.blankLine(2);
file.write("var directors =#{publisher.getDirectors()};")
file.blankLine(2);
    #file.write("} ;");
    #file.blankLine(2);
file.write("var movies_dailPicks =#{JSON.pretty_generate((publisher.dailyPicks)[0])}");
file.blankLine(2);
file.write("var movies_onSkyMovies =#{JSON.pretty_generate((publisher.onSkyMovies)[0])} ");
file.blankLine(2);
file.write("var movies_onBoxOffice =#{JSON.pretty_generate((publisher.onBoxOffice[0]))} ");
file.blankLine(2);
file.write("var movies_commingSoon=#{JSON.pretty_generate((publisher.commingSoon)[0])}");
file.blankLine(2);
file.write("var movies_inCinemas =#{JSON.pretty_generate((publisher.inCinemas())[0])}");
file.blankLine(2);
file.close
end






  