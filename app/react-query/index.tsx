import { useReactQueryAsyncStorageKey } from "@/hooks/useReactQueryAsyncStorageKey";
import { useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {
    query,
    mutation: { mutate },
  } = useReactQueryAsyncStorageKey();

  const data = query.data ?? "";

  const ref = useRef("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Async Storage Value: {data ?? "undefined"}</Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
        {Object.keys(query)
          .filter((key) => key.startsWith("is"))
          .map((key) => {
            return (
              <Text key={key}>
                {/* @ts-ignore */}
                {key}: {query[key] ? "true" : "false"}
              </Text>
            );
          })}
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          autoFocus
          style={{
            borderBottomWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            padding: 10,
            width: "100%",
          }}
          onChangeText={(text) => (ref.current = text)}
        ></TextInput>
      </View>
      <View>
        <Pressable onPress={() => mutate(ref.current)}>
          <Text>Set Async Storage Value</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
