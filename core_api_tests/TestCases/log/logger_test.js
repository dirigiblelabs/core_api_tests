/* globals $ */
/* eslint-env node, dirigible */
var loggers = require('log/loggers');
var logger = loggers.get('testLogger');

function doLogs(){
	try{
		throw new Error('ATestExceptionMessage');
	}catch(err){
		logger.error('test error', err);
	}
	logger.warn('test warn');	
	logger.info('test info');
	logger.debug('test debug');
	logger.trace('test trace');
}

console.info('----------- testing logging off');
loggers.setLevel(loggers.LEVELS.OFF);
doLogs();

console.info('----------- testing level ERROR');
loggers.setLevel(loggers.LEVELS.ERROR);
doLogs();

console.info('----------- testing level WARN');
loggers.setLevel(loggers.LEVELS.WARN);
doLogs();

console.info('----------- testing level INFO');
loggers.setLevel(loggers.LEVELS.INFO);
doLogs();

console.info('----------- testing level DEBUG');
loggers.setLevel(loggers.LEVELS.DEBUG);
doLogs();

console.info('----------- testing level TRACE');
loggers.setLevel(loggers.LEVELS.TRACE);
doLogs();

console.info('----------- testing level ALL');
doLogs();