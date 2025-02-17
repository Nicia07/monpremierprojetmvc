module.exports = { // la module.export qui vas renvoyer des requette dans  
   
   /* loginViews: (req, res) => {//vu qui prend 2 paramettre 
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
    
    }*/


           loginView : (req, res) => {
            res.render('login');
        },

    loginVerification : (req, res) => {
        
        const  email = req.body.email; 
        const  mot_de_passe = req.body.password;

        // Connexion à la base de données via req.getConnection
        req.getConnection((err, connection) => {
            if (err) {
               
                return res.status(500).send("Erreur de connexion à la base de données");// retourne code status 500 et renvoie le message d'erreur "..."
            }

            // Requête SQL pour vérifier si l'utilisateur existe
            const queryRequette = "SELECT * FROM utilisateur WHERE email = ?";// selection tout les enregistrement dans la table utilisateur dont la colone email vaut ?"
            connection.query(queryRequette, [email], (err, result) => { //execute la requette queryRequette et ?" est remplacer par  [email] 
                if (err) {
                   
                    return res.status(500).send("Erreur lors de la récupération des données");
                }
                if (result.length > 0) {
                    
                    // Comparer le mot de passe fourni avec le mot de passe en clair dans la base de données
                    if (mot_de_passe === result[0].mot_de_passe) {
                       
                        res.redirect("/apropos");  // Rediriger après une connexion réussie
                    } else {
                        res.render("login", { error: "Mot de passe incorrect" });
                    }} else {
                        res.render("login", { error: "Aucun utilisateur trouvé avec cet email" });
                    }
                });    

            })
        }


    }



 

 

    
    