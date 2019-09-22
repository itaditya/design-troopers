const percyHealthCheck = require('@percy/cypress/task')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  on("task", percyHealthCheck);
  addMatchImageSnapshotPlugin(on, config);
};
