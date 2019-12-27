const path = require('path');
module.exports = (app) => {
  const models = require(path.resolve(__dirname, '../model-config.json'));
  const datasources = require(path.resolve(__dirname, '../datasources.json'));

  var MySQL = app.dataSources.MySQL;
  Object.keys(models).forEach(modelName => {
    if (models[modelName].dataSource === 'MyQSL') {
      console.log(MySQL, "MySQL")
      if (MySQL) {
        MySQL.autoupdate(modelName, (err) => {
          if (err) {
            throw new Error(`Cannot migrate model ${modelName}: ${err.message}`);
            console.log('Model ' + modelName + ' updated');
          }
        });
      }
    }
  });
};
