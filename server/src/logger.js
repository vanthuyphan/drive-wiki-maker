// Logger
// synchronous init

var LOG_PATH_ACTIVITY = "activity.log";
var LOG_PATH_EXCEPTIONS = "exceptions.log";

var winston = require('winston');
var config = require('./config');
var log;

if (config.isProd())
{
	log = new (winston.Logger)({
		transports: [
			new winston.transports.Console({ timestamp:true, level:'info' })
			/*
			 ,
			 new winston.transports.File({ timestamp:true, level:'info', filename: LOG_PATH_ACTIVITY })
			 */
		]
		/*
		 , exceptionHandlers: [
		 new (winston.transports.Console)({ timestamp:true }),
		 new winston.transports.File({ filename: LOG_PATH_EXCEPTIONS })
		 ]
		 */
	});
}
else
{
	log = new (winston.Logger)({
		transports: [
			new winston.transports.Console({ timestamp:true, level:'debug' })
			/*
			 ,
			 new winston.transports.File({ timestamp:true, level:'info', filename: LOG_PATH_ACTIVITY })
			 */
		]
	});
}

// Note the syntax here for passing a variable number of arguments 

exports.d = function() { log.debug.apply(null, arguments); }
exports.v = function() { log.verbose.apply(null, arguments); }
exports.i = function() { log.info.apply(null, arguments); }
exports.w = function() { log.warn.apply(null, arguments); }
exports.e = function() { log.error.apply(null, arguments); }
