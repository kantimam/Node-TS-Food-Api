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
    time: {
        prep: { type: String, required: false },
        cook: { type: String, required: false },
        active: { type: String, required: false },
        inactive: { type: String, required: false },
        ready: { type: String, required: false },
        total: { type: String, required: false }
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
    instructions: {
        type: {
            id: {
                type: Number,
                unique: true,
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
    },
    images: [
        {
            id: {
                type: Number,
                required: true,
                unique: true
            },
            path: {
                type: String,
                required: true
            }
        }
    ]
})


export interface IRecipe extends Document {
    name: string,
    prep_time?: number,
    cook_time?: number,
    difficulty?: number,
    ingredients: string[],
    instructions: Instruction[],
    servings: number,
    images: Image[],
    time?: ScrapedTime
}

interface Instruction {
    id: number,
    description: string
}

interface Image {
    id: number,
    path: string
}

interface ScrapedTime {
    prep?: string
    cook?: string
    active?: string
    inactive?: string
    ready?: string
    total?: string
}

const Recipe = model<IRecipe>('Recipes', RecipeSchema)

export default Recipe;

