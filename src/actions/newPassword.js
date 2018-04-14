const actions = {
  newPasswordRequired: user => ({
    type: 'COGNITO_LOGIN_NEW_PASSWORD_REQUIRED',
    user,
  }),
}

export default actions