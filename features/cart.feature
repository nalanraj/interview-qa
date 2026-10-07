Feature: Shopping cart

  Scenario: Add a prodcut to the cart
    Given I am on the shop page
    When I add the first product to the cart
    Then the cart count should be "1"
