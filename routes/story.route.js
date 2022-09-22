const { addStory } = require('../controllers/story.controller');

const router = require('express').Router();

router.post('/', addStory);

module.exports = router;