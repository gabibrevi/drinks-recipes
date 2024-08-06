//Creacion de schema de la API con ZOD

import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string(),
        })
    ),
})

export const SearchFilterAPISchema = z.object({
    category: z.string(),
    ingredient: z.string(),
})

export const DrinkAPIResponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
})

export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIResponse),
})

export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),
    strIngredient9: z.string().nullable(),
    strIngredient10: z.string().nullable(),
    strIngredient11: z.string().nullable(),
    strIngredient12: z.string().nullable(),
    strIngredient13: z.string().nullable(),
    strIngredient14: z.string().nullable(),
    strIngredient15: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
})
