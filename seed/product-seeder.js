var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/shopping', { useMongoClient: true });

var products = [new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'Gothic Video Game',
    description:'Awsome game!!!!',
    price:10
    }),

    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awsome game!!!!',
        price:10
    }),

    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awsome game!!!!',
        price:10
    }),

    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awsome game!!!!',
        price:10
    }),

    new Product({
        imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title:'Gothic Video Game',
        description:'Awsome game!!!!',
        price:10
    })
];

var done = 0
for (var i = 0 ; i<products.length; i++){
    products[i].save(function (err,res) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    console.log("all data inserted");
    mongoose.disconnect();
}