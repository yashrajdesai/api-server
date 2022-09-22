async function addStory(req, res) {
    try {
        story = req.body;

        // Implement logic

        result = {}
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

module.exports = {addStory}