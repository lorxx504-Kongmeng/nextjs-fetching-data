import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link";
export default async function UsersPage() {
    const usersData: Promise<Users[]> = getAllUsers();
    const users = await usersData;

    const content = (
        <section>
            <h2>
                <Link href='/' className="bg-amber-500 rounded hover:blue-400 px-4 py-6 m-4 pb-5">
                    Back Home
                </Link>
                <br/>
                {
                    users.map(users => {
                        return (
                            <>
                                <p key={users.id} className="m-2 bg-blue-200 px-5 py-4">
                                    <Link href={`/users/${users.id}`}>
                                        Users : {users.name}
                                    </Link>
                                </p>
                                <br/>
                            </>
                        )
                    })
                }
                
            </h2>
        </section>
    )

    return content;
}
