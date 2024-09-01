@add-to-cart 
Feature: Add Item to Cart

  Background: 
    Given user is on Login page

  @positive @test-case-1
  Scenario Outline: Success Login
    And user input "<username>" as username
    And user input "<password>" as password 
    And user click login button
    When user add item to cart 
    Then user should see item added to cart

    Examples:
    | username      | password        |
    | standard_user | secret_sauce    |
    # | visual_user   | secret_sauce    |