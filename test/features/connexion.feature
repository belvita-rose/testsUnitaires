Feature: Connexion à l’application
 
  Scenario: Connexion réussie
    Given que je suis sur la page de connexion
    When je saisis le nom d'utilisateur "user123"
    And je saisis le mot de passe "password123"
    And je clique sur "Connexion"
    Then je devrais voir "Bienvenue, user123"

Dispose d’un menu contextuel


Dispose d’un menu contextuel