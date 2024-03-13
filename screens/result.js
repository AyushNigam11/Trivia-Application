import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Result = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text> Result </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/elegant-business-man-celebrating_24908-81791.jpg?t=st=1708374043~exp=1708377643~hmac=0d65a2e7b2cb590837c848ecc2826222c6bb4ddf650bf7ae3ac33c809c63257b&w=1060",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: "100%",
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
