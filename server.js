var http = require('http'),
    app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/estudo');

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express Server listen at port ' + app.get('port'));
});