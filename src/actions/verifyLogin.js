export const verifyLogin = ( login ) => ({
  type: 'VERIFY_LOGIN',
  payload: {
    loggedIn: login,
  },
});
