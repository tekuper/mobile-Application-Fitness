const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({ 
    Imagetitle: {
        type: String,
        required: true
    },
    recette: {
        type: String,
        default: ""
    },
    ingredients: {
        type: [String], // Un tableau de chaînes pour représenter les ingrédients
        default: []
    },
    nutritionalValues: {
        type: {
            calories: Number,
            protein: Number,
            carbohydrates: Number,
            fat: Number
        },
        default: {}
    },
    imageUri: {
        type: String, // ajouter l'URL de l'image
        default: ""
    },
});

module.exports = mongoose.model('meal', mealSchema)
