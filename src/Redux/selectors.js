export const selectIsLoggedIn = (state) => state?.auth?.isLoggedIn === true;

export const selectUser = (state) => state.auth;
