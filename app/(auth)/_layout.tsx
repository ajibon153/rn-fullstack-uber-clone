import React, { useEffect } from "react"
import { Redirect, Stack } from "expo-router"
import { useUser } from "@clerk/clerk-expo"

export default function Layout() {
    const { isSignedIn } = useUser()

    useEffect(() => {
        console.log("================isSignedIn", isSignedIn)
    }, [isSignedIn])

    // Protect the page from unauthenticated users
    if (isSignedIn) return <Redirect href="/(root)/(tabs)/Home" />

    return (
        <Stack initialRouteName="sign-up" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="sign-up" />
            <Stack.Screen name="sign-in" />
        </Stack>
    )
}
