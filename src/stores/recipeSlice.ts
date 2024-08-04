import { StateCreator } from 'zustand'
import { getCategories, getRecipesAPI } from '../services/RecipeService'
import { Categories, Drinks, SearchFilters } from '../types'

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    getRecipesAPI: (searchFilters: SearchFilters) => Promise<void>
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    drinks: {
        drinks: [],
    },
    fetchCategories: async () => {
        const categories = await getCategories()

        //adding categories to state (same var name allows to write just the name to set it)
        set({
            categories,
        })
    },
    getRecipesAPI: async (filters) => {
        const drinks = await getRecipesAPI(filters)
        set({
            drinks,
        })
    },
})
