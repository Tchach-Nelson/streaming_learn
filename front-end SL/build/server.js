const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3035;

// Middleware pour servir les fichiers statiques du dossier 'build'
app.use(express.static(path.join(__dirname, 'build')));

// Route pour servir l'application React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
