Feature: Suggested Movies
  As an app
  I want to retrieve a list of movies grouped into categories

  Background:
    Given I send and accept JSON

  Scenario: app requesting suggested movies
    When I send a GET request for "v3/category/index"
    Then the response should be successful
    And the response should be JSON
    And the body should be a list
   And each element of the list should be a index objects
   And each category index object should contain a list of "Movie"

Scenario: app requesting movies airings
 When I send a GET request for "v3/airings"
  Then the response should be successful
   And the response should be JSON
   And the body should be a list
   And each item in the list should contains airing information

Scenario: app requesting movies index for update
 When I send a GET request for "v3/category/index"
 Then the response should be successful
 And the response should be JSON
 And the body should be a list
 And each item in the list should contains movieId and checksum

Scenario: app requesting movies list of category and title
 When I send a GET request for "v3/category/list"
  Then the response should be successful
   And the response should be JSON
   And the body should be a list
   And each item in the list should contains category and title

Scenario: app requesting articles
 When I send a GET request for "v3/category/index"
  Then the response should be successful
   And the response should be JSON
    And the body should be a list
   #And each element of the list should be a categories object
   And each category index object should contain a list of "Article"

Scenario: app requesting galleries
 When I send a GET request for "v3/category/index"
  Then the response should be successful
   And the response should be JSON
   And the body should be a list
   #And each element of the list should be a categories object
   And each category index object should contain a list of "Gallery"

Scenario: app requesting videos
 When I send a GET request for "v3/category/index"
  Then the response should be successful
   And the response should be JSON
    And the body should be a list
    #And each element of the list should be a categories object
    And each category index object should contain a list of "Vedio"
   




