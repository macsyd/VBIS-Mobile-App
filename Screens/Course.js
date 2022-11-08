import { StatusBar } from "expo-status-bar";
//import * as Font from 'expo-font';
import { AppLoading } from "expo";
import * as React from "react";
import TopHeader from "../Components/TopHeader";
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
import { Searchbar } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "../style/styles";

import Footer from "../Components/Footer";

function Course({ navigation, route }) {
  // get the current theme & font size

  const theme = useSelector((state) => state.theme);
  const fontSize = useSelector((state) => state.fontSize);
  // initialize action dispatcher
  const dispatch = useDispatch();

  // define a component mode state
  const [mode, setMode] = useState(theme.mode);
  const [bodySize, setBodySize] = useState(fontSize.bodySize);
  const [subtitleSize, setSubtitleSize] = useState(fontSize.subtitleSize);

  // Update the app Incase the theme mode changes / font size changes
  useEffect(() => {
    setMode(theme.mode);
  }, [theme]);

  useEffect(() => {
    setBodySize(fontSize.bodySize);
  }, [fontSize]);

  useEffect(() => {
    setSubtitleSize(fontSize.subtitleSize);
  }, [fontSize]);

  const { ID } = route.params;
  const { Desc } = route.params;
  const { InPer } = route.params;
  const { Online } = route.params;
  const { StartTime } = route.params;
  const { EndTime } = route.params;
  const { Monday } = route.params;
  const { Tuesday } = route.params;
  const { Wednesday } = route.params;
  const { Thursday } = route.params;
  const { Friday } = route.params;

  return (
    <View
      style={
        mode == "light" ? styles(bodySize).appContainer_light : styles(bodySize).appContainer_dark
      }
    >
      <View style={styles(bodySize).headerContainer}>
        <TopHeader navigation={navigation} />
      </View>
      <View style={styles(bodySize).middleContainer}>
        <View>
          <Text
            style={[
              mode == "light" ? styles(bodySize).heading_light : styles(bodySize).heading_dark,
              { fontSize: subtitleSize },
            ]}
          >
            {" "}
            {ID}{" "}
          </Text>
          <SafeAreaView>
            <ScrollView
              style={styles(bodySize).scrollView}
              contentContainerStyle={styles(bodySize).scrollViewServiceList}>
              <Text
                style={[
                  mode == "light"
                    ? styles(bodySize).subtitle_light
                    : styles(bodySize).subtitle_dark,
                  { fontSize: subtitleSize },
                ]}
              >
                Schedule
              </Text>

              <Text
                style={[
                  mode == "light"
                    ? styles(bodySize).bodyTextCoursePage_light
                    : styles(bodySize).bodyTextCoursePage_dark,
                  { fontSize: bodySize },
                ]}
              >
                {Online ? (
                  <Text>Offered Online</Text>
                ) : (
                  <Text>Offered in Person</Text>
                )}
              </Text>
              {Monday ? (
                <Text
                  style={[
                    mode == "light"
                      ? styles(bodySize).bodyTextCoursePage_light
                      : styles(bodySize).bodyTextCoursePage_dark,
                    { fontSize: bodySize },
                  ]}
                >
                  Monday
                  {StartTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {StartTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}AM
                        </Text>
                      ) : StartTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                  -
                  {EndTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {EndTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}AM
                        </Text>
                      ) : EndTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </Text>
              ) : null}
              {Tuesday ? (
                <Text
                  style={[
                    mode == "light"
                      ? styles(bodySize).bodyTextCoursePage_light
                      : styles(bodySize).bodyTextCoursePage_dark,
                    { fontSize: bodySize },
                  ]}
                >
                  Tuesday
                  {StartTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {StartTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}AM
                        </Text>
                      ) : StartTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                  -
                  {EndTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {EndTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}AM
                        </Text>
                      ) : EndTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </Text>
              ) : null}
              {Wednesday ? (
                <Text
                  style={[
                    mode == "light"
                      ? styles(bodySize).bodyTextCoursePage_light
                      : styles(bodySize).bodyTextCoursePage_dark,
                    { fontSize: bodySize },
                  ]}
                >
                  Wednesday
                  {StartTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {StartTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}AM
                        </Text>
                      ) : StartTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}PM
                        </Text>
                      ) : (
                        <Text
                          sstyle={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                  -
                  {EndTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {EndTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}AM
                        </Text>
                      ) : EndTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </Text>
              ) : null}
              {Thursday ? (
                <Text
                  style={[
                    mode == "light"
                      ? styles(bodySize).bodyTextCoursePage_light
                      : styles(bodySize).bodyTextCoursePage_dark,
                    { fontSize: bodySize },
                  ]}
                >
                  Thursday
                  {StartTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {StartTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}AM
                        </Text>
                      ) : StartTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                  -
                  {EndTime != null ? (
                    <Text style={styles(bodySize).bodyText}>
                      {EndTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}AM
                        </Text>
                      ) : EndTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </Text>
              ) : null}
              {Friday ? (
                <Text
                  style={[
                    mode == "light"
                      ? styles(bodySize).bodyTextCoursePage_light
                      : styles(bodySize).bodyTextCoursePage_dark,
                    { fontSize: bodySize },
                  ]}
                >
                  Friday
                  {StartTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {StartTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}AM
                        </Text>
                      ) : StartTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {" "}
                          {StartTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                  -
                  {EndTime != null ? (
                    <Text
                      style={[
                        mode == "light"
                          ? styles(bodySize).bodyTextCoursePage_light
                          : styles(bodySize).bodyTextCoursePage_dark,
                        { fontSize: bodySize },
                      ]}
                    >
                      {EndTime < 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}AM
                        </Text>
                      ) : EndTime === 12 ? (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime}PM
                        </Text>
                      ) : (
                        <Text
                          style={[
                            mode == "light"
                              ? styles(bodySize).bodyTextCoursePage_light
                              : styles(bodySize).bodyTextCoursePage_dark,
                            { fontSize: bodySize },
                          ]}
                        >
                          {EndTime - 12}PM
                        </Text>
                      )}
                    </Text>
                  ) : null}
                </Text>
              ) : null}
              <Text
                style={[
                  mode == "light"
                    ? styles(bodySize).subtitle_light
                    : styles(bodySize).subtitle_dark,
                  { fontSize: subtitleSize },
                ]}
              >
                Information
              </Text>
              <Text
                style={[
                  mode == "light"
                    ? styles(bodySize).bodyTextCoursePage_light
                    : styles(bodySize).bodyTextCoursePage_dark,
                  { fontSize: bodySize },
                ]}
              >
                {Desc}
              </Text>
            </ScrollView>
          </SafeAreaView>
        </View>
      </View>

      <View style={styles(bodySize).bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Course;
