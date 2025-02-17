// importer le framework Express.js
// import express from "express";
const express = require("express");

const aproposRoutes = require('./routes/apropos');
const formulaireProgrammeTvRoutes = require('./routes/formulaireProgrammetv');
const ProgrammeTvRoutes = require('./routes/programmeTv');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

const myConnection = require("express-myconnection");

const mysql2 = require("mysql2");

const url = require('url');

const fs = require('fs'); // le module fs permet de manipuler des fichiers

const connection = require("express-myconnection");

const { console } = require("inspector");

// const bcrypt = require('bcryptjs');


//crée l'application express.js dans la variable app
const app = express();


const optionConnection = {
    host: "localhost",
    user: "root",
    password:"Nicia@16",
    port: 3306,
    database:"chainetv"
};

// Middleware de connection a la base de donnée 
app.use(myConnection(mysql2, optionConnection, "pool"));//pool est la stratégie de connection à la base de données.

//Extraction pour 
app.use(express.urlencoded({extended: false}));
//L'endroit ou se siteunt les vues qui s'affichent sur le navigateur
app.set("views","./views");

//Préciser le moteur de lecteur de vue a savoir ejs
app.set("view engine", "ejs");

app.use(express.static("public"));//



    
  
// // Route pour récupérer l'equipe  depuis la base de données et les afficher
// app.get("/apropos", (req, res) => {
//     req.getConnection((erreur, connection) => {
//         if (erreur) {
//             console.log(erreur);
//             res.status(500).end("Erreur de connexion à la base de données");
//         } else {
//             connection.query("SELECT * FROM equipe", [], (err, resultat) => {
//                 if (err) {
//                     console.log(err);
//                     res.status(500).end("Erreur lors de la recuperation du formulaire programme");
//                 } else {
//                     console.log("resultat : ", resultat);
//                     res.render("apropos", { resultat });
//                 }
//             });
//         }
//     });
// });





// Route pour récupérer le programmeTv depuis la base de données et les afficher 
//app.get("/programmeTv", (req, res) => {
//     req.getConnection((erreur, connection) => {
//         if (erreur) {
//             console.log(erreur);
//             res.status(500).end("Erreur de connexion à la base de données");
//         } else {
//             connection.query("SELECT * FROM programmediffusion", [], (err, resultat) => {
//                 if (err) {
//                     console.log(err);
//                     res.status(500).end("Erreur lors de la recuperation du programmeTv");
//                 } else {
//                     console.log("resultat : ", resultat);
//                     res.render("programmeTv", { resultat });
//                 }
//             });
//         }
//     });
// });





// Route POST pour soumettre les données du formulaire
/*app.post('/formulaireprogrammeTV', (req, res) => {
    const { nom, type_programme, date_diffusion, canal_diffusion, lien_youtube } = req.body;

    // Connexion à la base de données via req.getConnection
    req.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Erreur de connexion à la base de données");
        }

        // Requête SQL pour insérer les données dans la table programmediffusion
        const query = "INSERT INTO programmediffusion (nom, type_programme, Date_diffusion, nom_Canal, lien_youtube) VALUES (?, ?, ?, ?, ?)";
        const values = [nom, type_programme, date_diffusion, canal_diffusion, lien_youtube];

        connection.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Erreur lors de l'insertion des données");
            }

            console.log('Données insérées avec succès');
            
            // Rediriger vers la page des programmes TV pour afficher les résultats
            res.redirect("/ProgrammeTV");
        });
    });
});*/

//  app.get("/formulaireProgrammeTv", (req, res) => {
//      res.render("formulaireProgrammetv");
// });




 app.get("/login", (req,res) => {
    res.render("login")
 });

// app.post('/login', (req, res) => {
//     const { email, mot_de_passe } = req.body;

//     // Connexion à la base de données via req.getConnection
//     req.getConnection((err, connection) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Erreur de connexion à la base de données");
//         }

