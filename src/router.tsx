import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'

const IndexPage = lazy(() => import('./views/IndexPage'))
const FavoritesPage = lazy(() => import('./views/FavoritesPage'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path='/'
                        element={
                            <Suspense>
                                <IndexPage />
                            </Suspense>
                        }
                        index></Route>
                    <Route
                        path='/favorites'
                        element={
                            <Suspense>
                                <FavoritesPage />
                            </Suspense>
                        }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
