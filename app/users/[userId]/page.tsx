import Link from "next/link"
import getUser from "@/lib/getUser"
import getPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"

type Params = {
    params: {
        userId: string 
    }
}

export default async function UserPage({params: {userId}}: Params) {
    const userData: Promise<Users> = getUser(userId);
    const userPostsData: Promise<Post[]> = getPost(userId);


    // const [user, userPosts] = await Promise.all([userData, userPost]);
    const user = await userData


    return (
        <>
            <h2>
                {user.name}
                <br/>
                <Suspense>
                    {/* @ts-expect-error Server Component */}
                    <UserPosts promise={userPostsData} />
                </Suspense>
            </h2>
        </>
    )
}
