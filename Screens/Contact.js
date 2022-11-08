import * as React from "react";
import call from "react-native-phone-call";
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
//icon
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";
import Footer from "../Components/Footer";
import { styles } from "../style/styles";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { address, email, hours, phone } from "../Database/firebase.js";
//email
import sendemail from 'react-native-email'
//map
import {showLocation} from 'react-native-map-link';
const VBISRegion = {
  latitude: 48.43251013505817,
  longitude: -123.36010116633796,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

function Contact({ navigation }) {

  
  const mapLocation= () => {
    

    showLocation({
      latitude: 48.43251013505817,
      longitude: -123.36010116633796,
      //sourceLatitude: 0.01,// optionally specify starting location for directions
      //sourceLongitude: 0.01,// not optional if sourceLatitude is specified
      title: 'VBIS', // optional
      //googleForceLatLon: false, // optionally force GoogleMaps to use the latlon for the query instead of the title
      alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
      dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
      dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
      cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
      appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
      naverCallerName: 'com.example.myapp', // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
      // appTitles: { 'google-maps': 'My custom Google Maps title' }, // optionally you can override default app titles
      // app: 'uber',  // optionally specify specific app to use
      //directionsMode: 'car', // optional, accepted values are 'car', 'walk', 'public-transport' or 'bike'
    });
  }
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

  const triggerCall = () => {
    const args = {
      number: phone, // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };

 const handleEmail = () => {
    const to = ['admin@vbis.ca'] // string or array of email addresses
    sendemail(to, {
        // Optional additional arguments
        cc: ['', ''], // string or array of email addresses
        bcc: '', // string or array of email addresses
        subject: 'Subject of Your Enquiry ',
        body: '[Write Here]',
        checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
    }).catch(console.error)
}
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
          {/* Heading */}
          <Text
            style={
              [mode == "light" ? styles(bodySize).heading_light : styles(bodySize).heading_dark, {fontSize: subtitleSize}]
          }
            accessibilityRole="header"
          >
            Contact
          </Text>
          {/* Contact Description */}
          <ScrollView
          style={styles(bodySize).contactPageScrollView}
          contentContainerStyle={styles(bodySize).contactPageScrollViewContentContainer}>
            <Text
              style={
                [mode == "light" ? styles(bodySize).bodyTextContact_light : styles(bodySize).bodyTextContact_dark, {fontSize: bodySize}]
              }
              accessibilityRole="text"
            >
              <Text style={{ fontWeight: "bold" }}> Location:</Text>
              <Text> {address}</Text>
            </Text>
            <Text
              style={
                [mode == "light" ? styles(bodySize).bodyTextContact_light : styles(bodySize).bodyTextContact_dark, {fontSize: bodySize}]
              }
              accessibilityRole="text"
            >
              <Text style={{ fontWeight: "bold" }}> Working Hours:</Text>
              <Text> {hours} </Text>
            </Text>
            <Text
              style={
                [mode == "light" ? styles(bodySize).bodyTextContact_light : styles(bodySize).bodyTextContact_dark, {fontSize: bodySize}]
              }
              accessibilityRole="text"
            >
              <Text style={{ fontWeight: "bold" }}> Phone:</Text>
              <Text> {phone}</Text>
            </Text>
            <Text
              style={
                [mode == "light" ? styles(bodySize).bodyTextContact_light : styles(bodySize).bodyTextContact_dark, {fontSize: bodySize}]
              }
              accessibilityRole="text"
            >
              <Text style={{ fontWeight: "bold" }}> Email:</Text>
              <Text> {email}</Text>
            </Text>
            <View>
              <Pressable
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="Call VBIS"
                accessibilityHint="Open Phone app to call the VBIS front desk"
                onPress={triggerCall}
                style={
                  mode == "light"
                    ? styles(bodySize).callButton_light
                    : styles(bodySize).callButton_dark
                }
              >
                <Ionicons name="call" size={24} color={mode == "light" ? 'black' : 'white'} />
                <Text
                  style={
                    [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
                  }
                >
                  Call Us
                </Text>
              </Pressable>

              <Pressable
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="Call VBIS"
                accessibilityHint="Open Phone app to call the VBIS front desk"
                onPress={handleEmail}
                style={
                  mode == "light"
                    ? styles(bodySize).callButton_light
                    : styles(bodySize).callButton_dark
                }
              >
              <MaterialIcons name="email" size={24} color={mode == "light" ? 'black' : 'white'} />
                <Text
                  style={
                    [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
                  }
                >
                  Send Us Email
                </Text>
              </Pressable>
              <Pressable
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="Call VBIS"
                accessibilityHint="Open Phone app to call the VBIS front desk"
                onPress={mapLocation}
                style={
                  mode == "light"
                    ? styles(bodySize).callButton_light
                    : styles(bodySize).callButton_dark
                }
              >
              <MaterialCommunityIcons name="map-marker-radius-outline" size={24}color={mode == "light" ? 'black' : 'white'} />
                <Text
                  style={
                    [mode == "light" ? styles(bodySize).buttonText_light : styles(bodySize).buttonText_dark, {fontSize: buttonSize}]
                  }
                >
                  See Location on Map
                </Text>
              </Pressable>
            
            </View>
          </ScrollView>
        </View>

        {/* <View style={styles(bodySize).container}>
          <MapView
            style={styles(bodySize).map}
            initialRegion={VBISRegion} 
          >
            <Marker coordinate={VBISRegion} />
          </MapView>
        </View> */}
      </View>
      {/* Footer of the page(Back Button, Home Button)*/}
      <View style={styles(bodySize).bottomContainer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

export default Contact;
