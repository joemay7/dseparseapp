var _ = require('underscore');
var RealtimeUpdate = Parse.Object.extend('RealtimeUpdate');

exports.index = function(req, res) {
  if (req.query['hub.verify_token'] == 'dse') {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('nice try!');
  }
};

exports.record = function(req, res) {
  var rtu = new RealtimeUpdate();
  rtu.set("data", req.body); 
  rtu.save(null, {
    success: function(rtu) {
      // The object was saved successfully.
    },
    error: function(rtu, error) {
      // The save failed.
    }
  }); 
};
