const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const retours = require('./routes/retours');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/retour-utilisateur', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/retours', retours);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});