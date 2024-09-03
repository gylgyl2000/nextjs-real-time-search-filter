'use client'

import { Users } from '@/lib/users'
import { ProfileCard } from '@/components/ProfileCard'
import { useState } from 'react'

export default function App() {
    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(Users)

    const handleInputChange = (e: any) => { 
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = Users.filter((user) =>
            user.identification.full_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        
            setFilteredUsers(filteredItems);
    }

    const totalUsers = Users.length

    return (
        <section className="h-[100vh] w-screen px-[2rem] md:px-[6rem] mt-[100px]">
            <input
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Entrez un mot-clé'
                className="peer bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
            />
            <p className="mb-10 ">Affichage de {totalUsers} {totalUsers > 1 ? "utilisateurs" : "utilisateur"}</p>
            <div className="mt-8">
                {totalUsers === 0 ? <p>Aucun résultat</p> : (
                    <div className="m-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-8">
                        {filteredUsers.map((user, index) => (
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
        </section>
    )
}