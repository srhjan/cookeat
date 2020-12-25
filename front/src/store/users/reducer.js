import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/StoreService";

const { user, token } = getUser();

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    current: {
      isConnected: Boolean(user),
      user: user || {},
      token: token || "",
    },
  },
  reducers: {
    setConnectedUser(state, action) {
      state.current = {
        isConnected: true,
        // action.payload contient user et token
        ...action.payload,
      };
    },
  },
});

// Extract the action creators object and the reducer
const actions = usersSlice.actions;
const reducer = usersSlice.reducer;

// Extract and export each action creator by name

export const { setConnectedUser } = actions;

//Export the reducer, either as a default or named export

export default reducer;
