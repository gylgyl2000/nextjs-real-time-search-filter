import { Users } from '@/lib/users'

export function filteredUsers(searchQuery: any) {
    const findUser = Users.filter((user) => {
        if (searchQuery) {
            return (
                user.identification.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.employment.occupation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.online_presence.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.contact_information.email_address.toLowerCase().includes(searchQuery.toLowerCase())
            )
        } else {
            return true
        }
    })
    return findUser
}