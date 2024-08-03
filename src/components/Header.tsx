import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header className={isHome ? 'bg-header bg-center bg-cover ' : ' bg-slate-800'}>
            <div className='mx-auto container px-5 py-16'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img className='w-32' src='/logo.svg' alt='logo' />
                    </div>

                    <nav className=' flex gap-4'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? ' text-orange-400 uppercase font-bold' : ' text-white uppercase font-bold'
                            }>
                            Inicio
                        </NavLink>
                        <NavLink
                            to='/favorites'
                            className={({ isActive }) =>
                                isActive ? ' text-orange-400 uppercase font-bold' : ' text-white uppercase font-bold'
                            }>
                            Favoritos
                        </NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form className=' md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 rounded-lg p-10 shadow space-y-6'>
                        <div className=' space-y-4'>
                            <label htmlFor='ingredient' className=' block text-white uppercase font-extrabold text-lg'>
                                Nombre o ingredientes
                            </label>
                            <input
                                id='ingredient'
                                type='text'
                                name='ingredient'
                                className=' p-3 w-full rounded-lg focus:outline-none'
                                placeholder='Ej. Café, Crema, Vodka, Tequila'
                            />
                        </div>

                        <div className=' space-y-4'>
                            <label htmlFor='category' className=' block text-white uppercase font-extrabold text-lg'>
                                Categoría
                            </label>
                            <select id='category' name='category' className=' p-3 w-full rounded-lg focus:outline-none'>
                                <option value=''> -- Seleccione --</option>
                            </select>
                        </div>

                        <input
                            value='Buscar recetas'
                            type='submit'
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase w-full p-2 rounded-lg font-extrabold'></input>
                    </form>
                )}
            </div>
        </header>
    )
}
