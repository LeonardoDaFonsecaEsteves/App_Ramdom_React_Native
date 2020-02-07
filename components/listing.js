import React from "react";
import { FlatList, Text, View, Button } from "react-native";
import styles from "../styles/styles";

const Listing = ({ data, dispatch }) => {
  return (
    <>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <View style={styles.liste}>
            <Text style={styles.items}>{item}</Text>
            <View style={styles.delete}>
              <Button
                title="X"
                color="red"
                onPress={() =>
                  dispatch({ type: "DELETE_NAME", payload: index })
                }
              />
            </View>
          </View>
        )}
        keyExtractor={index => index}
      />
    </>
  );
};

export default Listing;
