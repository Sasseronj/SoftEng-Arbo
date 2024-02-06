// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const riskSituationSchema = new Schema(
    {     
        nome: {
            type: String,
            required: true,
        },

        descricao: {
            type: String,
            default: null,
            required: true
        },

        arvores: {
            type: [Schema.Types.Mixed],
            default: [],
            require: false
        },

        documentos: {
            type: [Schema.Types.Mixed],
            default: [],
            require: false
        },

        historico: {
            type: [Schema.Types.Mixed],
            default: [],
            require: false
        }
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const riskSituation = mongoose.model('SituacaoRisco', riskSituationSchema)

module.exports = riskSituation