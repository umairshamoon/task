const mongoose = require('mongoose');
// const winston = require('winston');

module.exports = function (url) {
  mongoose.connect(url).then(() => {
    console.log('connect successfully');
  });
};
