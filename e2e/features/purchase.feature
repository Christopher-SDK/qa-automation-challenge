Feature: Purchase flow in SauceDemo

  Scenario: Successful purchase of two products
    Given the user is logged in with valid credentials
    When the user adds two products to the cart
    And the user views the cart
    And completes the checkout form
    Then the purchase is completed successfully
