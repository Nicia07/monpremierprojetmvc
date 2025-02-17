module.exports = {

    formulaireProgrammeTvViews : (req,res) => {
        res.render ('formulaireProgrammeTV');
    },

    // Connexion à la base de données via req.getConnection
    formulairetvVerification:(req,res) => {
        const nom = req.body.nom;
        const type_programme = req.body.type_programme;
        const date_diffusion = req.body.date_diffusion;
        const canal_diffusion = req.body.canal_diffusion;
        const lien_youtube = req.body.lien_youtube;

        req.getConnection((err, connection) => {
            if (err) {
                return res.status(500).send("Erreur de connexion à la base de données");
            }

            // Requête SQL pour insérer les données dans la table programmediffusion
            const query = "INSERT INTO programmediffusion (nom, type_programme, Date_diffusion, nom_Canal, lien_youtube) VALUES (?, ?, ?, ?, ?)";
            const values = [nom, type_programme, date_diffusion, canal_diffusion, lien_youtube];

            // Exécution de la requête SQL
            connection.query(query, values, (err, result) => {
                if (err) {
                    return res.status(500).send("Erreur lors de l'insertion des données");
                }
                
                // Rediriger vers la page des programmes TV pour afficher les résultats
                 res.redirect("/ProgrammeTV");
            });
            
            
        });
    
        
    }
};
