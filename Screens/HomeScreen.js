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
import { useNavigation, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Searchbar } from "react-native-paper";
//files we import
import { styles } from "../style/styles";
import configureStore from "../redux-store/store";
// component we import
import TopHeader from "../Components/TopHeader";
// component state management
import { useEffect, useState } from "react";
// redux hooks
import { useSelector, useDispatch } from "react-redux";

// Initialize the store
const store = configureStore();

function HomeScreen({ navigation }) {
  // get the current theme

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [buttonSize, setButtonSize] = useState(fontSize.buttonSize);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setButtonSize(fontSize.buttonSize);
  }, [fontSize.buttonSize]);

  useEffect(() => {
    setBodySize(fontSize.bodySize);
  }, [fontSize]);

  //const { onPress, title = 'Save' } = props;
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View
      style={
        mode == "light"
          ? styles(bodySize).homeAppContainer_light
          : styles(bodySize).homeAppContainer_dark
      }
    >
      {/*Top header Where VBIS logo, settings, tuitorial things are wriiten */}

      <View style={styles(bodySize).homeHeaderContainer}>
        <TopHeader navigation={navigation} />
      </View>
      

      {/*Middle Container Where All the Home Button are*/}

      <View style={styles(bodySize).homeContainer}>
        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="About the Victoria Brain Injury Society"
          accessibilityHint="Go to the About VBIS page"
          color="#f194ff"
          style={
            mode == "light" ? styles(bodySize).homeButton_light : styles(bodySize).homeButton_dark
          }
          onPress={() => navigation.navigate("AboutVbis")}
        >
          <Text
            style={
              [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
            }
          >
            About VBIS
          </Text>
        </Pressable>

        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Programs"
          accessibilityHint="Go to the programs page"
          color="#f194ff"
          style={
            mode == "light" ? styles(bodySize).homeButton_light : styles(bodySize).homeButton_dark
          }
          onPress={() => navigation.navigate("Programs")}
        >
          <Text
            style={
              [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
            }
          >
            Programs
          </Text>
        </Pressable>

        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Other Resources"
          accessibilityHint="Go to a list of other resources"
          color="#f194ff"
          style={
            mode == "light" ? styles(bodySize).homeButton_light : styles(bodySize).homeButton_dark
          }
          onPress={() => navigation.navigate("OtherResources")}
        >
          <Text
            style={
              [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
            }
          >
            Other Resources{" "}
          </Text>
        </Pressable>
      
        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Contact"
          accessibilityHint="See contact information for VBIS"
          color="#f194ff"
          style={
            mode == "light" ? styles(bodySize).homeButton_light : styles(bodySize).homeButton_dark
          }
          onPress={() => navigation.navigate("Contact")}
        >
          <Text
            style={
              [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
            }
          >
            {" "}
            Contact VBIS{" "}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default HomeScreen;
