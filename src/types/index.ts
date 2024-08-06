import { z } from 'zod'
import {
    CategoriesAPIResponseSchema,
    DrinkAPIResponse,
    DrinksAPIResponse,
    RecipeAPIResponseSchema,
    SearchFilterAPISchema,
} from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFilterAPISchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
