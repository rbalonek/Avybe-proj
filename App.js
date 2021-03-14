import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [inputNameValue, setInputNameValue] = useState();
  const [inputImgValue, setInputImgValue] = useState();
  const [inputName, setInputName] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [name, setName] = useState("Please Import Name");
  const [img, setImg] = useState(
    "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1601145853/robertbalonek.com/Headshots/IMG_9570_aoed89.jpg"
  );

  const storeName = async (value) => {
    try {
      await AsyncStorage.setItem("@store_name", value);
    } catch (e) {}
  };

  const storeImg = async (value) => {
    try {
      await AsyncStorage.setItem("@store_img", value);
    } catch (e) {}
  };

  const getName = async () => {
    try {
      const value = await AsyncStorage.getItem("@store_name");
      if (value !== null) {
        setName(value);
      }
    } catch (e) {}
  };
  getName();

  const getImg = async () => {
    try {
      const value = await AsyncStorage.getItem("@store_img");
      if (value !== null) {
        setImg(value);
      }
    } catch (e) {}
  };
  getImg();

  const btnClickName = () => {
    setName(inputName);
    storeName(inputName);
    setInputNameValue("");
  };

  const btnClickImg = () => {
    setImg(inputImg);
    storeImg(inputImg);
    setInputImgValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.name}>{name}</Text>
        <Image
          style={styles.image}
          source={{
            uri: `${img}`,
          }}
        />
      </View>
      <View style={styles.inputs}>
        <TextInput
          value={inputNameValue}
          placeholder="Change name HERE"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            textAlign: "center",
          }}
          onChangeText={(text) => setInputName(text)}
        />

        <TextInput
          value={inputImgValue}
          placeholder="Change Image URL HERE"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 200,
            textAlign: "center",
          }}
          onChangeText={(text) => setInputImg(text)}
        />
      </View>
      <View style={styles.inputs}>
        <Button title="Change Name" onPress={btnClickName} />
        <Button title="Change Image" onPress={btnClickImg} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    position: "absolute",
    top: 100,
  },
  welcomeText: {
    fontSize: 40,
  },
  name: {
    fontSize: 40,
    color: "red",
    textAlign: "center",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 5,
    alignSelf: "center",
  },
  inputs: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    position: "relative",
    bottom: -100,
  },
  buttons: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
