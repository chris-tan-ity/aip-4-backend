const review = require('./review/review.service.js');
const test = require('./test/test.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(review);
  app.configure(test);
};
