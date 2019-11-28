
/**
 * isAuthenticated
 *
 */
var jwt = require('express-jwt');

var isAuthenticated = jwt({
  secret: new Buffer('dQB_ahPdtH1gC8lK8JnE3-6n3RnoYeAZhhVJ9rHBRBKNFLYSJ_HAmlPB7GeUWjiK', 'base64'),
  audience: '2vkyzqXlQiSUXiGQtrXNFyTNtnmTyhS6'
});

module.exports = isAuthenticated;
