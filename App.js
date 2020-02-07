import React, { useEffect, useReducer } from "react";
import {
  Text,
  View,
  Button,
  StatusBar,
  ScrollView,
  ImageBackground
} from "react-native";
import styles from "./styles/styles";
import { reducer, initialState, retrieveData } from "./reduce/reducer";
import Listing from "./components/listing";
import My_Modal from "./components/my_modal";
import Add_name from "./components/add_name";
import Fond from "./images/fond.jpg";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    retrieveData({ dispatch });
  }, []);

  const random_Name = () => {
    if (state.namesList.length > 0) {
      dispatch({ type: "RANDOM_NAME" });
      dispatch({ type: "SET_MODAL", payload: true });
    } else {
      alert("Veuillez inscrire au minimum 2 personnes svp");
    }
  };
  return (
    <ImageBackground source={Fond} style={styles.background}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <My_Modal state={state} dispatch={dispatch} />
        <Text style={styles.title}>Choisis ton capitaine de soirée</Text>
        <View style={styles.separator} />
        <Add_name state={state} dispatch={dispatch} />
        <View style={styles.separator} />
        <ScrollView style={styles.scroll}>
          <Listing data={state.namesList} dispatch={dispatch} />
        </ScrollView>
        <View style={styles.separator} />
        <View style={styles.launch}>
          <Button color="green" title="Lancez" onPress={() => random_Name()} />
        </View>
        <View style={styles.launch}>
          <Button
            color="red"
            title="Tout supprimer"
            onPress={() => dispatch({ type: "RAZ" })}
          />
        </View>
        <View style={styles.separator} />
      </View>
    </ImageBackground>
  );
}
