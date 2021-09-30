const siterouter = require('./site');
const newsrouter = require('./news');
const toprouter = require('./top');
const merouter = require('./me');

function router(app) {

    app.use('/news', newsrouter);
    app.use('/top', toprouter);
    app.use('/me', merouter)
    app.use('/', siterouter);
}

module.exports = router;