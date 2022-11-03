import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import TopHeader from "../Components/TopHeader";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Staff from "./Staff";
import Footer from "../Components/Footer";
import { styles } from "../style/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { about } from "../Database/firebase.js";

function AboutVbis({ navigation }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);
  const [subtitleSize, setSubtitleSize] = useState(fontSize.subtitleSize);

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

  useEffect(() => {
    setSubtitleSize(fontSize.subtitleSize);
  }, [fontSize]);
  
  return (
    <View
      style={
        mode == "light" ? styles.appContainer_light : styles.appContainer_dark
      }
    >
      {/* Top Header(VBIS logo, Settings, Tuitorial)*/}
      <View style={styles.headerContainer}>
        <TopHeader navigation={navigation} />
      </View>

      <View style={styles.middleContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}>
          <View>
            {/* Heading*/}
            <Text
              style={
                [mode == "light" ? styles.heading_light : styles.heading_dark, {fontSize: subtitleSize}]
              }
              accessibilityRole="header"
            >
              About VBIS
            </Text>

            {/* Description About VBIS*/}
            <Text
              style={
                [mode == "light" ? styles.bodyText_light : styles.bodyText_dark, {fontSize: bodySize}]
              }
              accessibilityRole="text"
            >
              {about}
            </Text>
            {/* Staff Member VBIS Button*/}
            <View>
              <Pressable
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="VBIS staff members"
                accessibilityHint="See a description of staff positions at VBIS"
                onPress={() => navigation.navigate("Staff")}
                style={
                  mode == "light"
                    ? styles.staffButton_light
                    : styles.staffButton_dark
                }
              >
                <Text
                  style={
                    [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
                  }
                >
                  Staff Members
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default AboutVbis;
