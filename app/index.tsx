import { useUser } from "@clerk/clerk-expo"
import { Redirect } from "expo-router"
import React from "react"

const Home = () => {
    const { isSignedIn } = useUser()
    // Protect the page from unauthenticated users
    if (isSignedIn) return <Redirect href="/(root)/(tabs)/Home" />

    return <Redirect href="/(auth)/welcome" />
}

export default Home
