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
