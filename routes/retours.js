const express = require('express');
const Retour = require('../models/Retour');
const router = express.Router();

// Obtenir tous les retours
router.get('/', async (req, res) => {
  const retours = await Retour.find();
  res.json(retours);
});

// Soumettre un retour
router.post('/', async (req, res) => {
  const nouveauRetour = new Retour(req.body);
  await nouveauRetour.save();
  res.status(201).json(nouveauRetour);
});

module.exports = router;