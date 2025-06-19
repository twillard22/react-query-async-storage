import AsyncStorage from "@react-native-async-storage/async-storage";
import { proxy, subscribe, useSnapshot } from "valtio";

const ValtioAsyncStorageKey = proxy<{
  state: string | null;
}>({
  state: null,
});

const useValtioAsyncStorageKey = () => {
  return useSnapshot(ValtioAsyncStorageKey);
};

// Initialize is annoying here
// We also have to manually handle the error case
// And if we want to expose the error we have to do it manually also
AsyncStorage.getItem("async-storage-key")
  .then((value) => {
    ValtioAsyncStorageKey.state = value;
  })
  .catch(() => {
    // Do something to expose the error
  });

// We have to manually subscribe to the change so it will write to the storage
// You also can't tell the ts that null isn't allowed even though null can be returned
subscribe(ValtioAsyncStorageKey, () => {
  if (ValtioAsyncStorageKey.state) {
    return AsyncStorage.setItem(
      "async-storage-key",
      ValtioAsyncStorageKey.state
    );
  }

  return AsyncStorage.removeItem("async-storage-key");
});

export { useValtioAsyncStorageKey, ValtioAsyncStorageKey };
