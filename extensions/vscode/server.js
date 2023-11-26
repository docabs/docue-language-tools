try {
	module.exports = require('@docue/language-server/bin/docue-language-server');
} catch {
	module.exports = require('./dist/server');
}
