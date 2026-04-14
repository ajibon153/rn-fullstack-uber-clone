import { ClerkProvider } from "@clerk/clerk-expo"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"

import "./global.css"
import { tokenCache } from "@/lib/auth"

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

const Layout = () => {
    const [loaded] = useFonts({
        "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
        "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
        "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
        "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
        "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
        Jakarta: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf")
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
        if (!publishableKey) {
            throw new Error("Add your Clerk Publishable Key to the .env file")
        }
    }, [loaded])

    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="welcome" />
                <Stack.Screen name="sign-up" />
                <Stack.Screen name="sign-in" />
                <Stack.Screen name="index" />
                <Stack.Screen name="(root)" />
                <Stack.Screen name="(auth)" />
            </Stack>
        </ClerkProvider>
    )
}

export default Layout
