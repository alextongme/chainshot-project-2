const client = require('./client');

// stop "add"
client.request('stopMining', [], function(err, response) {
  if(err) throw err;
  console.log(response.result); // success
});