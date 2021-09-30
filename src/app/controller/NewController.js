const Sport = require('../Models/Sports');

class NewController {
    new(req, res, next) {
        Sport.find({})
            .lean()
            .then(sports => res.render('news', { sports }))
            .catch(next)
    }



}

module.exports = new NewController;