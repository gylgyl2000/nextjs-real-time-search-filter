import UsersPage from '@/app/users/page'
import { Suspense } from 'react'

export default function Home() {

    return (
        <Suspense fallback={<h2>🌀 Chargement...</h2>}>
            <UsersPage />
        </Suspense>
    )
}