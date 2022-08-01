import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
} from "react-native";
import { requestPermissionLocation } from "../utils/permissions";
import LottieView from "lottie-react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../constants";
function Splash({ navigation }) {
  var screenWidth = Dimensions.get("window").width;
  var screenHeight = Dimensions.get("window").height;

  useEffect(() => {
    requestPermissionLocation();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "#effafa" }}>
      <StatusBar backgroundColor="#43ABA4" barStyle={"default"} />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image
          style={{
            width: screenWidth,
            height: 130,
          }}
          source={images.img_bg_awan}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={images.logo}
          style={{ width: screenWidth / 2, height: screenHeight / 6.7 }}
        />
        <LottieView
          source={require("../constants/loadingani.json")}
          autoPlay
          style={{ height: 15, marginTop: 10 }}
          loop
          // loop={false}
          // onAnimationFinish={() => nextPage()}
        />
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{
            width: screenWidth,
            height: screenHeight / 3,
          }}
          source={images.img_bg_splash_screen}
        />
      </View>
    </View>
  );
}

export default Splash;
