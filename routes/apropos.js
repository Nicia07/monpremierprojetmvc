/*Dans ce fichier, nous créons des routes da la page apropos */

const express = require('express');// recupere la ligne expresse et stock dans express

const aproposControllers = require('../controllers/apropos');

const router = express.Router();//créer une variable Router qui vas permettre de stocker toute les routes('/').

// Route pour récupérer l'equipe  depuis la base de données et les afficher
// app.get("/apropos", (req, res) => {


// });  Remplace la syntaxe d'habitude 


router.get('/apropos', aproposControllers.aproposViews);//exécute la fonction aproposView du contrôleur aproposControllers pour gérer la requête et la réponse.


module.exports = router;