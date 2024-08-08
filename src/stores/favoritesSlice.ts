import { StateCreator } from 'zustand'
import { Recipe } from '../types'
import { createNotificationsSlice, NotificationsSliceType } from './notificationsSlice'

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClicFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}
export const createFavoritesSlice: StateCreator<
    FavoritesSliceType & NotificationsSliceType,
    [],
    [],
    FavoritesSliceType
> = (set, get, api) => ({
    favorites: [],
    handleClicFavorite: (recipe) => {
        if (get().favoriteExist(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink),
            }))
            createNotificationsSlice(set, get, api).showNotification({
                text: 'Favorito eliminado con éxito',
                error: false,
            })
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe],
            }))
            createNotificationsSlice(set, get, api).showNotification({
                text: 'Favorito agregado con éxito',
                error: false,
            })
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
