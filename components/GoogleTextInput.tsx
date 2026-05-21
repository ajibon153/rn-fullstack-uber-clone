import { View, Text } from "react-native"
import React from "react"
import { GoogleInputProps } from "@/types/type"

const GoogleTextInput = ({ initialLocation, icon, containerStyle, handlePress }: GoogleInputProps) => {
    return (
        <View className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle}`}>
            <Text>GoogleTextInput</Text>
        </View>
    )
}

export default GoogleTextInput
