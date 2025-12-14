Feature: Demoblaze API - Signup

Background:
  * url baseUrl

Scenario: Crear un nuevo usuario
  Given path 'signup'
  And request { username: '#(username)', password: '#(password)' }
  When method post
  Then status 200
  And print response

Scenario: Intentar crear un usuario ya existente
  Given path 'signup'
  And request { username: '#(username)', password: '#(password)' }
  When method post
  Then status 200
  And match response.errorMessage == 'This user already exist.'
  And print response
