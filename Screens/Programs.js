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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";
import { programList } from "../Database/firebase.js";

function Programs({ navigation }) {
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
        mode == "light" ? styles(bodySize).appContainer_light : styles(bodySize).appContainer_dark
      }
    >
      {/* Top Header(VBIS logo, Settings, Tuitorial)*/}
      <View style={styles(bodySize).headerContainer}>
        <TopHeader navigation={navigation} />
      </View>
      <View style={styles(bodySize).middleContainer}>
        <View>
          {/* Heading*/}
          <Text
            style={
              [mode == "light" ? styles(bodySize).heading_light : styles(bodySize).heading_dark, {fontSize: subtitleSize}]
            }
          >
            {" "}
            Programs{" "}
          </Text>
          {/* List of Programs*/}
          <SafeAreaView>
            <ScrollView
              style={styles(bodySize).scrollView}
              contentContainerStyle={styles(bodySize).scrollViewProgramPageContainer}>
              {programList.map((item) => (
                <View
                  key={item.name}
                  accessible={true}
                  accessibilityRole="button"
                  accessibilityLabel={item.name}
                  accessibilityHint="See the details of this program"
                >
                  <Pressable
                    style={
                      mode == "light"
                        ? styles(bodySize).itemButton_light
                        : styles(bodySize).itemButton_dark
                    }
                    onPress={() =>
                      navigation.navigate("COURSE", {
                        ID: item.name,
                        Desc: item.description,
                        InPer: item.inperson,
                        Online: item.online,
                        StartTime: item.start,
                        EndTime: item.end,
                        Monday: item.monday,
                        Tuesday: item.tuesday,
                        Wednesday: item.wednesday,
                        Thursday: item.thursday,
                        Friday: item.friday,
                      })
                    }
                  >
                    <Text
                      style={
                        [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
                      }
                    >
                      {item.name}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles(bodySize).bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Programs;
