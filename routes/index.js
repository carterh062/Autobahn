exports.index = function(req, res){
  console.log(req.query);
  res.render('index', { title: 'Streaming Video' });
};