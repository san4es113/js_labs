const initialState = {
  isUserPresent: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken'),
  email: localStorage.getItem('email')
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
    {
      localStorage.setItem('accessToken', action.token);
      localStorage.setItem('email', action.email)
      return {
        ...state,
        isUserPresent: true,
        email: action.email,
        accessToken: action.token
      }
    }
    case "LOGOUT":
    {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('email');
      window.location.reload();
    }

    default:
    return state;
  }
}
