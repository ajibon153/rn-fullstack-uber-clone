import { useUser } from "@clerk/clerk-expo"
import { Redirect } from "expo-router"
import React, { useEffect } from "react"

const Home = () => {
    const { isSignedIn } = useUser()

    useEffect(() => {
        console.log("================isSignedIn", isSignedIn)
    }, [isSignedIn])

    // Protect the page from unauthenticated users
    if (isSignedIn) return <Redirect href="/(root)/(tabs)/Home" />

    return <Redirect href="/(auth)/welcome" />
}

export default Home
