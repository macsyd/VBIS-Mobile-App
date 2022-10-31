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
import Footer from "../Components/Footer";
import { changeSize } from "../redux-store/fontActions";
import { styles } from "../style/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BUTTON_FONT_CHANGE,
  BODY_FONT_CHANGE,
  SUBTITLE_FONT_CHANGE,
} from "../redux-store/fontConstants";
// actions
import { switchMode } from "../redux-store/actions";
//Radio Group
import RadioGroup from "react-native-radio-buttons-group";

const radioButtonsData = [
  {
    id: "0", // acts as primary key, should be unique and non-empty string
    label: "Light Mode",
    selected: "true",
    color: "black",
    labelStyle: {
      marginRight: 60,
    },
  },
  {
    id: "1",
    label: "Dark Mode",
    color: "black",
  },
];

function Settings({ navigation }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);
  const [subtitleSize, setSubtitleSize] = useState(fontSize.subtitleSize);

  // Handle changing the theme mode

  const handleFontSizeIncrease = () => {
    dispatch(
      changeSize(
        BUTTON_FONT_CHANGE,
        fontSize.buttonSize + 2 <= 25 ? buttonSize + 2 : buttonSize
      )
    );
    dispatch(
      changeSize(
        BODY_FONT_CHANGE,
        fontSize.bodySize + 2 <= 24 ? bodySize + 2 : bodySize
      )
    );
    dispatch(
      changeSize(
        SUBTITLE_FONT_CHANGE,
        fontSize.subtitleSize + 2 <= 35 ? subtitleSize + 2 : subtitleSize
      )
    );
  };

  const handleFontSizeDecrease = () => {
    dispatch(
      changeSize(
        BUTTON_FONT_CHANGE,
        fontSize.buttonSize - 2 >= 16 ? buttonSize - 2 : buttonSize
      )
    );
    dispatch(
      changeSize(
        BODY_FONT_CHANGE,
        fontSize.bodySize - 2 >= 16 ? bodySize - 2 : bodySize
      )
    );
    dispatch(
      changeSize(
        SUBTITLE_FONT_CHANGE,
        fontSize.subtitleSize - 2 >= 29 ? subtitleSize - 2 : subtitleSize
      )
    );
  };

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

  const onPressRadioButton = function (radioButtonsArray) {
    const handleLightThemeChange = () => {
      dispatch(switchMode(theme.mode === "light" ? "light" : "light"));
    };

    const handleDarkThemeChange = () => {
      dispatch(switchMode(theme.mode === "light" ? "dark" : "dark"));
    };

    setRadioButtons(radioButtonsArray);
    if (radioButtonsArray[0].selected === true) {
      handleLightThemeChange();
      radioButtonsArray[0].labelStyle = { color: "black", marginRight: 60 };
      radioButtonsArray[1].labelStyle = { color: "black" };
      radioButtonsArray[1].color = "black";
      radioButtonsArray[0].color = "black";
    } else if (radioButtonsArray[1].selected === true) {
      handleDarkThemeChange();
      radioButtonsArray[1].color = "white";
      radioButtonsArray[0].color = "white";
      radioButtonsArray[0].labelStyle = { color: "white", marginRight: 60 };
      radioButtonsArray[1].labelStyle = { color: "white" };
    }
  };

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
        <View>
          {/* Heading*/}
          <Text
            style={[
              mode == "light" ? styles.heading_light : styles.heading_dark,
              { fontSize: subtitleSize },
            ]}
            accessibilityRole="header"
          >
            Settings
          </Text>

          <View style={styles.themeChange}>
            <Text
              style={[
                mode == "light" ? styles.bodyText_light : styles.bodyText_dark,
                { fontSize: bodySize },
              ]}
            >
              You are on {theme.mode} mode!
            </Text>

            <View style={styles.photoThemeChange}>
              <Image
                style={{ width: 100, height: 150, marginLeft: 70 }}
                source={require("../assets/Theme_Preview_Light_Grey.png")}
              />

              <Image
                style={{ width: 100, height: 150, marginLeft: 60 }}
                source={require("../assets/Theme_Preview_Dark_Grey.png")}
              />
            </View>

            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
          </View>
          <View style={styles.fontSizeChangeContainer}>
            <Pressable
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Increase"
              accessibilityHint="Increase font size"
              style={
                mode == "light"
                  ? styles.font_size_setting_light
                  : styles.font_size_setting_dark
              }
              onPress={handleFontSizeIncrease}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={
                  mode == "light"
                    ? require("../assets/increaseButton.png")
                    : require("../assets/increaseButton_dark.png")
                }
              />
            </Pressable>
            <Text
              style={[
                mode == "light" ? styles.bodyText_light : styles.bodyText_dark,
                { fontSize: bodySize },
              ]}
            >
              FONT SIZE
            </Text>
            <Pressable
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Decrease"
              accessibilityHint="Decrease font size"
              style={
                mode == "light"
                  ? styles.font_size_setting_light
                  : styles.font_size_setting_dark
              }
              onPress={handleFontSizeDecrease}
            >
              <Image
                style={{ width: 40, height: 40 }}
                source={
                  mode == "light"
                    ? require("../assets/decreaseButton.png")
                    : require("../assets/decreaseButton_dark.png")
                }
              />
            </Pressable>
          </View>
        </View>
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Settings;
