import axios from 'axios'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, SearchFilterAPISchema } from '../utils/recipes-schema'
import { SearchFilters } from '../types'

export async function getCategories() {
    const url = 'https://thecocktaildb.com/api/json/v1/1/list.php?c=list'

    try {
        const { data } = await axios(url)
        const result = CategoriesAPIResponseSchema.safeParse(data)
        if (result.success) {
            return result.data
        }
    } catch (error) {
        console.log('Recipe Service: getCategories error: ', error)
    }
}

export async function getRecipesAPI(filters: SearchFilters) {
    const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`

    try {
        const { data } = await axios(url)
        const result = DrinksAPIResponse.safeParse(data)

        if (result.success) {
            return result.data
        }
    } catch (error) {
        console.log('Recipe Service: getRecipesAPI error: ', error)
    }
}
