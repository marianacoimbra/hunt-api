const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

//model dentro do modelo mvc representa uma tabela do BD, ou uma estrutura de dados
//que vamos gravar dentro do BD

//Schema é quais são o campos que um produto pode ter e os tipos de valores que ele pode salvar

//Schema do produto
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: {
        type : String, 
        required: true,
    },
    url: {
        type: String, 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//Basicamente o código que registra um model na aplicação
mongoose.model('Product', ProductSchema);