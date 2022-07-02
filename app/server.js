const express = require('express');
const pino = require('pino');

const app = express();

const logger = pino({
    level: 'info',
    timestamp: () => `,"time":"${new Date().toISOString()}"`
});

logger.info('Hello Kubernnetes world');


app.listen(3000, function () {
    logger.info("app listening on port 3000!");
});
