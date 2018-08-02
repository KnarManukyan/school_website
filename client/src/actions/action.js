import Redux from 'redux';
export function setEmail(email) {
  return {
    type: "SET_EMAIL",
    email
  }
}

export function setPassword(password) {
  return {
    type: "SET_PASSWORD",
    password
  }
}
