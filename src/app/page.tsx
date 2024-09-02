import UsersPage from '@/app/users/page2'
import { Suspense } from 'react'

export default function Home() {

    return (
        <Suspense fallback={<h2>🌀 Chargement...</h2>}>
            <UsersPage
                // searchParams={{ search: '' }}
            />
        </Suspense>
    )
}