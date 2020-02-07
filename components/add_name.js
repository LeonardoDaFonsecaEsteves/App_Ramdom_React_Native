import React from "react";
import { View, Button, TextInput } from "react-native";
import styles from "../styles/styles";
const Add_name = ({ state, dispatch }) => {
  return (
    <View style={styles.add}>
      <TextInput
        value={state.tempName}
        style={styles.input}
        placeholder="Nom du capitaine"
        onChange={e =>
          dispatch({ type: "TEMP_NAME", payload: e.nativeEvent.text })
        }
      />
      <View style={styles.button}>
        <Button
          color="green"
          title="Ajouter"
          onPress={() => dispatch({ type: "ADD_NAME" })}
        />
      </View>
    </View>
  );
};

export default Add_name;
