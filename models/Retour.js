const mongoose = require('mongoose');

const retourSchema = new mongoose.Schema({
  utilisateurId: { type: String, required: true },
  contenu: { type: String, required: true },
  date: { type: Date, default: Date.now },
  votes: { type: Number, default: 0 }
});

module.exports = mongoose.model('Retour', retourSchema);