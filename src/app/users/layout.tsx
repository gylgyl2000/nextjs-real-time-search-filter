import { Suspense } from "react"

export default function UsersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <Suspense>
                {children}
            </Suspense>
        </section>
    )
}