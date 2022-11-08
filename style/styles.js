import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("window");

export const styles  = (props) => StyleSheet.create({
  appContainer_light: {
    padding: "2%",
    backgroundColor: "#ffffff",
    height: "100%",
  },
  appContainer_dark: {
    padding: "2%",
    backgroundColor: "black",
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
  setting_light: {
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
  setting_dark: {
    marginTop: 50,
    marginRight: 15,
    marginLeft: 40,
    marginBottom: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
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
  tutorial_light: {
    marginTop: 50,
    marginRight: 10,
    marginBottom: 50,
    width: 105,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  tutorial_dark: {
    marginTop: 50,
    marginRight: 10,
    marginBottom: 50,
    width: 105,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },
  headerContainer: {
    flexDirection: "row",
    height: height*0.15,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 'auto',
  },

  /*Middle*/

  middleContainer: {
    flexDirection: "column",
    height: height*0.7,
    justifyContent: "space-between",
   
    marginLeft: "2%",
  },

  heading_light: {
    alignItems: "center",
    fontSize: 30,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },
  heading_dark: {
    alignItems: "center",
    fontSize: 30,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  bodyText_light: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "#000000",
  },
  bodyText_dark: {
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    color: "white",
  },

  buttonText: {
    fontSize: 15,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    color: "#000000",
  },
  buttonText_light: {
    fontSize: 17,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    color: "#000000",
  },
  buttonText_dark: {
    fontSize: 17,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
    color: "white",
  },

  /*Footer*/

  bottomContainer: {
    flexDirection: "row",
    height: height*0.15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 'auto',
    
  },
  bottomButton: {
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

  bottomButton_light: {
    marginTop: "1%",
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
  bottomButton_dark: {
    marginTop: "1%",
    marginRight: 30,
    marginLeft: 30,
    flexDirection: "row",
    width: 120,
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  /*Page Specific*/

  /*Home Page*/
  homeContainer: {
    alignItems: "center",
    paddingTop: 35,
    marginLeft: 20,
    height: "100%",
    width: "100%",
    padding: 20,
  },

  searchBar: {
    marginRight: 42,
    marginTop: 10,
    width: 288,
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 34,
  },

  homeHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "15%",
    paddingTop: 35,
    marginLeft: 20,
  },
  homeAppContainer_light: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  homeAppContainer_dark: {
    flexDirection: "column",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  homeMiddleContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "71.5%",
    width: "100%",
    padding: 20,
  },
  homeRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "35%",
    marginLeft: 20,
  },
  homeContactContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "18%",
    width: "100%",
    marginLeft: 30,
    marginTop: 5,
  },

  // homeButton_light: {
  //   marginTop: 4,
  //   marginRight: 2,
  //   marginLeft: 5,
  //   width: 140,
  //   height: "95%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#d3d3d3",
  //   borderWidth: 1,
  //   borderColor: "black",
  //   borderRadius: 7.5,
  // },
  // homeButton_dark: {
  //   marginTop: 4,
  //   marginRight: 2,
  //   marginLeft: 5,
  //   width: 140,
  //   height: "95%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "black",
  //   borderWidth: 1,
  //   borderColor: "white",
  //   borderRadius: 7.5,
  // },
  homeButton_light: {
    marginTop: 20,
    marginRight: 25,
    marginLeft: 5,
    width: 340,
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  homeButton_dark: {
    marginTop: 20,
    marginRight: 25,
    marginLeft: 5,
    width: 340,
    height: "16%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  contactButton_light: {
    marginTop: 28,
    marginLeft: 5,
    marginRight: 45,
    marginBottom: 100,
    width: 292,
    height: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  contactButton_dark: {
    marginTop: 28,
    marginLeft: 5,
    marginRight: 45,
    marginBottom: 100,
    width: 292,
    height: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  /*About VBIS*/

  staffButton_light: {
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    width: 310,
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  staffButton_dark: {
    marginTop: 30,
    marginRight: 20,
    marginLeft: 20,
    width: 310,
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  /*Staff Members*/

  bodyTextStaff_light: {
    fontSize: 20,
    textAlign: "left",
    padding: 4,
    color: "#000000",
  },

  bodyTextStaff_dark: {
    fontSize: 20,
    textAlign: "left",
    padding: 4,
    color: "white",
  },

  /*Settings*/

  themeChange: {
    justifyContent: "center",
    alignItems: "center",
  },

  photoThemeChange: {
    flexDirection: "row",
    marginRight: 80,
  },

  themeChangeButton_light: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    flexDirection: "row",
    width: "40%",
    height: "35%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  themeChangeButton_dark: {
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    flexDirection: "row",
    width: "40%",
    height: "35%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  fontSizeChangeContainer: {
    flexDirection: "row",
    height: "15%",
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },

  font_size_setting_light: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  font_size_setting_dark: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  /*Contact Page*/

  callButton_light: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 15,
    flexDirection: "row",
    width: "90%",
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },

  callButton_dark: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 15,
    flexDirection: "row",
    width: "90%",
    height: 62,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  bodyTextContact_light: {
    fontSize: 20,
    textAlign: "left",
    padding: 4,
    color: "#000000",
  },
  bodyTextContact_dark: {
    fontSize: 20,
    textAlign: "left",
    padding: 4,
    color: "white",
  },
  contactPageScrollView: {
    height: height * 0.55,
    width: '100%',
    alignSelf: 'center',
  },
  contactPageScrollViewContentContainer: {
    paddingBottom: 50,
  },

  /*Programs Page*/
  scrollViewProgramPageContainer: {
    justifyContent: 'center',
    alignItems: "center",
    paddingBottom: 50
  },
  itemButton_light: {
    marginTop: 20,
    width: 310,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d3d3d3",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 7.5,
  },
  itemButton_dark: {
    marginTop: 20,
    width: 310,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 7.5,
  },

  /*Course Page*/
  subtitle_light: {
    alignItems: "center",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
  },
  subtitle_dark: {
    alignItems: "center",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  bodyTextCoursePage_light: {
    fontSize: 20,
    textAlign: "justify",
    padding: 10,
    color: "#000000",
  },

  bodyTextCoursePage_dark: {
    fontSize: 20,
    textAlign: "justify",
    padding: 10,
    color: "white",
  },

  /*Other Resources Page*/

  scrollViewOtherResourcePageContainer: {
    justifyContent: 'center',
    alignItems: "center",
  },

  otherResourcesBodyText_light: {
    fontSize: 20,
    textAlign: "justify",
    padding: 10,
    fontWeight: "400",
    color: "#000000",
  },
  otherResourcesBodyText_dark: {
    fontSize: 20,
    textAlign: "left",
    padding: 10,
    fontWeight: "400",
    color: "white",
  },

  /* VBIS Schedule */

  /* Service List Page*/

  scrollViewServiceList: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
 
  /* Scoll View */
  scrollView: {
    height: props.bodySize < 20 ? height*0.4 : height*0.5,
    width: '100%',
    alignSelf: 'center',
  },
  scrollViewContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
