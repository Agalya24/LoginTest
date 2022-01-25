Feature: Customer accessing the application

 Customer should be able to access the application with successful login

 Scenario Outline: I should be able to access the application with successful login
   Given I want to access the test application
   When I logged into the application with my username "<UserName>" and "<Password>"
   Then I should be able to access the application

   Example:
     |UserName|Password|
     |||