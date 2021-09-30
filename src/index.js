const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
const router = require("./routers");
const db = require("./config/db");
const methodOverride = require("method-override");

db.connect();

// phương thức chuyển đổi post -> put dùng thể edit
app.use(methodOverride("_method"));

//const morgan = require('morgan');

// update load data
//app.use(morgan('combined'));

// add all file css, js , bootraps
app.use(express.static(path.join(__dirname, "public")));

// template engine handlebars
app.engine(
    "hbs",
    exphbs({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// req.body
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// tách ra các file router riêng
router(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});