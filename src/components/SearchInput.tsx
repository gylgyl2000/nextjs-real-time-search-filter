import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useDebouncedCallback } from "use-debounce"

export const SearchInput = () => {
    const searchParams = useSearchParams()
    const { replace } = useRouter();
    const pathname = usePathname();

    const handleChange = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('search', term);
          } else {
            params.delete('search');
          }
          replace(`${pathname}?${params.toString()}`);
    }, 300)

    return (
        <div className="search__input border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 p-1 rounded-[15px]">
            <label htmlFor="inputId" className="size-6 text-slate-500"><MagnifyingGlassIcon /></label>
            <input type="text"
                id="inputId"
                placeholder="Entrez un mot-clé"
                defaultValue={searchParams.get('search')?.toString()}
                onChange={(e) => {handleChange(e.target.value)}}
                className="peer bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3" />
        </div>
    )
}