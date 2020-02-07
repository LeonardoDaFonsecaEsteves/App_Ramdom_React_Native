import { AsyncStorage } from "react-native";

export const initialState = {
  tempName: "",
  namesList: [],
  nameSelect: "",
  modal: false
};

export function reducer(state, action) {
  switch (action.type) {
    case "MOUNT":
      console.log("MOUNT =>", action.payload);
      return {
        ...state,
        namesList: action.payload
      };
    case "RAZ":
      AsyncStorage.clear();
      return initialState;
    case "TEMP_NAME":
      return {
        ...state,
        tempName: action.payload
      };
    case "ADD_NAME":
      const tempState = [...state.namesList];
      tempState.push(state.tempName);
      storeData(tempState);
      return {
        ...state,
        namesList: tempState,
        tempName: ""
      };
    case "DELETE_NAME":
      const temps = state.namesList;
      temps.splice(action.payload, 1);
      storeData(temps);
      return {
        ...state,
        namesList: temps
      };
    case "RANDOM_NAME":
      const tempsIndex =
        state.namesList[Math.floor(Math.random() * state.namesList.length)];
      return {
        ...state,
        nameSelect: tempsIndex
      };

    case "SET_MODAL":
      if (action.payload) {
        return {
          ...state,
          modal: true
        };
      } else {
        return {
          ...state,
          modal: false,
          nameSelect: ""
        };
      }

    default:
      return state;
  }
}

const storeData = async state => {
  try {
    await AsyncStorage.setItem("NAMES", JSON.stringify(state));
  } catch (error) {
    console.log("error ", error);
  }
};

export const retrieveData = async ({ dispatch }) => {
  try {
    const value = await AsyncStorage.getItem("NAMES");
    if (value !== null) {
      dispatch({ type: "MOUNT", payload: JSON.parse(value) });
    }
  } catch (error) {
    console.log("error ", error);
  }
};
