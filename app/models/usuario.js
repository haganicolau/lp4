var mongoose = require('mongoose');

module.exports = function(){

  var schema = mongoose.Schema({
    nome:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    }

    // livros:[{
    //   type: Schema.Types.ObjectId,
    //   ref:'Livro'
    // }]

  });

  return mongoose.model("Usuario", schema);
} ;
