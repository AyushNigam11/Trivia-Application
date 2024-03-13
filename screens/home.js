import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import Title from "../components/title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Text>This is Home</Text> */}
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/medium-shot-woman-posing-with-question-marks_23-2150408207.jpg?t=st=1710362797~exp=1710366397~hmac=14d483c6021621d2420616fa86fc19a6ec131e29f03481fc3c59742bad9f02fe&w=1380",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    height: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
