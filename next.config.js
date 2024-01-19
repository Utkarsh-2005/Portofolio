const path = require('path');

module.exports = {
  devIndicators: {
    warn: false,
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'lib');
    return config;
  },
};
