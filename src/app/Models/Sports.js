const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// add slug theo name
const slug = require("mongoose-slug-generator");

// dùng để xóa mềm
const mongooseDelete = require("mongoose-delete");

const Sports = new Schema({
    name: { type: String, require: true },
    description: { type: String },
    imageavata: { type: String },
    ballon: { type: String },
    goal: { type: String },
    totalmatch: { type: String },
    imagebackground: { type: String },
    imageslug: { type: String },
    goal_country: { type: String },
    slug: { type: String, slug: "name", unique: true },
}, {
    timestamps: true,
});
mongoose.plugin(slug);
Sports.plugin(mongooseDelete, {
    overrideMethods: "all",
    deletedAt: true,
});

module.exports = mongoose.model("Sports", Sports);