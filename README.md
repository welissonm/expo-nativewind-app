# expo-nativewind-app
app with login using Expo, NativeWind and React-Navigator stack


## Setup

### Init Expo Project
npx create-expo-app -t expo-template-blank-typescript ExpoNativeWindApp

### Include dev dependencies

#### Eslint and Prettier setup

> npx install-peerdeps --dev eslint-config-airbnb
>
> npm install eslint-config-airbnb-typescript --save-dev
>
> npm init @eslint/config --config eslint-config-airbnb-typescript

add lines below into ESLint config file `.eslintrc.json`:

    "extends": [
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "prettier/react",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ]