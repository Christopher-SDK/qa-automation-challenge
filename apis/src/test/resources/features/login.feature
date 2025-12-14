Feature: Demoblaze API - Login

Background:
  * url baseUrl

Scenario: Login con usuario y password correctos
  Given path 'login'
  And request { username: '#(username)', password: '#(password)' }
  When method post
  Then status 200
  And print response

Scenario: Login con usuario o password incorrectos
  Given path 'login'
  And request { username: '#(username)', password: 'WrongPass' }
  When method post
  Then status 200
  And match response.errorMessage == 'Wrong password.'
  And print response
