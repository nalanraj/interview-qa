Feature: Login validation

  Scenario: Reject an incorrect password
    Given I am on the login page
    When I sign in with username "alex@example.com" and password "wrong-password"
    Then I should see the message "Invalid credentials"
