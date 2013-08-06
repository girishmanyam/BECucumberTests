require 'faraday'
require 'json'

url ='http://goingoutapi.press.net/SKY'
@skyGPSloc = '51.484876,-0.321953'
#@skyGPSloc = 'TWD9DE'
title = 'take shelter'
@movietitle = title.gsub(" ", "%20")
@conn = Faraday::Connection.new url
@res = nil 
@conn.headers[:content_type] ="application/json" 
  
  
def format_title(title)
  title = title.gsub(" ", "%20")
end  



def format_cinemalistings_url()
  url = "search/format=json&days=7&titleName=#{@movietitle}&location=#{@skyGPSloc}&distance=100&groupName=Cinema&occurrences=true&images=true"
end    

def format_cinemaMoreInfo(venueid)
cine_url= "http://goingoutapi.press.net/SKY/search/format=json&days=7&venueId=#{venueid}&location=#{@skyGPSloc}&distance=100&occurrences=true&images=true"
end


def getConnection(url)
  @res = @conn.get url
end
#puts url+ "/" + format_cinemalistings_url
if (getConnection(format_cinemalistings_url).status == 200)
  #print the list of cinema listings
  cinema_listings = JSON.parse @res.body
puts "No cinema listings for #{title} is   #{cinema_listings["results"]["events"].length}" 
  @arr_venueids = Array.new
  events = cinema_listings["results"]["events"]
  events.each{ |event|
    @arr_venueids.push event["venue"]["id"] 
      venue_details = event["venue"]
    puts "CINEMAS: #{venue_details["name"].upcase()}"    
    if(venue_details.include?("url"))    
      venueurl = venue_details["url"]+"&format=json" 
      #puts venueurl       
                     if (getConnection(venueurl).status ==200)
                         @venueres = getConnection(venueurl)
                         venue_details = JSON.parse @venueres.body
                         venue_details["venues"].each{|details|
                         puts "ADDRESS : #{details["number"]}" + "\n " +  "#{details["street"]}" +  "\n " + "#{details["district"]}" + "\n "  + "#{details["town"]}" + " \n"  + "#{details["postcode"]}" + "\n" 
                         }      
                     end 
    end                 
                 all_airings = event["occurrence"]
                all_airings.each{ |airings|
                puts "AIRINGS :" + " " + " #{airings["occurrence"]} "  + " " + "#{airings["day"]}" + " #{airings["time"]} "
                } 
                
                ids = event["venue"]["id"]
                     if (getConnection(format_cinemaMoreInfo(ids)).status ==200) 
                       @findingsres = getConnection(format_cinemaMoreInfo(ids))
                        cinema_findings = JSON.parse @findingsres.body 
                        all_events = cinema_findings["results"]["events"]
                        puts "***********Comprehensive listing for a #{cinema_findings["results"]["events"][0]["venue"]["name"].upcase()} cinema **********" 
                        puts "\n"
                       all_events.each{ |evnt|
                         
                           puts   "TITLE : #{evnt["title"]["name"]}" + "\n" + "CERTIFICATE : #{evnt["title"]["certificate"]} "
                           evnt["occurrence"].each{ |occurrence| 
                           puts "\t" + "AIRINGS INFO =====>     "  
                           puts " \t" + " #{occurrence["occurrence"]} "  + " " + "#{occurrence["day"]}" + " #{occurrence["time"]} " + "\n" }

                         }
                        
                     end
                  
    puts "====================**********======================"
  }
 
else 
 
puts "****** The service is down ${url}"   

end
    

  