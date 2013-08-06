Feature: Suggested Movies
  As an app
  I want to retrieve a list of movies grouped into categories

  Background:
    Given I send and accept JSON

  Scenario: app requesting suggested movies
    When I send a GET request for "v2/category/all"
    Then the response should be successful
    And the response should be JSON
    And the body should be a list
    And each element of the list should be a categories object
    And each category object should contain a list of movie objects

Scenario: app requesting movies airings
    When I send a GET request for "v2/airings"
    Then the response should be successful
    And the response should be JSON
    And the body should be a list
    And each item in the list should contains airing information

Scenario: app requesting movies index for update
    When I send a GET request for "v2/category/index"
    Then the response should be successful
    And the response should be JSON
    And the body should be a list
    And each item in the list should contains movieId and checksum
   




