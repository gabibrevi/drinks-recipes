import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FavoritesPage from './views/FavoritesPage'
import Layout from './layouts/Layout'
import IndexPage from './views/IndexPage'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<IndexPage />} index></Route>
                    <Route path='/favorites' element={<FavoritesPage />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
