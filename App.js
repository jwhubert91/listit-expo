import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

// left off here: https://docs.expo.dev/develop/user-interface/splash-screen/

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
