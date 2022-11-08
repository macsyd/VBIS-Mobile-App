import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";


function ServiceDescription({ navigation, route }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [subtitleSize, setSubtitleSize] = useState(fontSize.subtitleSize);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);
  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setButtonSize(fontSize.buttonSize);
  }, [fontSize]);

  useEffect(() => {
    setSubtitleSize(fontSize.subtitleSize);
  }, [fontSize]);

  useEffect(() => {
    setBodySize(fontSize.bodySize);
  }, [fontSize]);

  const { Name, Description, Location, Phone } = route.params;

  return (
    <View
      style={
        mode == "light" ? styles(bodySize).appContainer_light : styles(bodySize).appContainer_dark
      }
    >
      {/* Top Header(VBIS logo, Settings, Tuitorial)*/}
      <View style={styles(bodySize).headerContainer}>
        <TopHeader navigation={navigation} />
      </View>

      <View style={styles(bodySize).middleContainer}>
        {/* Heading*/}
        <Text
          style={[
            mode == "light" ? styles(bodySize).heading_light : styles(bodySize).heading_dark,
            { fontSize: subtitleSize },
          ]}
        >
          {Name}
        </Text>
        <SafeAreaView>
          <ScrollView
            style={styles(bodySize).scrollView}
            contentContainerStyle={styles(bodySize).scrollViewContentContainer}>            
            <Text
              style={[
                mode == "light"
                  ? styles(bodySize).subtitle_light
                  : styles(bodySize).subtitle_dark,
                { fontSize: subtitleSize },
              ]}
            >
              Description
            </Text>

            <Text
              style={[
                mode == "light"
                  ? styles(bodySize).bodyTextCoursePage_light
                  : styles(bodySize).bodyTextCoursePage_dark,
                { fontSize: bodySize },
              ]}
            >
              {" "}
              {Description}
            </Text>

            <Text
              style={[
                mode == "light"
                  ? styles(bodySize).subtitle_light
                  : styles(bodySize).subtitle_dark,
                { fontSize: subtitleSize },
              ]}
            >
              {" "}
              Location
            </Text>
            <Text
              style={[
                mode == "light"
                  ? styles(bodySize).bodyTextCoursePage_light
                  : styles(bodySize).bodyTextCoursePage_dark,
                { fontSize: bodySize },
              ]}
            >
              {Location}
            </Text>

            <Text
              style={[
                mode == "light"
                  ? styles(bodySize).subtitle_light
                  : styles(bodySize).subtitle_dark,
                { fontSize: subtitleSize },
              ]}
            >
              {" "}
              Phone
            </Text>
            <Text
              style={[
                mode == "light"
                  ? styles(bodySize).bodyTextCoursePage_light
                  : styles(bodySize).bodyTextCoursePage_dark,
                { fontSize: bodySize },
              ]}
            >
              {Phone}
            </Text>
          </ScrollView>
        </SafeAreaView>
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles(bodySize).bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default ServiceDescription;
