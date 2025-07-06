import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const SingUp = () => {
    return (
        <View>
            <Text>SingUp</Text>
            <Button title="Sing In" onPress={() => router.push("/sing-in")} />
        </View>
    )
}

export default SingUp