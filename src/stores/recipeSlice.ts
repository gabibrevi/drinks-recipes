import { StateCreator } from 'zustand'
import { getCategories, getRecipeById, getRecipesAPI } from '../services/RecipeService'
import { Categories, Drink, Drinks, Recipe, SearchFilters } from '../types'

export type RecipeSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    getRecipesAPI: (searchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: [],
    },
    drinks: {
        drinks: [],
    },
    selectedRecipe: {} as Recipe,

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
    selectRecipe: async (idDrink) => {
        const selectedRecipe = await getRecipeById(idDrink)

        set({
            selectedRecipe,
        })
    },
})
