module.exports = { // la module.export qui vas renvoyer des requette dans  
    ProgrammeTvViews: (req, res) => {//vu qui prend 2 paramettre 
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
    }
}    