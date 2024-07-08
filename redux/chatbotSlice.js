import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  questions: [],
  messages: [],
};

const chatBotSlice = createSlice({
  name: "chatBot",
  initialState,
  reducers: {
    setChatBot: (state, { payload }) => {
      state.isOpen = payload;
    },
    setChat: (state, { payload }) => {
      state.questions = [...state.questions, payload];
    },
    setMessage: (state, { payload }) => {
      state.messages = [...state.messages, payload];
    },
  },
});

const { reducer, actions } = chatBotSlice;
export const { setChatBot, setChat, setMessage } = actions;
export default reducer;
// export the action creator for other components to use it in dispatch() function of redux store
