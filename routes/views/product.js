var keystone =  require('keystone');

exports = module.exports = function (req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;
    console.log("you are here!!");
    
    // Set locals
    locals.section = 'store';
    
    var Product = require('keystone').list('Product');
    // view.query('product', keystone.list('Product').model.findById(req.params.id));
    // view.on('get', function(next) {
            // Product.model.findById(req.params.id, function(err,data){
            // // console.log(data.title);
            // view.render("product", {product: data});
            // next();
    //     });
    //     // respond to the action
        
    // });
    Product.model.findById(req.params.id, function(err,data){
        // console.log(data.title);
        view.render("product", {product: data});
    });
}