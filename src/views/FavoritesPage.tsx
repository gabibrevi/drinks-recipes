import { useAppStore } from '../stores/useAppStore'
import DrinkCard from '../components/DrinkCard'
import { useMemo } from 'react'

export default function FavoritesPage() {
    const favorites = useAppStore((state) => state.favorites)
    const hasFavorites = useMemo(() => favorites.length, [favorites])
    return (
        <>
            <h1 className=' text-6xl font-extrabold'>Favorites</h1>
            {hasFavorites ? (
                <div className=' grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 my-10 gap-10'>
                    {favorites.map((drink) => (
                        <DrinkCard key={drink.idDrink} drink={drink} />
                    ))}
                </div>
            ) : (
                <p className=' mt-40 text-center text-3xl'>Los favoritos se mostrarán aquí</p>
            )}
        </>
    )
}
