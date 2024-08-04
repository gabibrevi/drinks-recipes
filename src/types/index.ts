import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterAPISchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFilterAPISchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
