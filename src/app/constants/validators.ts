export const REGEX = {
  NUMBER: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
  ONLY_NUMBER: /^\d+$/,
  ONLY_ALPHABET: /^[a-zA-Z]*$/,
  NAME: /^[a-z\ -]+$/i,
  START_WITH_ALPHABET_ENDS_WITH_DIGITS: /^[a-zA-Z]{4}[0-9]{4}$/,
  ALPHABET_WITH_DIGITS: /^[a-zA-Z0-9]+$/,
  AMOUNT: /^\d+$/,
  EMAIL: /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,5}$/i,
  PASSWORD: /(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=.*[@#$%^&+=])(?=[^0-9]*[0-9]).{8,16}/,
  URL: /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/
};

export const LIMIT = {
  MAX_PASSWORD_LENGTH: 16,
  MAX_EMAIL_LENGTH: 100,
  MAX_MOBILE_LENGTH: 10,
  MIN_MOBILE_LENGTH: 10,
  MAX_NAME_LENGTH: 50,
  MIN_NAME_LENGTH: 3,
  MAX_TITLE_LENGTH: 50,
  MAX_FOCUS_BODY_PART_LENGTH: 20,
  MAX_DES_LENGTH: 500,
  MAX_CAL_BURN_LENGTH: 10,
  MAX_QUESTION_LENGTH: 500,
  MAX_DISPLAY_ORDER_LENGTH: 3,
};
