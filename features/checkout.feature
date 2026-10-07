Feature: Checkout

  Scenario: Submit customer details
    Given I am on the shop page
    When I proceed to checkout and submit the form
    Then I should receive an order confirmation
