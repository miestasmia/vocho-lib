const doDebug = false;

function debug (...obj) {
	if (doDebug) {
		return console.log(...obj);
	}
}

function debugOneLine (...obj) {
	if (doDebug) {
		return process.stdout.write(...obj);
	}
}

module.exports = {
	debug: debug,
	debugOneLine: debugOneLine
};
