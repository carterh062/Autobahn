exports.stream = function(req, res){
  var id = req.params.id;
  res.render('stream', { title: 'Streaming Video: '+id });
};

exports.index = function(req, res){
  res.render('index', { title: 'Autobahn Video' });
};