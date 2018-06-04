# Tipme

## React-Native app for iOS and Android

  The project uses babel to allow using ES6 and flow for type checking. 
  React-navigation is used for routing as it is suggested by the official react-native docs. _Though it is making app load a wee bit slower, need to see if I can replace it with my own customized navigator_

### Setting up the environment

- https://facebook.github.io/react-native/docs/getting-started.html
-  https://blog.cloudboost.io/react-native-setup-on-macos-aedb1a44f527
- https://github.com/rotati/wiki/wiki/Guide-To-Setup-React-Native-Development-Environment-%5BMac%5D
  
### running on ios
* cd to the project
* run command `react-native run-ios`

### running on android
* cd to the project
* run command `react-native run-android`

### running the metro bundler
* cd to the project
* run command `npm run start`

When you change file names, metro bundler will not update with hot reloading/live reloading. You have to either stop and restart the bundler or run `watchman watch-del-all && react-native start --reset-cache`


### Generating minified bundle
`react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios`
