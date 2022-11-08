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
//Calendar
import { Agenda } from 'react-native-calendars';
import { Card } from "react-native-paper";

// import Monday from "./VBISSchedule/Monday";

function VbisSchedule({ navigation }) {
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

  // schedule
  const[items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for(let i = -15; i < 85; i++){
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if(!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for(let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + '#' + j,
              height: Math.max(5, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItmes = {};
      Object.keys(items).forEach((key) => {
        newItmes[key] = items[key];
      });
      setItems(newItmes);
    }, 1000);
  };
  
  const renderDay = (item) => {
    return (
      <Pressable
        style={{
          marginRight: 10,
          marginTop: 17,
        }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alighItems: 'center',
              }}>
              <Typography>{item.name}</Typography>
            </View>
          </Card.Content>
        </Card>
      </Pressable>
    )
  }

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
        {/* Heading*/}
        <Text
          style={[
            mode == "light" ? styles(bodySize).heading_light : styles(bodySize).heading_dark,
            { fontSize: subtitleSize },
          ]}
          accessibilityRole="header"
        >
          VBIS Schedule
        </Text>
        {/* <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          // Initially selected day
          selected={'2022-05-16'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2022-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2022-05-30'}
          renderDay={renderDay}
        /> */}
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles(bodySize).bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default VbisSchedule;
