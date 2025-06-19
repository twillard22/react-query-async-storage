import {
  useValtioAsyncStorageKey,
  ValtioAsyncStorageKey,
} from "@/hooks/useValtioAsyncStorageKey";
import { useRef } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { state } = useValtioAsyncStorageKey();

  const data = state ?? "";

  const ref = useRef(data ?? "");

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
        <Text>{"We don't get the same data we get from react-query"}</Text>
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
        <Pressable
          onPress={() => {
            // Setting the state to me feels wonky
            ValtioAsyncStorageKey.state = ref.current;
          }}
        >
          <Text>Set Async Storage Value</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
