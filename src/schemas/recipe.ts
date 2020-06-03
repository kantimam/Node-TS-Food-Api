import { Schema, model, Document } from 'mongoose';

export const RecipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    prep_time: {
        type: Number,
        required: false,
        default: 0
    },
    cook_time: {
        type: Number,
        required: false,
        default: 0
    },
    difficulty: {
        type: Number,
        required: false,
        default: 0,
        min: 0,
        max: 5
    },
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: {
            id: {
                type: Number,
                required: true
            },
            description: {
                type: String,
                required: true
            }
        }
    },
    servings: {
        type: Number,
        required: false,
        default: 1
    }
})


export interface IRecipe extends Document {

}

const Recipe = model<IRecipe>('Recipes', RecipeSchema)

export default Recipe;

