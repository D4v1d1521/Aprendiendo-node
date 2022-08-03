var axios = require('axios');
var data = JSON.stringify({
    "collection": "VENDEDORES",
    "database": "POSDavidAlvarado",
    "dataSource": "ClusterADSI2364481",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-sgjnu/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '7OKfaF8BxmzOmtV5BD4ZE0gl7RAvc8Ok400QUPRb3XfhWGQJ1oFInwSFN7Fkw6cg',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
