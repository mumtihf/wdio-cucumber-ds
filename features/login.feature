@login 
Feature: Login

  Background: 
    Given user is on Login page

  @positive @test-case-1
  Scenario Outline: Success Login
    And user input "<username>" as username
    And user input "<password>" as password 
    When user click login button
    Then user should be redirect to homepage

    Examples:
    | username      | password        |
    | standard_user | secret_sauce    |
    | visual_user   | secret_sauce    |
  
  @negative @test-case-2
  Scenario: Failed Login with wrong password
    And user input "<username>" as username
    And user input "<password>" as password 
    When user click login button
    Then user should see error message

    Examples:
    | username      | password        |
    | standard_user | secret_sauce1   |