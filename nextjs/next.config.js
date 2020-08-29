const path = require('path')

module.exports = {
	webpack: config => {
		config.resolve.alias['components'] = path.join(__dirname, 'components')
		// not needed anymore
		// config.resolve.alias['public'] = path.join(__dirname, 'public')

		return config
	}
}