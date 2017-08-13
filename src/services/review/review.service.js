// Initializes the `review` service on path `/review`
const createService = require('feathers-memory');
const hooks = require('./review.hooks');
const filters = require('./review.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'review',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/review', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('review');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
