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
import ServiceList from "./ServiceList";
import {
  resourceCategoryList,
  resourceDescription,
} from "../Database/firebase.js";

function OtherResources({ navigation }) {
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
    setSubtitleSize(fontSize.subtitleSize);
  }, [fontSize]);

  useEffect(() => {
    setBodySize(fontSize.bodySize);
  }, [fontSize]);
  return (
    <View
      style={
        mode == "light" ? styles.appContainer_light : styles.appContainer_dark
      }
    >
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
          >
            Other Resources
          </Text>
          <SafeAreaView>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewOtherResourcePageContainer}>
              {/* Description About Other Respurces*/}

              <Text
                style={[
                  mode == "light"
                    ? styles.otherResourcesBodyText_light
                    : styles.otherResourcesBodyText_dark,
                  { fontSize: bodySize },
                ]}
                accessibilityRole="text"
              >
                {" "}
                {resourceDescription}
              </Text>

              {resourceCategoryList.map((item) => (
                <View
                  key={item.key}
                  accessible={true}
                  accessibilityRole="button"
                  accessibilityLabel={item.name}
                  accessibilityHint="See the details of this program"
                >
                  <Pressable
                    style={
                      mode == "light"
                        ? styles.itemButton_light
                        : styles.itemButton_dark
                    }
                    onPress={() =>
                      navigation.navigate("ServiceList", {
                        Service: item.serviceList,
                        Type: item.type,
                      })
                    }
                  >
                    <Text
                      style={[
                        mode == "light"
                          ? styles.buttonText_light
                          : styles.buttonText_dark,
                        { fontSize: buttonSize },
                      ]}
                    >
                      {item.type}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default OtherResources;
