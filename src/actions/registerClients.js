export const registerClients = (name, age, email) => ({
  type: 'REGISTER_CLIENTS',
  payload: {
    name,
    age,
    email,
  }
})
