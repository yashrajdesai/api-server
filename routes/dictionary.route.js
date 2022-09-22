const { fetchAllDictionary, addDictionaryEntry, deleteDictionaryEntry } = require('../controllers/dictionary.controller');

const router = require('express').Router();

router.get('/', fetchAllDictionary);

router.post('/', addDictionaryEntry);

router.delete('/', deleteDictionaryEntry);

module.exports = router;