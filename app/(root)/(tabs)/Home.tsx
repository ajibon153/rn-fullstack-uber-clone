import { recentRides } from "@/app/dummy/mockData"
import GoogleTextInput from "@/components/GoogleTextInput"
import Map from "@/components/Map"
import RideCard from "@/components/RideCard"
import { icons, images } from "@/constants"
import { useUser } from "@clerk/clerk-expo"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Page() {
    const { isSignedIn, user, isLoaded } = useUser()
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])

    // Handle loading state
    if (!isLoaded)
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )

    const handleDestinationPress = () => {
        // Implement destination press logic here
    }

    const handleSignOut = () => {
        // Implement sign-out logic here, e.g., using Clerk's signOut function
        // signOut()
    }

    return (
        <SafeAreaView>
            <FlatList
                className="px-5"
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
                data={recentRides?.slice(0, 5) || []}
                keyExtractor={(item) => item.ride_id}
                renderItem={({ item }) => <RideCard ride={item} />}
                ListEmptyComponent={() => (
                    <View className="flex flex-col items-center justify-center">
                        {!loading ? (
                            <>
                                <Image
                                    source={images.noResult}
                                    className="w-40 h-40"
                                    alt="No recent rides found"
                                    resizeMode="contain"
                                />
                                <Text className="text-sm">No recent rides found</Text>
                            </>
                        ) : (
                            <ActivityIndicator size="small" color="#000" />
                        )}
                    </View>
                )}
                ListHeaderComponent={() => (
                    <>
                        <View className="flex flex-row items-center justify-between my-5">
                            <Text className="text-2xl capitalize font-JakartaSemiBold">
                                Welcome,{" "}
                                {user?.firstName || user?.emailAddresses[0]?.emailAddress?.split("@")[0] || "there"}!
                            </Text>
                            <TouchableOpacity
                                onPress={handleSignOut}
                                className="justify-center items-center w-10 h-10 rounded-full bg-white"
                            >
                                <Image source={icons.out} className="w-5 h-5" />
                            </TouchableOpacity>
                        </View>
                        <GoogleTextInput
                            icon={icons.search}
                            containerStyle="bg-white shadow-md shadow-neutral-300"
                            handlePress={handleDestinationPress}
                        />
                        <Text className="text-xl font-JakartaSemiBold mt-5 mb-3">Your current location</Text>
                        <View className="flex flex-row items-center justify-start bg-transparent h-[300px]">
                            <Map />
                        </View>
                        <Text className="text-xl font-JakartaSemiBold mt-5 mb-3">Recent Rides</Text>
                    </>
                )}
            />
        </SafeAreaView>
    )
}
