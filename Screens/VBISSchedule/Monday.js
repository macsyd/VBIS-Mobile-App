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

import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import { changeSize } from "../../redux-store/fontActions";
import { styles } from "../../style/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BUTTON_FONT_CHANGE,
  BODY_FONT_CHANGE,
  SUBTITLE_FONT_CHANGE,
} from "../../redux-store/fontConstants";
// actions
import { switchMode } from "../../redux-store/actions";

function Monday({ navigation }) {
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
      <View style={styles.middleContainer}>
        {/* Heading*/}
        <Text
          style={[
            mode == "light" ? styles.heading_light : styles.heading_dark,
            { fontSize: subtitleSize },
          ]}
          accessibilityRole="header"
        >
          Monday
        </Text>
      </View>
    </View>
  );
}

export default Monday;
