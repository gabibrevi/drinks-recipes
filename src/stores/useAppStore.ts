import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, RecipeSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { createNotificationsSlice, NotificationsSliceType } from './notificationsSlice'

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationsSliceType>()(
    devtools((...a) => ({
        ...createRecipeSlice(...a),
        ...createFavoritesSlice(...a),
        ...createNotificationsSlice(...a),
    }))
)
