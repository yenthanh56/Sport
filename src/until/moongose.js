module.exports = {
    mutipmoongoseToObject: function(sports) {
        return sports.map(sport => sport.toObject());
    },
    moongoseToObject: function(sport) {
        return sport ? sport.toObject() : sport
    }
};