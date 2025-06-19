# Welcome to react-query-async-storage 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
   yarn expo start
   ```

In the output, you'll find options to open the app in the following, you should use Expo Go as this is just a demo with no native deps (outside of the ones that comes with Expo by default)

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Goal

The goal of this project is to show an example of using react-query to manage your async storage values. Currently using [valtio or zustand](https://github.com/pmndrs/zustand/issues/483) work decently but require manual initialization and a lof of boilerplate, such as loading / initialization states, stale times, etc... that comes standard with react-query, its also less intuitive than react-query for updating state across the application in my opinion. Because [react-query](https://tanstack.com/) supports [reactotron](https://tanstack.com/query/latest/docs/framework/react/react-native#devtools-support) out of the box, this should allows us to monitor our async storage stage with it as well. Moving forward once [react-native-dev-tool](https://reactnative.dev/docs/react-native-devtools) is robust enough to support plugins, or offers state monitoring react-query will likely be compatible, offering another avenue for Async Storage monitoring.

This also allows for better key management, and perhaps future state would allow custom parsers etc... for things that do not deserialize well (specifically dates).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
