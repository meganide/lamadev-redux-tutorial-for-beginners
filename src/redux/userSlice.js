import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'Renas',
    email: 'renas@gmail.com',
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, remove } = userSlice.actions;

export default userSlice.reducer;
