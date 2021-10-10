const Sport = require("../Models/Sports");

class TopController {
    top(req, res, next) {
        Sport.find({})
            .lean()
            .then((sports) => res.render("top", { sports }))
            .catch(next);

    }
    slug(req, res, next) {
        Sport.findOne({ slug: req.params.slug })
            .lean()
            .then((sports) => res.render("listSport/slug", { sports }))
            .catch(next);
    }

    create(req, res, next) {
        res.render("listSport/create");
    }
    store(req, res, next) {
        const sport = new Sport(req.body);
        sport
            .save()
            .then(() => res.redirect("/me/tablist"))
            .catch(next);
    }

    edit(req, res, next) {
        Sport.findById({ _id: req.params.id })
            .lean()
            .then((sports) => res.render("listSport/edit", { sports }))
            .catch(next);
    }
    update(req, res, next) {
        Sport.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect("/top/tablist"))
            .catch(next);
    }
    delete(req, res, next) {
        Sport.delete({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
    destroy(req, res, next) {
        Sport.deleteOne({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }
    restore(req, res, next) {
        Sport.restore({ _id: req.params.id })
            .then(() => res.redirect("back"))
            .catch(next);
    }

    handleform(req, res, next) {
        switch (req.body.action) {
            case "delete":
                Sport.delete({ _id: { $in: req.body.newsId } })
                    .then(() => res.redirect("back"))
                    .catch(next);
                break;
            default:
                res.json({ message: "action error" });
        }
    }
}

module.exports = new TopController();