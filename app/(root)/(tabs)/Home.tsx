import { useUser } from "@clerk/clerk-expo"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Page() {
    const { isSignedIn, user, isLoaded } = useUser()

    // Handle loading state
    if (!isLoaded)
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )

    // Protect the page from unauthenticated users
    if (!isSignedIn)
        return (
            <View>
                <Text>Sign in to view this page</Text>
            </View>
        )

    return (
        <SafeAreaView>
            <Text>Hello {user.id}!</Text>
        </SafeAreaView>
    )
}
