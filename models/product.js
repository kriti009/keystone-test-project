var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    singular: 'Product',
    plural: 'Products',
  
  });

  Product.add({
    title: { type: String, required: true },
    price: {type: Number},
    qty: {type : Number},
    description: { type: Types.Html, wysiwyg: true, height: 300 },
    image: { type: Types.CloudinaryImage },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User' },
    publishedDate: { type: Date, default: Date.now },   
  });

  Product.register();