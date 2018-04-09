export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const login = (email, token) => {
  return {
    type: 'LOGIN',
    email: email,
    token: token
  }
}