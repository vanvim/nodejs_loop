'use strict';

module.exports = function(Book) {
  Book.listBookId = async () => {
    return [200, {}]
  }
  Book.remoteMethod(
    "listBookId",
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
