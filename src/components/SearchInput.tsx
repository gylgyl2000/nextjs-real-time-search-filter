'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";

const SearchInput = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const query = searchParams.get('search') || ''
    const [localQuery, setLocalQuery] = useState<string>(query)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Mettre à jour l'URL avec les nouveaux paramètres de recherche
            const newSearchParams = new URLSearchParams(searchParams.toString())
            newSearchParams.set('search', localQuery)
            router.push(`?${newSearchParams.toString()}`)
        }, 500)
        // Nettoyer le timeout pour éviter les mises à jour multiples
        return () => clearTimeout(timeoutId)
    }, [localQuery, router, searchParams])

    return (
        <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
            <label htmlFor="inputId" className="size-6 text-slate-500"><MagnifyingGlassIcon /></label>
            <input
                type="text"
                id="inputId"
                placeholder="Entrez un mot-clé"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                className="peer bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
            />
        </div>
    )
}

export default SearchInput