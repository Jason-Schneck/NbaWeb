const NbaController = require("../controllers/controller")


module.exports = app => {
    app.get('/api/nba', NbaController.readAll);
    app.get('/api/nba/:id', NbaController.readOne);
    app.post('/api/nba', NbaController.create);
    app.patch('/api/nba/:id',NbaController.update);
    app.delete('/api/nba/:id', NbaController.delete);
}