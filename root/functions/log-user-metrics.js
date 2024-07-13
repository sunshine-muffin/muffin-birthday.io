const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    console.log('Function triggered');
    console.log('Event:', event);

    const data = JSON.parse(event.body);
    const logFilePath = path.join(__dirname, 'user-metrics.log');

    fs.appendFileSync(logFilePath, JSON.stringify(data) + '\n', 'utf8');

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'User metrics logged successfully.' })
    };
};
