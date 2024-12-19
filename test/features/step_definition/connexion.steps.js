import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
 
let page = { message: '', user: '', password: '' };
 
Given('que je suis sur la page de connexion', () => {
  console.log('🔹 Étape : Accès à la page de connexion');
  page = { message: '', user: '', password: '' };
});
 
When('je saisis le nom d\'utilisateur {string}', (username) => {
  console.log(`📝 Étape : Saisie du nom d'utilisateur "${username}"`);
  page.user = username;
});
 
When('je saisis le mot de passe {string}', (password) => {
  console.log(`📝 Étape : Saisie du mot de passe "${password}"`);
  page.password = password;
});
 
When('je clique sur {string}', (button) => {
  console.log(`🔘 Étape : Clic sur le bouton "${button}"`);
  if (button === 'Connexion') {
    if (page.user === 'user123' && page.password === 'password123') {
      page.message = `Bienvenue, ${page.user}`;
      console.log('✅ Connexion réussie');
    } else {
      page.message = 'Mot de passe incorrect';
      console.log('❌ Connexion échouée : Mot de passe incorrect');
    }
  }
});
 
Then('je devrais voir {string}', (expectedMessage) => {
  console.log(`🔍 Vérification : Le message attendu est "${expectedMessage}"`);
  assert.strictEqual(page.message, expectedMessage);
  console.log('✔️ Vérification réussie');
});