const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs'); 
app.use(express.static('public'));


// Middleware pour parser les données du corps de la requête
app.use(express.json())

app.post('/uuidEtu', (req, res) => {

    // Récupérer les données du formulaire
    const { prof, cours, classe } = req.body;

    //uuid (ROOMID)
    let uuid = "AUCUN";
    
    //recuperer uuid qui correspond au prof au cours et classe dans le fichier js
    //recuperer le json
    const jsonFilePath = path.join(__dirname, 'public/files/data.json');

    //ouvrir le json dans une var (data)
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {

      if (err) {
        console.error('Erreur lors de la lecture du fichier JSON :', err);
        return res.status(500).send('Erreur lors de la lecture du fichier JSON');
      }
  
      try {
        // Convertir les données JSON en objet JavaScript
        const jsonData = JSON.parse(data);
		
		//filtre pour trouver l'uuid
		// Rechercher l'UUID correspondant aux critères
		jsonData.data.map((data) => {
            const currentDate = new Date();

            // Recuperation et formatage de la date
            const dateActuel = currentDate.toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }).replace(/\//g, '-');

            if(data.date == dateActuel){ 
                data.cours.map((Allcours) =>{
                  
                    //filter avec les termes en miniscule (pour eviter les erreurs de case)
                    if(
                        Allcours.prof.toLowerCase() === prof.toLowerCase() &&
                        Allcours.cours.toLowerCase() === cours.toLowerCase() &&
                        Allcours.classe.toLowerCase() === classe.toLowerCase() 
                    ){
                        //modifier uuid
                        uuid = Allcours.uuid ;
                    }
                })
                
            }   
            
            
        }) 

        //retourner uuid
        res.send(`${uuid}`);

      } catch (parseError) {
        console.error("Erreur lors de la convertion");
      }

    });


    // Renvoyer une réponse
    
});

app.post('/uuidProf', (req, res) => {

    // Récupérer les données du formulaire
    const { prof, cours, classe } = req.body;

    //uuid (ROOMID)
    let uuid = "AUCUN";

    // Recuperation et formatage de la date
    const currentDate = new Date();

    const dateActuel = currentDate.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '-');
    
    
    //recuperer le json
    const jsonFilePath = path.join(__dirname, 'public/files/data.json');

    //ouvrir le json dans une var (data)
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {

      if (err) {
        console.error('Erreur lors de la lecture du fichier JSON :', err);
        return res.status(500).send('Erreur lors de la lecture du fichier JSON');
      }
  
      try {
        // Convertir les données JSON en objet JavaScript
        const jsonData = JSON.parse(data);
		
		//filtre pour trouver l'uuid
		// Rechercher l'UUID correspondant aux critères
		jsonData.data.map((data) => {
            
            if(data.date == dateActuel){ 
                data.cours.map((Allcours) =>{
                  
                    
                    if( //dans le cas ou le cours existe déjà
                        Allcours.prof.toLowerCase() === prof.toLowerCase() &&
                        Allcours.cours.toLowerCase() === cours.toLowerCase() &&
                        Allcours.classe.toLowerCase() === classe.toLowerCase() 
                    ){ 
                        //modifier uuid 
                        // uuid = "ENCOURS" ;
                        uuid = Allcours.uuid //pour moi
                    }
                    else{
                        uuid = "FINI"
                    }
                })
                
            }   
            else{
                uuid = "SANSDATE";
            }
            
            
        }) 

        if(uuid == "FINI"){

            const id = uuidV4();
            const dateIndex = jsonData.data.findIndex((item) => item.date === dateActuel);
            console.log(dateIndex);
            jsonData.data[dateIndex].cours.push({
                prof: prof,
                cours: cours,
                classe: classe,
                uuid: id
            });

            fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Erreur lors de l\'écriture du fichier JSON :', writeErr);
                    return;
                }
                console.log('Fichier JSON mis à jour avec succès.');
            });

            uuid = id ;
            
        }

        if(uuid == "SANSDATE"){
            console.log("SANSDATE")
            const id = uuidV4();
          
            jsonData.data.push({
                date: dateActuel,
                cours: [
                    {
                    prof: prof,
                    cours: cours,
                    classe: classe,
                    uuid: id
                    }
                ]
            });

            fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), (writeErr) => {
                if (writeErr) {
                    console.error('Erreur lors de l\'écriture du fichier JSON :', writeErr);
                    return;
                }
                console.log('Fichier JSON mis à jour avec succès.');
            });

            uuid = id ;
        }

        //retourner uuid
        res.send(`${uuid}`);

      } catch (parseError) {
        console.error("Erreur lors de la convertion",parseError);
      }

    });


    // Renvoyer une réponse
    
});


io.on('connection', (socket) => {
  socket.on('join-room', (roomId, userId) => {

    //creaction d'un espace donc l'acces n'est possible qu'avec l'id  roomId 
    socket.join(roomId);

    //envoi de la fonction user-connected ainsi que son userId (peerId) a tout ceux connectés au roomId
    socket.to(roomId).emit('user-connected', userId);
    // socket.to(roomId).broadcast.emit('user-connected', userId);

    socket.on('disconnect', ()=>{
      socket.to(roomId).emit('user-disconnected', userId) ;
    })
    
  });
});

server.listen(3031);