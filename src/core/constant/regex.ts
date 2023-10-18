// regex phone number validation for libya starts with +218
const phoneRegExp = /^\+218[0-9]{9}$/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
// english letters and accept spaces and special characters
const enRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/;
// arabic letters and accept spaces and special characters
const arRegex = /^[\u0621-\u064A0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? ]+$/;

export {
  phoneRegExp,
  passwordRegexp,
  enRegex,
  arRegex,
};
