import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [buttonStyleName, setButtonStyleName] = useState(
    styles.buttonUnPressed
  );
  const [buttonStyleImg, setButtonStyleImg] = useState(styles.buttonUnPressed);
  const [inputNameValue, setInputNameValue] = useState();
  const [inputImgValue, setInputImgValue] = useState();
  const [inputName, setInputName] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [name, setName] = useState("Please Import Name");
  const [img, setImg] = useState(
    "https://res.cloudinary.com/bobalobbadingdong/image/upload/v1615681700/robertbalonek.com/Headshots/your-img-here_ppmrbm.jpg"
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
    setButtonStyleName(styles.buttonPressed);
  };
  const btnUnclickName = () => {
    setButtonStyleName(styles.buttonUnPressed);
    setInputNameValue();
  };

  const btnClickImg = () => {
    setImg(inputImg);
    storeImg(inputImg);
    setInputImgValue("");
    setButtonStyleImg(styles.buttonPressed);
  };
  const btnUnclickImg = () => {
    setButtonStyleImg(styles.buttonUnPressed);
    setInputImgValue();
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome,</Text>
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
          placeholder="Input name HERE"
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
          placeholder="Input Image URL HERE"
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
        <Pressable
          style={buttonStyleName}
          title="Change Name"
          onPressIn={btnClickName}
          onPressOut={btnUnclickName}
        >
          <Text style={styles.buttonText}>Change Name</Text>
        </Pressable>
        <Pressable
          style={buttonStyleImg}
          title="Change Image"
          onPressIn={btnClickImg}
          onPressOut={btnUnclickImg}
        >
          <Text style={styles.buttonText}>Change Image</Text>
        </Pressable>
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
  buttonUnPressed: {
    height: 145,
    width: 150,
    backgroundColor: "#f6f6f6",
    position: "relative",
    top: 14,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 27,
    },
    textAlign: "center",
    justifyContent: "center",
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 10,
  },
  buttonPressed: {
    height: 140,
    width: 140,
    backgroundColor: "#f6f6f6",
    position: "relative",
    top: 14,
    borderRadius: 25,
    shadowColor: "green",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 70,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    display: "flex",
    textAlign: "center",
    fontSize: 20,
    color: "blue",
  },
});
