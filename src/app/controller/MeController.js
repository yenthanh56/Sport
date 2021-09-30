const Sport = require('../Models/Sports');

const { mutipmoongoseToObject } = require('../../until/moongose')
class MeController {

    tablist(req, res, next) {
        // Sport.find({})
        //     .lean()
        //     .then(sports => res.render('listSport/tablist', { sports }))
        //     .catch(next)
        Promise.all([Sport.find({}), Sport.countDocumentsDeleted()])
            .then(([sports, countdelete]) =>
                res.render('listSport/tablist', {
                    countdelete,
                    sports: mutipmoongoseToObject(sports)
                })
            )
            .catch(next);
    }




    trash(req, res, next) {
        Sport.findDeleted({})
            .lean()
            .then(sports => res.render('listSport/trash', { sports }))
            .catch(next)

    }

}

module.exports = new MeController;