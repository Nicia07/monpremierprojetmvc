/*Dans ce fichier, nous créons des routes da la page apropos */

const express = require('express');// recupere la ligne expresse et stock dans express

const formulaireProgrammeTvControllers = require('../controllers/formulaireProgrammeTV');

const router = express.Router();//créer une variable Router qui vas permettre de stocker toute les routes('/').

// Route pour récupérer l'equipe  depuis la base de données et les afficher
// app.get("/apropos", (req, res) => {


// });  Remplace la syntaxe d'habitude 


router.get('/formulaireProgrammeTV', formulaireProgrammeTvControllers.formulaireProgrammeTvViews);//exécute la fonction aproposView du contrôleur aproposControllers pour gérer la requête et la réponse.

router.post('/submit-programme', formulaireProgrammeTvControllers.formulairetvVerification);

module.exports = router;