//         // Requête SQL pour vérifier si l'utilisateur existe
//         const query = "SELECT * FROM utilisateur WHERE email = ?";
//         connection.query(query, [email], (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send("Erreur lors de la récupération des données");
//             }

//             if (result.length > 0) {
//                 // Comparer le mot de passe fourni avec le mot de passe haché dans la base de données
//                 bcrypt.compare(mot_de_passe, result[0].mot_de_passe, (err, isMatch) => {
//                     if (err) {
//                         console.log(err);
//                         return res.status(500).send("Erreur lors de la comparaison du mot de passe");
//                     }

//                     if (isMatch) {
//                         console.log('Connexion réussie');
//                         res.redirect("/apropos");  // Rediriger après une connexion réussie
//                     } else {
//                         res.render("login", { error: "Mot de passe incorrect" });
//                     }
//                 });
//             } else {
//                 res.render("login", { error: "Aucun utilisateur trouvé avec cet email" });
//             }
//         });
//     });
// });




// app.get("/signup", (req,res) => {
//     res.render("signup")
//  });


//  app.post('/signup', (req, res) => {
//     const { nom, prenom, email, date_naissance, password } = req.body;

//     // Vérifier si tous les champs sont remplis
//     if (!nom || !prenom || !email || !date_naissance || !password) {
//         return res.status(400).send("Tous les champs sont requis.");
//     }

//     req.getConnection((err, connection) => {
//         if (err) {
//             console.error("Erreur de connexion à la base de données :", err);
//             return res.status(500).send("Erreur serveur");
//         }

//         // Vérifier si l'email existe déjà
//         connection.query("SELECT * FROM utilisateur WHERE email = ?", [email], (err, results) => {
//             if (err) {
//                 console.error("Erreur lors de la vérification de l'email :", err);
//                 return res.status(500).send("Erreur serveur");
//             }

//             if (results.length > 0) {
//                 return res.status(400).send("Cet email est déjà utilisé.");
//             }

//             // Hasher le mot de passe avant de l'enregistrer
//             bcrypt.hash(password, 10, (err, hashedPassword) => {
//                 if (err) {
//                     console.error("Erreur lors du hashage du mot de passe :", err);
//                     return res.status(500).send("Erreur serveur");
//                 }

//                 // Insérer le nouvel utilisateur dans la base de données
//                 const sql = "INSERT INTO utilisateur (nom, prenom, email, date_naissance, hashed_password) VALUES (?, ?, ?, ?, ?)";
//                 connection.query(sql, [nom, prenom, email, date_naissance, hashedPassword], (err, result) => {
//                     if (err) {
//                         console.error("Erreur lors de l'inscription :", err);
//                         return res.status(500).send("Erreur serveur");
//                     }

//                     console.log("Utilisateur inscrit avec succès :", result);
//                     res.redirect('/login'); // Rediriger vers la page de connexion après inscription
//                 });
//             });
//         });
//     });
// });



/*app.post('/login', (req, res) => {
    

    // Connexion à la base de données via req.getConnection
    req.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Erreur de connexion à la base de données");
        }

        // Requête SQL pour vérifier si l'utilisateur existe
        const query = "SELECT * FROM utilisateur WHERE email = ?";
        connection.query(query, [email], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Erreur lors de la récupération des données");
            }

            if (result.length > 0) {
                // Comparer le mot de passe fourni avec le mot de passe en clair dans la base de données
                if (mot_de_passe === result[0].mot_de_passe) {
                    console.log('Connexion réussie');
                    res.redirect("/apropos");  // Rediriger après une connexion réussie
                } else {
                    res.render("login", { error: "Mot de passe incorrect" });
                }
            } else {
                res.render("login", { error: "Aucun utilisateur trouvé avec cet email" });
            }
        });
    });
});*/












//Mise a jours apre la declaration des routers
 app.use('/', aproposRoutes);

 app.use('/', ProgrammeTvRoutes);

 app.use('/', formulaireProgrammeTvRoutes);

 app.use('/', loginRoutes);

 app.use('/', signupRoutes);

module.exports = app;