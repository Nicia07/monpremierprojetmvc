// importer le framework Express.js
// import express from "express";
const express = require("express");

const myConnection = require("express-myconnection");
const mysql2 = require("mysql2");

const url = require('url');

const fs = require('fs'); // le module fs permet de manipuler des fichiers
const connection = require("express-myconnection");

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

app.get("/", (req, res) => { // ("/") veut dire que la route est par défaut
    res.writeHead(200, {
        'Content-type' : 'text/html;charset=UTF-8'
    });
    res.write("<b>Hello</b> Bienvenu dans nos chaine TV ");
    res.end();
});

    
  
// Route pour récupérer les plats depuis la base de données et les afficher
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


// Route pour récupérer les plats depuis la base de données et les afficher
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



app.get("/formulaireProgrammeTv", (req, res) => {
    formulaire={
       type_programme:["mbiwi","dance traditionnel","chants"],
    }
    res.render("formulaireProgrammeTv",formulaire);
    

});

module.exports = app;