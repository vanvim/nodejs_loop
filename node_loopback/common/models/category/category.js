'use strict';

module.exports = function(Category) {
  Category.listCategoryId = async () => {
    return [200, {}]
  }
  Category.remoteMethod(
    "listCategoryId",
    {
      http : {verb: "GET", path: "/list/"},
      accepts:[],
      returns: [
        {arg: "status", type: "number"},
        {arg: "data", type: "object"},
      ]
    }
  )
};
