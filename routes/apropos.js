/*Dans ce fichier, nous créons des routes da la page apropos */

const express = require('express');

const aproposControllers = require('../controllers/apropos');

const router = express.Router();//créer une variable Router qui vas permettre de stocker toute les routes('/').

router.get('/', aproposControllers.aproposView);//exécute la fonction aproposView du contrôleur aproposControllers pour gérer la requête et la réponse.






module.exports = router;