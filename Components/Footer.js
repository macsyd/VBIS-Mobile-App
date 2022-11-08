import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
//For Bottom Icon
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
// For Theme
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Style Page Import
import { styles } from "../style/styles";

function Footer({ navigation }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);

  // Update the app Incase the theme mode changes / font size changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setButtonSize(fontSize.buttonSize);
  }, [fontSize]);

  useEffect(() => {
    setBodySize(fontSize.bodySize);
  }, [fontSize]);

  return (
    <View style={styles(bodySize).bottomContainer}>
      <View>
        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Back"
          accessibilityHint="Go back to previous page"
          style={
            mode == "light"
              ? styles(bodySize).bottomButton_light
              : styles(bodySize).bottomButton_dark
          }
          onPress={() => navigation.goBack()}
        >
          <Entypo
            name="back"
            size={22}
            color={mode == "light" ? "black" : "white"}
          />
          <Text
            style={
              [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
            }
          >
            Back
          </Text>
        </Pressable>
      </View>
      <View>
        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Home"
          accessibilityHint="Go back to home page"
          style={
            mode == "light"
              ? styles(bodySize).bottomButton_light
              : styles(bodySize).bottomButton_dark
          }
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <AntDesign
            name="home"
            size={22}
            color={mode == "light" ? "black" : "white"}
          />
          <Text
            style={
              [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
            }
          >
            Home{" "}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Footer;
