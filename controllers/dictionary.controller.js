function fetchAllDictionary(req, res) {
    try {
        list = [];

        // Implement logic

        res.status(200).json({
            dictionary: list
        })
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

function addDictionaryEntry(req, res) {
    try {
        entry = req.body;

        // Implement logic

        duplicate = false;
        dictionary = []
        if (duplicate) {
            res.status(200).json({
                dictionary: dictionary,
                error: "duplicate entry"
            })
        }
        res.status(202).json("Entry accepted");
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

function deleteDictionaryEntry(req, res) {
    try {
        entry = req.body;

        found = true;
        
        // Implement logic

        dictionary = []
        if (!found) {
            res.status(404).json({
                dictionary: dictionary,
                error: "Not found"
            })
        }
        res.status(202).json("Deleted successfully");
    } catch (err) {
        res.status(400).json({
            error: err
        });
    }
}

module.exports = {fetchAllDictionary, addDictionaryEntry, deleteDictionaryEntry};