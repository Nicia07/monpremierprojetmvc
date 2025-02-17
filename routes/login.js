/*Dans ce fichier, nous créons des routes da la page login */

const express = require('express');

const loginControllers = require('../controllers/login');

const router = express.Router();//créer une variable Router qui vas permettre de stocker toute les routes('/').

// Route POST pour soumettre les données du formulaire
/*app.post('/login', (req, res) => {
    const { nom, prenom, email, mot_de_passe, date_naissance } = req.body;
});*/


router.get('/login', loginControllers.loginView);//exécute la fonction aproposView du contrôleur aproposControllers pour gérer la requête et la réponse.

router.post('/login', loginControllers.loginVerification );

module.exports = router;