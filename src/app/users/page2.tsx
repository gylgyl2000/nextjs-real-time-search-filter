'use client'

import { ProfileCard } from "@/components/ProfileCard"
import SearchInput from "@/components/SearchInput"
import { useSearchParams } from 'next/navigation'
import { filteredUsers } from "@/lib/data"
import { Suspense, useEffect, useState } from "react"

export default function UsersPage(
    // { searchParams }: Readonly<SearchParamsProps>
) {
    const searchParams = useSearchParams()
    console.log(searchParams)
    // const searchQuery = searchParams?.search ?? ''
    const searchQuery = searchParams.get('search') || ''
    console.log(searchQuery)

    const [results, setResults] = useState<UserProfile[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // Simuler un délai pour l'appel API
            await new Promise((resolve) => setTimeout(resolve, 300));

            const findUser = filteredUsers(searchQuery)

            setResults(findUser)
        }
        fetchData()
    }, [searchQuery])

    const totalUsers = results.length

  return (
    <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
        <SearchInput />
        <Suspense fallback={<h2>🌀 Chargement...</h2>}>
            <p className="mb-10 ">Affichage de {totalUsers} {totalUsers > 1 ? "utilisateurs" : "utilisateur"}</p>
            <div className="mt-8">
                {totalUsers === 0 ? <p>Aucun résultat</p> : (
                    <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-8">
                        {results.map((user, index) => (
                            <div key={index}>
                                    <ProfileCard
                                        name={user.identification.full_name}
                                        role={user.employment.occupation}
                                        photo={user.profile_photo["256x256"]}
                                        email={user.contact_information.email_address}
                                        username={user.online_presence.username}
                                        />
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </Suspense>
    </section>
  )
}