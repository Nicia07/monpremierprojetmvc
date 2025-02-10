// importer le framework Express.js
// import express from "express";
const express = require("express");

const aproposRoutes = require('./routes/apropos');

const myConnection = require("express-myconnection");
const mysql2 = require("mysql2");

const url = require('url');

const fs = require('fs'); // le module fs permet de manipuler des fichiers
const connection = require("express-myconnection");
const { console } = require("inspector");
const apropos = require("./controllers/apropos");

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



    
  
// Route pour récupérer l'equipe  depuis la base de données et les afficher
app.get("/apropos", (req, res) => {
    req.getConnection((erreur, connection) => {
        if (erreur) {
            console.log(erreur);
            res.status(500).end("Erreur de connexion à la base de données");
        } else {
            connection.query("SELECT * FROM equipe", [], (err, resultat) => {
                if (err) {
                    console.log(err);
                    res.status(500).end("Erreur lors de la recuperation du formulaire programme");
                } else {
                    console.log("resultat : ", resultat);
                    res.render("apropos", { resultat });
                }
            });
        }
    });
});


// Route pour récupérer le programmeTv depuis la base de données et les afficher 
app.get("/programmeTv", (req, res) => {
    req.getConnection((erreur, connection) => {
        if (erreur) {
            console.log(erreur);
            res.status(500).end("Erreur de connexion à la base de données");
        } else {
            connection.query("SELECT * FROM programmediffusion", [], (err, resultat) => {
                if (err) {
                    console.log(err);
                    res.status(500).end("Erreur lors de la recuperation du programmeTv");
                } else {
                    console.log("resultat : ", resultat);
                    res.render("programmeTv", { resultat });
                }
            });
        }
    });
});


// Route POST pour soumettre les données du formulaire
app.post('/formulaireprogrammeTV', (req, res) => {
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
});


app.get("/formulaireProgrammeTv", (req, res) => {
    res.render("formulaireProgrammetv");
});

app.get("/login", (req,res) => {
    res.render("login")
});

app.get("/signup", (req,res) => {
    res.render("signup")
});


// Route POST pour soumettre les données du formulaire
app.post('/login', (req, res) => {
    const { nom, prenom, email, mot_de_passe, date_naissance } = req.body;

    // Connexion à la base de données via req.getConnection
    req.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Erreur de connexion à la base de données");
        }

        // Requête SQL pour insérer les données dans la table programmediffusion
        const query = "INSERT INTO utilisateur(nom, prenom, email, mot_de_passe, date_naissance) VALUES (?, ?, ?, ?, ?)";
        const values = [nom, prenom, email, mot_de_passe, date_naissance];

        connection.query(query, values, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Erreur lors de l'insertion des données");
            }

            console.log('Données insérées avec succès');
            
            // Rediriger vers la page de signup pour afficher les résultats
            res.redirect("/signup");
        });
    });
});



//Mise a jours apre la declaration des routers
 app.use('/', aproposRoutes);

module.exports = app;