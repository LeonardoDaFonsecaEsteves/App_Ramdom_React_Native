import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  background: {
    width: "100%",
    height: "100%"
  },
  scroll: {
    height: (Dimensions.get("window").height * 75) / 100
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontSize: Dimensions.get("window").width / 15,
    fontWeight: "bold",

    fontFamily: "sans-serif-condensed"
  },
  back: {
    fontFamily: "sans-serif-condensed",
    width: Dimensions.get("window").width / 2,
    margin: 5,
    height: Dimensions.get("window").height / 10,
    left: 50
  },
  add: {
    width: Dimensions.get("window").width - 20,
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between"
  },
  liste: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
    marginHorizontal: 16
  },
  selected: {
    color: "white",
    alignSelf: "center",
    fontSize: Dimensions.get("window").width / 20,
    fontWeight: "bold",
    margin: 5,
    fontFamily: "sans-serif-condensed"
  },
  input: {
    height: 40,
    width: Dimensions.get("window").width / 1.4,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    marginRight: 2
  },
  items: {
    color: "white",
    alignSelf: "center",
    fontSize: Dimensions.get("window").width / 20,
    fontWeight: "bold",
    marginRight: Dimensions.get("window").width / 5,
    fontFamily: "sans-serif-condensed"
  },
  // OK
  delete: {
    width: 50,
    marginLeft: Dimensions.get("window").width / 2
  },

  // OK
  launch: {
    margin: 5
  },

  // OK
  modalContainer: {
    flex: 1,
    justifyContent: "center"
  },
  innerContainer: {
    alignItems: "center"
  }
});

export default styles;
