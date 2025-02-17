module.exports = { // la module.export qui vas renvoyer des requette dans  
    signupViews: (req, res) => {//vu qui prend 2 paramettre 
        res.redirect("/signup");  // Utilise res.redirect() pour rediriger l'utilisateur vers la page de signup.
        
    },


    validationsignup : async (req, res) => {
        console.log("Valider");
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.email;
        const date_de_naissance = req.body.date_naissance;
        const mot_de_passe = req.body.mot_de_passe;
 
        
        console.log("nom:", nom);
        console.log("prenom:", prenom);
        console.log("email:", email);
        console.log("date_naissance:", date_de_naissance);
        console.log("mot_de_passe:", mot_de_passe);
 
         if(!nom || !prenom || !email || !date_de_naissance || !mot_de_passe){
             return res.render('register', {error: "Veuiller compléter tous les champs."});
         }
 
         let requeteSql = "INSERT INTO utilisateur(id, nom, prenom, email, mot_de_passe, date_de_naissance) VALUES (?, ?, ?, ?, ?, ?)";
         let ordreDonnes = [null, nom, prenom, email, date_de_naissance, mot_de_passe];
 
         req.getConnection((erreur, connection) => {
         if(erreur){
             console.log(erreur);
         } else {
             connection.query(requeteSql, ordreDonnes,(err, nouvelUtilisateur) => {
                 if(err) {
                     console.log(err);
                 } else {
                     console.log("Création réussie ==")
                     res.render('/signup')
                 }
             });
         }
 
      });
 
 
     }
 


    }