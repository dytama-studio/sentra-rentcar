import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "@/interface/auth";

interface UserState {
  user: UserProfile | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
