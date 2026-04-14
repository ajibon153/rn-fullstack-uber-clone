import { ClerkProvider } from "@clerk/clerk-expo"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"

import "./global.css"
import { tokenCache } from "@/lib/auth"
import { LogBox } from "react-native"

SplashScreen.preventAutoHideAsync()

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
if (!publishableKey) {
    throw new Error("Add your Clerk Publishable Key to the .env file")
}

LogBox.ignoreLogs(["Clerk:"])

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
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="(root)" />
                <Stack.Screen name="(auth)" />
            </Stack>
        </ClerkProvider>
    )
}

export default Layout
