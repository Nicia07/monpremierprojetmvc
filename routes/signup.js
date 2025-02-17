/*Dans ce fichier, nous créons des routes da la page singup*/

const express = require('express');

const signupControllers = require('../controllers/signup');

const router = express.Router();//créer une variable Router qui vas permettre de stocker toute les routes('/').


// app.get("/login", (req,res) => {
//     res.render("login")
// }); syntaxe habituele


router.get('/signup', signupControllers.signupViews);//Remplace le syntaxe d'abitude 
router.post('/submit-inscription', signupControllers.validationsignup)

module.exports = router;