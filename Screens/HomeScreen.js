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

  // Update the app Incase the theme mode changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setButtonSize(fontSize.buttonSize);
  }, [fontSize.buttonSize]);

  //const { onPress, title = 'Save' } = props;
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View
      style={
        mode == "light"
          ? styles.homeAppContainer_light
          : styles.homeAppContainer_dark
      }
    >
      {/*Top header Where VBIS logo, settings, tuitorial things are wriiten */}

      <View style={styles.homeHeaderContainer}>
        <TopHeader navigation={navigation} />
      </View>

      {/*Search Bar*/}
      <Searchbar
        accessible={true}
        accessibilityRole="search"
        accessibilityLabel="Search bar"
        accessibilityHint="Type a word here to search for it in the app"
        style={styles.searchBar}
        placeholder="Search"
        cancelButtonTitle='cancel'
        onChangeText={onChangeSearch}
        value={searchQuery}
        autoCorrect={false}
      />
      

      {/*Middle Container Where All the Home Button are*/}

      <View style={styles.homeMiddleContainer}>
        <View style={styles.homeRowContainer}>
          <Pressable
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="About the Victoria Brain Injury Society"
            accessibilityHint="Go to the About VBIS page"
            color="#f194ff"
            style={
              mode == "light" ? styles.homeButton_light : styles.homeButton_dark
            }
            onPress={() => navigation.navigate("AboutVbis")}
          >
            <Text
              style={
                [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
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
              mode == "light" ? styles.homeButton_light : styles.homeButton_dark
            }
            onPress={() => navigation.navigate("Programs")}
          >
            <Text
              style={
                [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
              }
            >
              Programs
            </Text>
          </Pressable>
        </View>

        <View style={styles.homeRowContainer}>
          <Pressable
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="My Schedule"
            accessibilityHint="Go to my schedule"
            style={
              mode == "light" ? styles.homeButton_light : styles.homeButton_dark
            }
            color="#f194ff"
            onPress={() => navigation.navigate("MySchedule")}
          >
            <Text
              style={
                [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
              }
            >
              My Schedule
            </Text>
          </Pressable>

          <Pressable
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="VBIS schedule"
            accessibilityHint="Go to general VBIS schedule"
            style={
              mode == "light" ? styles.homeButton_light : styles.homeButton_dark
            }
            color="#f194ff"
            onPress={() => navigation.navigate("VbisSchedule")}
          >
            <Text
              style={
                [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
              }
            >
              VBIS Schedule{" "}
            </Text>
          </Pressable>
        </View>

        <View style={styles.homeRowContainer}>
          <Pressable
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="Other Resources"
            accessibilityHint="Go to a list of other resources"
            color="#f194ff"
            style={
              mode == "light" ? styles.homeButton_light : styles.homeButton_dark
            }
            onPress={() => navigation.navigate("OtherResources")}
          >
            <Text
              style={
                [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
              }
            >
              Other Resources{" "}
            </Text>
          </Pressable>

          <Pressable
            accessible={true}
            accessibilityRole="button"
            accessibilityLabel="News"
            accessibilityHint="See the VBIS newsletter"
            color="#f194ff"
            style={
              mode == "light" ? styles.homeButton_light : styles.homeButton_dark
            }
            onPress={() => navigation.navigate("News")}
          >
            <Text
              style={
                [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
              }
            >
              {" "}
              News{" "}
            </Text>
          </Pressable>
        </View>
      </View>

      {/*Contact Button*/}

      <View style={styles.homeContactContainer}>
        <Pressable
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Contact"
          accessibilityHint="See contact information for VBIS"
          style={
            mode == "light"
              ? styles.contactButton_light
              : styles.contactButton_dark
          }
          color="#f194ff"
          onPress={() => navigation.navigate("Contact")}
        >
          <Text
            style={
              [mode == "light" ? styles.buttonText_light : styles.buttonText_dark, {fontSize: buttonSize}]
            }
          >
            Contact VBIS{" "}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default HomeScreen;
