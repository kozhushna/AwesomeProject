export const storeUser = (user) => {
  return {
    type: 'AUTH_USER',
    payload: {
      auth: {
        email: user.email,
        displayName: user.dispalayName,
        isLoggedIn: true,
      },
    },
  };
};
export const clearUser = () => {
  return {
    type: 'CLEAR_USER',
    payload: null,
  };
};
