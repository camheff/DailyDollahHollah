import winston from 'winston';
import path from 'path';

const customLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        debug: 4,
        trace: 5,
        utilityDebug: 6,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        debug: 'blue',
        trace: 'grey',
        utilityDebug: 'cyan',
    },
};

winston.addColors(customLevels.colors);
// Function to extract file name and line number
const fileInfo = () => {
    const stack = new Error().stack || '';
    const stackLines = stack.split('\n');

    // Find the first line in the stack that does not contain 'logger.js'
    //let callerLine = stackLines
    //    .slice(1)
    //    .find(
    //        (line) =>
    //            !line.includes('logger.js') &&
    //            !line.includes('printf.js') &&
    //            !line.includes('combine.js') &&
    //            !line.includes('_stream_transform.js')
    //    );
    let callerLine = stackLines;

    if (callerLine) {
        const matchResult = /at\s+(?:.*\()?(.*):(\d+):(\d+)/.exec(callerLine);
        if (matchResult) {
            return `${path.basename(matchResult[1])}:${matchResult[2]}`;
        }
    }
    return null;
};

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) =>
            `[${info.timestamp}] [${fileInfo()}] ${info.level}: ${info.message}`
    )
);

const logger = winston.createLogger({
    levels: customLevels.levels,
    format,
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
    exitOnError: false,
});

logger.level = process.env.LOG_LEVEL || 'trace';

export default logger;
