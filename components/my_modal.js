import React from "react";
import { Text, View, Button, Modal, ImageBackground } from "react-native";
import styles from "../styles/styles";
import Fond from "../images/fond.jpg";

const My_Modal = ({ state, dispatch }) => {
  return (
    <Modal visible={state.modal} animationType={"fade"}>
      <ImageBackground source={Fond} style={styles.background}>
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>Le capitaine de la soirée est ...</Text>
            <Text style={styles.selected}>{state.nameSelect}</Text>
            <View style={styles.back}>
              <Button
                color="red"
                onPress={() => dispatch({ type: "SET_MODAL", payload: false })}
                title="Retour"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

export default My_Modal;
