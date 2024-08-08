import { StateCreator } from 'zustand'
import { Recipe } from '../types'

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClicFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}
export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClicFavorite: (recipe) => {
        if (get().favoriteExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink),
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe],
            }))
        }
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return get().favorites.some((fav) => fav.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')

        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites),
            })
        }
    },
})
