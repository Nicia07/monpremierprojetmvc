/*Dans ce fichier, nous créons des routes da la page programmeTV*/

const express = require('express');

const programmeTvControllers = require('../controllers/programmeTV');

const router = express.Router();//créer une variable Router qui vas permettre de stocker toute les routes('/').

// app.get("/programmeTv", (req, res) => {
   
// });

// });  Remplace la syntaxe d'habitude 


router.get('/programmeTV', programmeTvControllers.ProgrammeTvViews);//exécute la fonction aproposView du contrôleur aproposControllers pour gérer la requête et la réponse.


module.exports = router;