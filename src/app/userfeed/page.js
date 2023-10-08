"use client"
import UserFeedNav from "@/components/user-feed-components/user-feed-nav";
import Feed from "@/components/user-feed-components/feed";


const UserFeed = () => {
    return (
        <main>
            <UserFeedNav/>
            <Feed />
        </main>
    )
}

export default UserFeed;