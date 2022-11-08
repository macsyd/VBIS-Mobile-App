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
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Searchbar } from "react-native-paper";

function Tutorial({ navigation }) {
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
    <View style={styles(bodySize).appContainer}>
      <View style={styles(bodySize).headerContainer}>
        <TopHeader navigation={navigation} />
      </View>

      <View style={styles(bodySize).middleContainer}>
        <View>
          <Text style={styles(bodySize).heading}> Tutorial </Text>
          <Text style={styles(bodySize).bodyText}></Text>
        </View>
      </View>

      <View style={styles(bodySize).bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Tutorial;

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    backgroundColor: "#ffffff",

    height: "100%",
  },

  /*Top Header Style*/

  logo: {
    marginTop: 50,
    marginRight: 20,
    marginBottom: 50,
    width: 100,
    height: 50,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  setting: {
    marginTop: 50,
    marginRight: 15,
    marginLeft: 40,
    marginBottom: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  tutorial: {
    marginTop: 50,
    marginRight: 10,
    marginBottom: 50,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  headerContainer: {
    flexDirection: "row",
    height: "15%",

    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  /*Middle*/
  middleContainer: {
    flexDirection: "column",

    height: "70%",

    justifyContent: "space-between",
  },

  heading: {
    alignItems: "center",
    fontSize: 30,
    padding: 20,

    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },

  bodyText: {
    fontSize: 20,

    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#000000",
  },

  buttonText: {
    fontSize: 15,

    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    color: "#000000",
  },

  /*Bottom */
  bottomContainer: {
    flexDirection: "row",
    height: "15%",

    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  bottomButton: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    flexDirection: "row",
    width: 120,
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
});
