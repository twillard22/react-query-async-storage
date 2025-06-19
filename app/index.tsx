import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
      <View>
        <Pressable onPress={() => router.push("/react-query")}>
          <Text>react-query</Text>
        </Pressable>
      </View>
      <View>
        <Pressable onPress={() => router.push("/valtio")}>
          <Text>valtio</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
