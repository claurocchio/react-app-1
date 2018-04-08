/**
 * Module dependencies.
 */
const express = require('express');

let fs = require('fs');
const app = express();

let archivo = fs.readFileSync('./public\\resources\\clients.json', 'utf-8');
var content = JSON.parse(archivo);
console.log(content[0].username);

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

/**
 * Create HTTP server.
 */
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`Listening on port ${port}`));
app.on('error', onError);
app.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
